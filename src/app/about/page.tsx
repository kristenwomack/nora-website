import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { assetPath } from "@/data/projects";

export const metadata: Metadata = {
  title: "About",
  description: "About Vancouver-based fashion model Nora Womack.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-intro">
          <h1>About</h1>
          <div className="page-intro-copy">
            <p className="eyebrow">Nora Womack · Fashion model</p>
            <p>
              I bring intention, curiosity, and a grounded presence to fashion,
              beauty, and editorial work.
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
              Nora Womack is a fashion model based in Vancouver, British
              Columbia. Her work spans editorial, campaign, beauty, and runway,
              with a focus on expressive movement and quietly confident images.
            </p>
            <p>
              Nora brings an intuitive, collaborative approach to set. She is
              known for her versatility, professionalism, and ability to move
              between refined editorial work and relaxed lifestyle campaigns.
            </p>
          </div>
          <div>
            <h2>Profile</h2>
            <ul className="recognition-list">
              <li><span>Based</span><span>Vancouver, BC</span></li>
              <li><span>Focus</span><span>Editorial / beauty</span></li>
              <li><span>Markets</span><span>Canada / worldwide</span></li>
              <li><span>Representation</span><span>Independent</span></li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
