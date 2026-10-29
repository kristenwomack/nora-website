import Link from "next/link";

const links = [
  { href: "/work/notes-from-the-coast", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">Nora Womack</Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
      </nav>
      <p className="header-location">Vancouver · BC</p>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <nav aria-label="Mobile navigation">
          {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </nav>
      </details>
    </header>
  );
}
