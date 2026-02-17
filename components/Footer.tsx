import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              Arch<span>UT</span>
            </Link>
            <p>
              Premium architectural visualization studio specializing in
              photorealistic renders powered by D5 Render.
            </p>
          </div>
          <div>
            <h5 className="footer-heading">Navigation</h5>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="footer-heading">Services</h5>
            <ul className="footer-links">
              <li><Link href="/services">Exterior Renders</Link></li>
              <li><Link href="/services">Interior Renders</Link></li>
              <li><Link href="/services">Animations</Link></li>
              <li><Link href="/services">Virtual Tours</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="footer-heading">Connect</h5>
            <ul className="footer-links">
              <li><Link href="/contact">Contact</Link></li>
              <li><a href="https://www.instagram.com/archutvisualizations?igsh=MWlzOTkyNmY5dmZzdw==" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ArchUT Visualizations. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
