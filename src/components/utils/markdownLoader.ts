import matter from 'gray-matter';

export interface MarkdownProject {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  details: {
    engine: string;
    role: string;
    duration: string;
    responsibilities: string[];
  };
  content: string;
}

// The old getProjects function has been removed.
// Caching implemented in getAllProjects.

let _cachedProjects: MarkdownProject[] | null = null;

export function getAllProjects(): MarkdownProject[] {
  if (!_cachedProjects) {
    const projectFiles = import.meta.glob('../../content/projects/*.md', {
      as: 'raw',
      eager: true
    });

    const projects: MarkdownProject[] = [];
    for (const path in projectFiles) {
      const fileContent = projectFiles[path] as string;
      const { data, content } = matter(fileContent);

      const slugMatch = path.match(/projects\/(.*?)\.md$/);
      const slug = slugMatch ? slugMatch[1] : '';

      projects.push({
        slug,
        title: data.title || '',
        date: data.date || '',
        description: data.description || '',
        image: data.image || '',
        tags: data.tags || [],
        details: {
          engine: data.details?.engine || '',
          role: data.details?.role || '',
          duration: data.details?.duration || '',
          responsibilities: data.details?.responsibilities || []
        },
        content
      });
    }
    _cachedProjects = projects.sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }
  return _cachedProjects;
}

export function getProjectBySlug(slug: string): MarkdownProject | undefined {
  return getAllProjects().find(project => project.slug === slug);
}

// Optional: Function to clear cache if needed for HMR or specific scenarios
export function clearProjectsCache() {
  _cachedProjects = null;
}