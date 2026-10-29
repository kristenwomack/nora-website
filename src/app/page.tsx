import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { projects } from "@/data/projects";

export default function Home() {
  const [featured] = projects;

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Featured project · {featured.year}</p>
            <h1>Quiet stories,<br />honestly observed.</h1>
            <p className="hero-intro">
              Nora Womack is a fashion model working across editorial,
              campaign, and runway.
            </p>
          </div>
          <Link
            className="hero-image image-link"
            href={`/work/${featured.slug}`}
            aria-label={`View ${featured.title}`}
          >
            <Image
              src={featured.cover.src}
              alt={featured.cover.alt}
              fill
              priority
              sizes="100vw"
            />
            <span className="image-link-label">View project</span>
          </Link>
          <div className="hero-meta">
            <p>{featured.title}</p>
            <p>{featured.location}, {featured.year}</p>
          </div>
        </section>

        <section className="statement">
          <p className="eyebrow">Approach</p>
          <p>
            Bringing a grounded presence, considered movement, and a distinct
            point of view to every frame. Available for fashion, beauty, and
            commercial bookings worldwide.
          </p>
          <Link className="text-link" href="/about">More about Nora <span>↗</span></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
