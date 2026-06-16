import { notFound } from "next/navigation";
import { architecture } from "@/data/portfolio";
import ProjectDetail from "@/components/ProjectDetail";

export function generateStaticParams() {
  return architecture.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArchitectureProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = architecture.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} basePath="architecture" />;
}
