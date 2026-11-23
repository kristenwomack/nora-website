import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { assetPath } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Nora Womack, an aspiring model in Vancouver, BC. Bilingual in English and Mandarin Chinese, with a love of filmmaking, sports, and adventure.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-intro">
          <h1>About</h1>
          <div className="page-intro-copy">
            <p className="eyebrow">Nora Womack · Aspiring model</p>
            <p>
              Curious by nature. Always up for an adventure.
              Usually laughing.
            </p>
          </div>
        </section>

        <div className="about-image">
          <Image
            src={assetPath("/images/nora/blue-about.webp")}
            alt="Nora Womack modeling a pale blue suit in Vancouver"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <section className="about-details">
          <h2>Biography</h2>
          <div>
            <p>
              Nora Womack is an aspiring model based in Vancouver, British
              Columbia. Bilingual in English and Mandarin Chinese, she is
              just starting out in modeling, with a love of storytelling
              and making things with friends.
            </p>
            <p>
              Her creative interests extend behind the camera, too. A short
              film she made with friends received an award at a Microfilm
              Festival ceremony hosted by the Chinese Flagship Program at
              the University of Minnesota.
            </p>
            <p>
              Away from the camera, Nora loves basketball, soccer, and dogs.
              Adventurous and curious, with a big laugh, she is excited to
              explore something new.
            </p>
          </div>
          <div>
            <h2>Profile</h2>
            <ul className="recognition-list">
              <li><span>Based</span><span>Vancouver, BC</span></li>
              <li><span>Languages</span><span>English / Mandarin Chinese</span></li>
              <li><span>Sports</span><span>Basketball / soccer</span></li>
              <li><span>Creative interest</span><span>Filmmaking</span></li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
