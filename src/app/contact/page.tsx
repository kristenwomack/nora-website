import type { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book Vancouver-based fashion model Nora Womack.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <h1 className="contact-title">
          Let&apos;s make something <em>lasting.</em>
        </h1>
        <div className="contact-grid">
          <p>
            Available for editorial, campaign, beauty, e-commerce, and runway
            bookings in Vancouver and worldwide.
          </p>
          <div>
            <h2>Bookings</h2>
            <a href="mailto:bookings@norawomack.studio">Book Nora ↗</a>
          </div>
          <div>
            <h2>Representation</h2>
            <a href="mailto:studio@norawomack.studio">Studio inquiries ↗</a>
          </div>
        </div>
      </main>
    </>
  );
}
