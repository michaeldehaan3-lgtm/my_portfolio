import Link from "next/link";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  basePath: "architecture" | "photography";
}

export default function ProjectCard({ project, basePath }: ProjectCardProps) {
  const thumbnailSrc =
    project.coverImage ?? project.images[0]?.src ?? "";
  const href = `/${basePath}/${project.slug}`;

  return (
    <article
      className={`project-card max-md:min-w-0 ${project.slug === "ponderosa" ? "project-card--ponderosa" : ""} ${project.slug === "role-models" ? "project-card--role-models" : ""} ${project.slug === "drawing-estrangement" ? "project-card--drawing-estrangement" : ""} ${project.slug === "steel-and-cable" ? "project-card--steel-and-cable" : ""} ${project.slug === "sonic-storage" ? "project-card--sonic-storage" : ""} ${project.slug === "resonant-ground" ? "project-card--resonant-ground" : ""} ${project.slug === "braeside" ? "project-card--braeside" : ""} ${project.slug === "braeside-icon" ? "project-card--braeside-icon" : ""}`}
    >
      <Link href={href} className="project-card__link">
        <div className="project-card__image-wrap">
          <img
            src={thumbnailSrc}
            alt={project.title}
            className="project-card__image"
          />
        </div>
        <p
          className={`project-card__caption max-md:break-words max-md:px-1${basePath === "architecture" ? " project-card__caption--architecture" : ""}`}
        >
          {project.caption || project.title}
        </p>
      </Link>
    </article>
  );
}
