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

export function getProjects(): MarkdownProject[] {
  const projectFiles = import.meta.glob('../../content/projects/*.md', { 
    as: 'raw',
    eager: true 
  });
  
  const projects: MarkdownProject[] = [];
  
  for (const path in projectFiles) {
    const fileContent = projectFiles[path] as string;
    const { data, content } = matter(fileContent);
    
    // Extract slug from filename
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
  
  // Sort by date (newest first)
  return projects.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getProjectBySlug(slug: string): MarkdownProject | undefined {
  return getProjects().find(project => project.slug === slug);
} 
