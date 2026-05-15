import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WorkCaseStudyBody } from "@/components/work/cases/workCaseStudyBody";
import { getProject, projects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} – Rachel Pham`,
    description: project.subtitle,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const hideFooterTopBorder =
    slug === "ideas-to-impact" ||
    slug === "fhir-north" ||
    slug === "research-infosource-rankings" ||
    slug === "learning-2gether" ||
    slug === "vot-coffee";

  return (
    <>
      <Header />
      <main className="pt-0" style={{ background: "var(--bg-page)" }}>
        <WorkCaseStudyBody slug={slug} project={project} />
      </main>
      <Footer hideTopBorder={hideFooterTopBorder} />
    </>
  );
}
