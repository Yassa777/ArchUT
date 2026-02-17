import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/assets/IMG_6695.jpg"
            alt="Modern architectural visualization"
            fill
            priority
            style={{ objectFit: "cover", opacity: 0.3, filter: "brightness(0.5)" }}
          />
        </div>
        <div className="container">
          <div className="hero-content">
            <p className="section-label">Architectural Visualization Studio</p>
            <h1>
              We Bring Architecture <em>to Life</em>
            </h1>
            <p className="hero-description">
              Photorealistic 3D renderings powered by D5 that transform your
              architectural concepts into compelling visual narratives.
            </p>
            <div className="hero-actions">
              <Link href="/projects" className="btn btn-primary">
                View Our Work
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <ScrollReveal>
            <div className="featured-header">
              <div>
                <p className="section-label">Selected Work</p>
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                  A curated selection of our recent architectural visualizations.
                </p>
              </div>
              <Link href="/projects" className="btn-text">
                View All Projects <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>
          <div className="project-grid">
            {[
              {
                src: "/assets/IMG_6695.jpg",
                alt: "Modern Residential Villa",
                type: "Exterior",
                title: "Modern Residential Villa",
                location: "Contemporary Design",
              },
              {
                src: "/assets/IMG_6696.jpg",
                alt: "Warm Living Space Interior",
                type: "Interior",
                title: "Luxury Living Room",
                location: "Interior Visualization",
              },
              {
                src: "/assets/IMG_6694.jpg",
                alt: "Residential Facade Detail",
                type: "Exterior",
                title: "Villa Facade Detail",
                location: "Exterior Detail Render",
              },
              {
                src: "/assets/IMG_6697.jpg",
                alt: "Green Roof Residence",
                type: "Exterior",
                title: "Green Roof Residence",
                location: "Sustainable Design",
              },
            ].map((project, i) => (
              <ScrollReveal key={project.title} delay={i + 1}>
                <div className="project-card">
                  <div className="project-card-img">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      width={640}
                      height={480}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div className="project-card-overlay" />
                  </div>
                  <div className="project-card-info">
                    <p className="project-card-type">{project.type}</p>
                    <h4 className="project-card-title">{project.title}</h4>
                    <p className="project-card-location">{project.location}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="container">
          <ScrollReveal className="text-center">
            <div style={{ textAlign: "center" }}>
              <p className="section-label">What We Do</p>
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                From concept to photorealistic render, we provide end-to-end
                visualization solutions.
              </p>
            </div>
          </ScrollReveal>
          <div className="services-grid">
            <ScrollReveal delay={1}>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="3" x2="9" y2="21" />
                  </svg>
                </div>
                <h4>Exterior Renders</h4>
                <p>
                  Photorealistic exterior visualizations that showcase
                  architectural design in natural environments with accurate
                  lighting and materials.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h4>Interior Renders</h4>
                <p>
                  Immersive interior scenes with warm lighting, rich textures,
                  and carefully curated furnishings that bring spaces to life.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" />
                  </svg>
                </div>
                <h4>Animation & Walkthroughs</h4>
                <p>
                  Cinematic flythrough animations and virtual walkthroughs that
                  give clients an immersive preview of their future spaces.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Link href="/services" className="btn btn-secondary">
                Explore All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "30+", label: "Happy Clients" },
              { value: "D5", label: "Render Engine" },
              { value: "48h", label: "Fast Turnaround" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i + 1}>
                <div className="stat-item">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Start Your Project</p>
            <h2 className="section-title">Ready to Visualize Your Vision?</h2>
            <p className="section-subtitle">
              Let&apos;s transform your architectural plans into stunning
              photorealistic renders that captivate and convince.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get a Free Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
