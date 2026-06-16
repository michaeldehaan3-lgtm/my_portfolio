import { photography } from "@/data/portfolio";
import ProjectGrid from "@/components/ProjectGrid";

export default function PhotographyPage() {
  return (
    <ProjectGrid projects={photography} basePath="photography" />
  );
}
