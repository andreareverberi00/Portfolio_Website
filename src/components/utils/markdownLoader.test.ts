import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getAllProjects, getProjectBySlug, clearProjectsCache, MarkdownProject } from './markdownLoader';

// Mock for import.meta.glob
// This tells Vitest that whenever import.meta.glob is called with this specific pattern,
// it should return our mockMarkdownFiles object.
// The path must exactly match the one used in markdownLoader.ts.
const mockMarkdownFiles = {
  '../../content/projects/project1.md': `---
title: Project One
date: '2023-01-01'
description: First project description.
image: /assets/project1.jpg
tags: ['React', 'TypeScript']
details:
  engine: 'React Engine'
  role: 'Developer'
  duration: '3 Months'
  responsibilities: ['Dev', 'Test']
---
Content for project one.`,
  '../../content/projects/project2.md': `---
title: Project Two
date: '2023-02-01'
description: Second project description.
image: /assets/project2.jpg
tags: ['Vue', 'JavaScript']
details:
  engine: 'Vue Engine'
  role: 'Designer'
  duration: '6 Months'
  responsibilities: ['Design', 'UX']
---
Content for project two.`,
  '../../content/projects/project-no-details.md': `---
title: Project No Details
date: '2023-03-01'
description: Third project with no details section.
image: /assets/project3.jpg
tags: ['Svelte']
# No details block here
---
Content for project three.`,
};

vi.mock('vite-glob- कच्चे', () => ({ default: {} })); // Placeholder for type, actual mock below

// This is the key part for mocking import.meta.glob
// It needs to match how Vite resolves these globs internally for Vitest to pick it up.
// A common pattern is to mock the literal string of the glob pattern.
// If markdownLoader.ts uses `import.meta.glob('../../content/projects/*.md', ...)`
// then the key for the mock should reflect that.
// Vitest's module mocking system will replace the glob call.
Object.defineProperty(globalThis, 'import.meta', {
  value: {
    glob: (pattern, options) => {
      if (pattern === '../../content/projects/*.md' && options?.as === 'raw' && options?.eager === true) {
        return mockMarkdownFiles;
      }
      // Fallback for other glob patterns if any, or throw error
      console.warn(`Unexpected import.meta.glob pattern: ${pattern}`);
      return {};
    },
  },
  configurable: true, // Allow redefining for other tests if necessary
  writable: true,
});


describe('markdownLoader', () => {
  beforeEach(() => {
    // Clear the cache before each test to ensure test isolation
    clearProjectsCache();
  });

  afterEach(() => {
    // Restore any potentially changed mocks or global state if necessary
    vi.restoreAllMocks(); // Good practice, though direct import.meta mock might need specific cleanup
    // Reset import.meta.glob to a default non-mocked state or a specific clean mock if needed
    Object.defineProperty(globalThis, 'import.meta', {
        value: { glob: () => { throw new Error("import.meta.glob not mocked for this test") } },
        configurable: true,
        writable: true,
    });
  });

  describe('getAllProjects', () => {
    it('should return an array of projects with correct properties', () => {
      // Re-apply the mock for this specific test context if afterEach clears it too aggressively
      Object.defineProperty(globalThis, 'import.meta', {
        value: { glob: (pattern) => pattern === '../../content/projects/*.md' ? mockMarkdownFiles : {} },
        configurable: true, writable: true,
      });

      const projects = getAllProjects();
      expect(Array.isArray(projects)).toBe(true);
      // Number of files defined in mockMarkdownFiles
      expect(projects.length).toBe(3);

      projects.forEach(project => {
        expect(project).toHaveProperty('slug');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('date');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('image');
        expect(project).toHaveProperty('tags');
        expect(project).toHaveProperty('details');
        expect(project).toHaveProperty('content');
        expect(typeof project.title).toBe('string');
      });

      const project1 = projects.find(p => p.slug === 'project1');
      expect(project1).toBeDefined();
      if (project1) {
        expect(project1.title).toBe('Project One');
        expect(project1.tags).toEqual(['React', 'TypeScript']);
        expect(project1.details.engine).toBe('React Engine');
        expect(project1.details.role).toBe('Developer');
        expect(project1.details.duration).toBe('3 Months');
        expect(project1.details.responsibilities).toEqual(['Dev', 'Test']);
        expect(project1.content.trim()).toBe('Content for project one.');
      }
      
      const projectNoDetails = projects.find(p => p.slug === 'project-no-details');
      expect(projectNoDetails).toBeDefined();
      if (projectNoDetails) {
        expect(projectNoDetails.title).toBe('Project No Details');
        expect(projectNoDetails.details.engine).toBe(''); // Default fallback
        expect(projectNoDetails.details.role).toBe('');   // Default fallback
        expect(projectNoDetails.details.responsibilities).toEqual([]); // Default fallback
        expect(projectNoDetails.content.trim()).toBe('Content for project three.');
      }
    });

    it('should sort projects by date in descending order', () => {
      Object.defineProperty(globalThis, 'import.meta', {
        value: { glob: (pattern) => pattern === '../../content/projects/*.md' ? mockMarkdownFiles : {} },
        configurable: true, writable: true,
      });
      const projects = getAllProjects();
      // Dates: project1: 2023-01-01, project2: 2023-02-01, project-no-details: 2023-03-01
      // Expected order: project-no-details, project2, project1
      expect(projects[0].slug).toBe('project-no-details'); // 2023-03-01
      expect(projects[1].slug).toBe('project2');       // 2023-02-01
      expect(projects[2].slug).toBe('project1');       // 2023-01-01
    });

    it('should cache results and not reprocess on subsequent calls', () => {
      Object.defineProperty(globalThis, 'import.meta', {
        value: { glob: (pattern) => pattern === '../../content/projects/*.md' ? mockMarkdownFiles : {} },
        configurable: true, writable: true,
      });

      const globSpy = vi.spyOn(globalThis.import.meta, 'glob');

      const projects1 = getAllProjects();
      expect(globSpy).toHaveBeenCalledTimes(1); // Called once for the first retrieval

      const projects2 = getAllProjects();
      expect(globSpy).toHaveBeenCalledTimes(1); // Should not be called again due to caching

      expect(projects1).toBe(projects2); // Check if the same reference is returned
      
      globSpy.mockRestore();
    });
  });

  describe('getProjectBySlug', () => {
    beforeEach(() => {
        // Ensure import.meta.glob is mocked for each test in this suite
        Object.defineProperty(globalThis, 'import.meta', {
            value: { glob: (pattern) => pattern === '../../content/projects/*.md' ? mockMarkdownFiles : {} },
            configurable: true, writable: true,
        });
    });

    it('should retrieve the correct project given a valid slug', () => {
      const project = getProjectBySlug('project1');
      expect(project).toBeDefined();
      expect(project?.title).toBe('Project One');
    });

    it('should return undefined for a non-existent slug', () => {
      const project = getProjectBySlug('non-existent-slug');
      expect(project).toBeUndefined();
    });
  });
});
