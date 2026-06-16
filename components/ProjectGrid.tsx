import { Project } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  basePath: "architecture" | "photography";
}

export default function ProjectGrid({ projects, basePath }: ProjectGridProps) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} basePath={basePath} />
      ))}
    </div>
  );
}
