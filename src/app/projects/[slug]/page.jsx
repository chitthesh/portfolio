import { projects } from "@/data/projects";
import ProjectDetailClient from "@/components/ProjectDetailClient";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <h2 style={{ padding: "100px" }}>Project not found</h2>;
  }

  return <ProjectDetailClient project={project} />;
}