import projects from "../rsc/projects.json";

export interface ProjectData {
    name: string;
    description: string;
    text: string[];
    technologies: string[];
    language: string;
    image: string;
    date: string;
    github?: string;
    blogpost?: string;
    link?: string;
}

export function getProjects():ProjectData[] {
    return projects.map((project:ProjectData) => ({
        name: project.name,
        description: project.description,
        text: project.text,
        technologies: project.technologies,
        language: project.language,
        image: project.image,
        date: project.date,
        github: (project.github) ? project.github : undefined,
        blogpost: (project.blogpost) ? project.blogpost : undefined,
        link: (project.link) ? project.link : undefined,
    }))
}