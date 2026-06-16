import { architecture } from "@/data/portfolio";
import ProjectGrid from "@/components/ProjectGrid";

export default function ArchitecturePage() {
  return (
    <ProjectGrid projects={architecture} basePath="architecture" />
  );
}
