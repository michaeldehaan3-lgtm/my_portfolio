import Image from "next/image";
import Link from "next/link";
import { Project, ProjectImage } from "@/data/portfolio";
import TypewriterBottom from "@/components/TypewriterBottom";

interface ProjectDetailProps {
  project: Project;
  basePath: "architecture" | "photography";
}

const sectionLabel =
  (basePath: string) =>
  (basePath === "architecture" ? "Architecture / Design" : "Photography");

function getYoutubeEmbedUrl(url: string, autoplay = false): string | null {
  let embedUrl: string | null = null;

  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") {
      const id = parsed.pathname.replace(/^\//, "");
      embedUrl = id ? `https://www.youtube.com/embed/${id}` : null;
    } else if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      if (id) embedUrl = `https://www.youtube.com/embed/${id}`;
      const embedMatch = parsed.pathname.match(/^\/embed\/([^/]+)/);
      if (embedMatch) embedUrl = `https://www.youtube.com/embed/${embedMatch[1]}`;
    }
  } catch {
    return null;
  }

  if (!embedUrl) return null;

  if (autoplay) {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      playsinline: "1",
    });
    embedUrl = `${embedUrl}?${params.toString()}`;
  }

  return embedUrl;
}

function ProjectImageFigure({
  img,
  alt,
}: {
  img: ProjectImage;
  alt: string;
}) {
  return (
    <figure className="project-detail__figure">
      <div className="project-detail__image-wrap">
        <Image
          src={img.src}
          alt={img.caption || alt}
          width={1200}
          height={800}
          className="project-detail__image"
          unoptimized
        />
      </div>
      {img.caption && (
        <figcaption className="project-detail__figcaption">{img.caption}</figcaption>
      )}
    </figure>
  );
}

export default function ProjectDetail({ project, basePath }: ProjectDetailProps) {
  const backLabel = `Back to ${sectionLabel(basePath)}`;
  const backHref = `/${basePath}`;
  const youtubeEmbedUrl = project.youtubeUrl
    ? getYoutubeEmbedUrl(project.youtubeUrl, project.youtubeAutoplay)
    : null;

  return (
    <article
      className={`project-detail max-md:min-w-0 max-md:overflow-x-hidden ${project.slug === "buffalo-bull-sheet" ? "project-detail--buffalo-bull-sheet" : ""} ${project.slug === "boy" ? "project-detail--boy" : ""} ${project.slug === "ponderosa" ? "project-detail--ponderosa" : ""} ${project.slug === "role-models" ? "project-detail--role-models" : ""} ${project.slug === "drawing-estrangement" ? "project-detail--drawing-estrangement" : ""} ${project.slug === "steel-and-cable" ? "project-detail--steel-and-cable" : ""} ${project.slug === "sonic-storage" ? "project-detail--sonic-storage" : ""} ${project.slug === "resonant-ground" ? "project-detail--resonant-ground" : ""} ${project.slug === "braeside" ? "project-detail--braeside" : ""} ${project.slug === "braeside-icon" ? "project-detail--braeside-icon" : ""} ${project.slug === "oberon" ? "project-detail--oberon" : ""}`}
    >
      {project.slug !== "oberon" && (
        <h1 className="project-detail__title max-md:break-words">{project.title}</h1>
      )}
      {project.slug === "oberon" && (
        <TypewriterBottom
          text={
            Array.isArray(project.description)
              ? project.description.join("/")
              : project.description
          }
        />
      )}
      {project.slug !== "oberon" && (
        <>
          {Array.isArray(project.description) ? (
            project.description.map((paragraph, i) => (
              <p key={i} className="project-detail__description">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="project-detail__description">{project.description}</p>
          )}
        </>
      )}

      {project.metadata &&
        project.slug !== "oberon" &&
        Object.keys(project.metadata).length > 0 && (
        <dl className="project-detail__metadata">
          {project.metadata.year && project.slug !== "oberon" && (
            <>
              <dt>Year</dt>
              <dd>{project.metadata.year}</dd>
            </>
          )}
          {project.metadata.location && (
            <>
              <dt>Location</dt>
              <dd>{project.metadata.location}</dd>
            </>
          )}
          {project.metadata.role && (
            <>
              <dt>Role</dt>
              <dd>{project.metadata.role}</dd>
            </>
          )}
          {project.metadata.tools && (
            <>
              <dt>Tools</dt>
              <dd>{project.metadata.tools}</dd>
            </>
          )}
          {project.metadata.collaborators && (
            <>
              <dt>Collaborators</dt>
              <dd>{project.metadata.collaborators}</dd>
            </>
          )}
        </dl>
      )}

      {youtubeEmbedUrl && project.slug !== "oberon" && (
        <div className="project-detail__video">
          <div className="project-detail__video-frame">
            <iframe
              src={youtubeEmbedUrl}
              title={`${project.title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {project.slug !== "oberon" && project.imageGroups?.length ? (
        <div className="project-detail__image-groups">
          {project.imageGroups.map((group, groupIndex) => (
            <section key={groupIndex} className="project-detail__image-group">
              <div className="project-detail__images project-detail__images--grid-2x2">
                {group.images.map((img, imageIndex) => (
                  <ProjectImageFigure
                    key={imageIndex}
                    img={img}
                    alt={`${project.title} image ${groupIndex * 4 + imageIndex + 1}`}
                  />
                ))}
              </div>
              <h2 className="project-detail__image-group-title">{group.title}</h2>
            </section>
          ))}
        </div>
      ) : (
        project.slug !== "oberon" && (
          <div className="project-detail__images">
            {project.images.map((img, i) => (
              <ProjectImageFigure
                key={i}
                img={img}
                alt={`${project.title} image ${i + 1}`}
              />
            ))}
          </div>
        )
      )}

      {project.slug !== "oberon" && (
        <p className="project-detail__back">
          <Link href={backHref}>{backLabel}</Link>
        </p>
      )}
    </article>
  );
}
