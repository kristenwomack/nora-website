import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className="project-hero">
          <div className="project-hero-top">
            <h1>{project.title}</h1>
            <p className="project-description">{project.description}</p>
          </div>
          <div className="project-hero-image">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              priority
              sizes="100vw"
            />
          </div>
        </section>

        <dl className="project-facts">
          <div><dt>Category</dt><dd>{project.category}</dd></div>
          <div><dt>Location</dt><dd>{project.location}</dd></div>
          <div><dt>Year</dt><dd>{project.year}</dd></div>
        </dl>

        <section className="gallery" aria-label={`${project.title} gallery`}>
          {project.gallery.map((image) => (
            <div className="gallery-image" key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 60vw" />
            </div>
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
