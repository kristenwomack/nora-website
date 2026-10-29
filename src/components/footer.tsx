import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© Nora Womack</p>
      <Link className="footer-back" href="#top">Back to top ↑</Link>
    </footer>
  );
}
