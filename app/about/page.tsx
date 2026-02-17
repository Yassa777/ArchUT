import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ArchUT Visualizations - a dedicated architectural visualization studio bringing designs to life with D5 Render.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Who We Are</p>
          <h1 className="section-title">About Us</h1>
          <p className="section-subtitle">
            A passion for architecture. A mastery of visualization. A commitment
            to bringing visions to life.
          </p>
        </div>
      </section>

      {/* About Story */}
      <section>
        <div className="container">
          <div className="about-grid">
            <ScrollReveal>
              <div className="about-image">
                <Image
                  src="/assets/IMG_6696.jpg"
                  alt="ArchUT Visualizations Studio"
                  width={600}
                  height={800}
                  style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover" }}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="about-content">
                <p className="section-label">Our Story</p>
                <h2 className="section-title">
                  Where Architecture Meets Artistry
                </h2>
                <p className="about-text">
                  ArchUT Visualizations was founded with a clear mission: to help
                  architects, developers, and designers communicate their vision
                  with unmatched clarity and impact.
                </p>
                <p className="about-text">
                  We specialize in creating photorealistic architectural renders
                  using D5 Render, combining technical precision with artistic
                  sensibility. Every project we take on is treated as a unique
                  creative challenge, where light, materials, and composition come
                  together to tell a compelling story.
                </p>
                <p className="about-text">
                  From single residential renders to full-scale development
                  presentations, we bring the same level of dedication and quality
                  to every frame.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="services-section">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: "center" }}>
              <p className="section-label">What Drives Us</p>
              <h2 className="section-title">Our Values</h2>
            </div>
          </ScrollReveal>
          <div className="services-grid">
            <ScrollReveal delay={1}>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <h4>Precision</h4>
                <p>
                  Every pixel matters. We obsess over accurate materials,
                  lighting, and proportions to deliver renders that are
                  indistinguishable from photographs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h4>Collaboration</h4>
                <p>
                  Your vision is our starting point. We work closely with every
                  client, ensuring feedback is integrated and expectations are
                  exceeded.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="service-card">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24">
                    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <h4>Efficiency</h4>
                <p>
                  Leveraging D5&apos;s real-time rendering capabilities, we deliver
                  high-quality results with fast turnaround times without
                  compromising quality.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why D5 */}
      <section>
        <div className="container">
          <div className="about-grid">
            <ScrollReveal>
              <div className="about-content">
                <p className="section-label">Our Technology</p>
                <h2 className="section-title">Why D5 Render?</h2>
                <p className="about-text">
                  D5 Render is our tool of choice for a reason. Its real-time ray
                  tracing engine produces stunning photorealistic results while
                  enabling a faster, more iterative workflow.
                </p>
                <p className="about-text">
                  This means quicker previews for clients, faster revisions, and
                  final output quality that rivals traditional offline renderers
                  &mdash; all at a fraction of the time.
                </p>
                <div className="about-features">
                  <div className="about-feature">Real-time ray tracing</div>
                  <div className="about-feature">GPU-accelerated rendering</div>
                  <div className="about-feature">
                    Photorealistic global illumination
                  </div>
                  <div className="about-feature">Extensive material library</div>
                  <div className="about-feature">Fast iteration & previews</div>
                  <div className="about-feature">4K+ output resolution</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="about-image">
                <Image
                  src="/assets/IMG_6697.jpg"
                  alt="D5 Render Technology"
                  width={600}
                  height={800}
                  style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Satisfied Clients" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Client Support" },
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
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Work With Us</p>
            <h2 className="section-title">
              Let&apos;s Build Something Beautiful
            </h2>
            <p className="section-subtitle">
              Whether you&apos;re an architect, developer, or designer, we&apos;re
              ready to bring your next project to life.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
