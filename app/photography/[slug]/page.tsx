import { notFound } from "next/navigation";
import { photography } from "@/data/portfolio";
import ProjectDetail from "@/components/ProjectDetail";

export function generateStaticParams() {
  return photography.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PhotographyProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = photography.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} basePath="photography" />;
}
