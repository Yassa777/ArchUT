import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Exterior renders, interior visualization, 3D animations, and virtual tours. Explore our full range of architectural visualization services.",
};

const services = [
  {
    num: "01",
    title: "Exterior Visualization",
    img: "/assets/IMG_6695.jpg",
    alt: "Exterior Visualization",
    description:
      "We create photorealistic exterior renders that showcase your architectural design in the most compelling light. From residential villas to commercial developments, our renders capture accurate materials, natural lighting, and lush landscaping.",
    features: [
      "Daytime & dusk/nighttime renders",
      "Aerial and street-level perspectives",
      "Landscaping & environment design",
      "Material & texture accuracy",
      "Multiple camera angles included",
    ],
  },
  {
    num: "02",
    title: "Interior Visualization",
    img: "/assets/IMG_6696.jpg",
    alt: "Interior Visualization",
    description:
      "Our interior renders bring spaces to life with warm, atmospheric lighting, rich material textures, and carefully placed furnishings. We capture the mood and character of every room, helping clients truly feel the space before it\u2019s built.",
    features: [
      "Living spaces, kitchens, bedrooms & more",
      "Natural & artificial lighting scenarios",
      "Furniture & decor staging",
      "Material palette visualization",
      "Photorealistic detail & texture work",
    ],
  },
  {
    num: "03",
    title: "Animation & Walkthroughs",
    img: "/assets/IMG_6697.jpg",
    alt: "Animation & Walkthrough",
    description:
      "Cinematic flythrough animations and guided virtual walkthroughs bring an entirely new dimension to architectural presentations. Perfect for marketing, client approvals, and competition submissions.",
    features: [
      "Cinematic camera movements",
      "Interior & exterior walkthroughs",
      "D5 real-time rendering pipeline",
      "Background music & sound design",
      "4K output resolution",
    ],
  },
  {
    num: "04",
    title: "360\u00b0 Virtual Tours",
    img: "/assets/IMG_6694.jpg",
    alt: "360 Virtual Tour",
    description:
      "Interactive panoramic experiences that let viewers explore spaces at their own pace. Ideal for real estate marketing, remote client presentations, and immersive project showcases.",
    features: [
      "Interactive 360\u00b0 panoramas",
      "Multiple viewpoints per room",
      "Web-based viewing (no app required)",
      "Hotspot navigation between spaces",
      "Compatible with VR headsets",
    ],
  },
];

const process = [
  {
    num: "01",
    title: "Brief & Concept",
    description:
      "Share your plans, references, and vision. We discuss scope, style, and timeline to align on expectations.",
  },
  {
    num: "02",
    title: "3D Modeling",
    description:
      "We build or refine the 3D model, set up cameras, and establish the scene composition in D5.",
  },
  {
    num: "03",
    title: "Materials & Lighting",
    description:
      "Applying accurate materials, textures, and lighting to achieve photorealistic quality. Draft preview shared for feedback.",
  },
  {
    num: "04",
    title: "Final Delivery",
    description:
      "After revisions, we render the final high-resolution output and deliver in your preferred format.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">What We Offer</p>
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            Comprehensive architectural visualization solutions powered by D5
            Render, tailored to bring your designs to life.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section>
        <div className="container">
          {services.map((service, i) => (
            <ScrollReveal key={service.num}>
              <div
                className={`service-detail ${i % 2 !== 0 ? "reversed" : ""}`}
              >
                <div className="service-detail-img">
                  <Image
                    src={service.img}
                    alt={service.alt}
                    width={640}
                    height={480}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="service-detail-content">
                  <p className="section-label">{service.num}</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-detail-list">
                    {service.features.map((feat) => (
                      <li key={feat}>{feat}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-text">
                    Request a Quote <span className="arrow">&rarr;</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="services-section">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: "center" }}>
              <p className="section-label">How It Works</p>
              <h2 className="section-title">Our Process</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                A streamlined workflow designed to deliver exceptional results on
                time, every time.
              </p>
            </div>
          </ScrollReveal>
          <div className="process-grid">
            {process.map((step, i) => (
              <ScrollReveal key={step.num} delay={i + 1}>
                <div className="process-step">
                  <div className="process-number">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: "center" }}>
              <p className="section-label">Investment</p>
              <h2 className="section-title">Packages</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                Flexible options to suit projects of every scale. Custom quotes
                available for larger scopes.
              </p>
            </div>
          </ScrollReveal>
          <div className="pricing-grid">
            <ScrollReveal delay={1}>
              <div className="pricing-card">
                <p className="pricing-tier">Starter</p>
                <p className="pricing-label">Single Render</p>
                <ul className="pricing-features">
                  <li>1 exterior or interior render</li>
                  <li>2 revision rounds</li>
                  <li>High-resolution output</li>
                  <li>3-5 business day delivery</li>
                  <li>Source file included</li>
                </ul>
                <Link
                  href="/contact"
                  className="btn btn-secondary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Get Started
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="pricing-card featured">
                <p className="pricing-tier">Professional</p>
                <p className="pricing-label">Multi-View Package</p>
                <ul className="pricing-features">
                  <li>3-5 renders (mix of int/ext)</li>
                  <li>3 revision rounds</li>
                  <li>Day & night variants</li>
                  <li>Aerial perspective included</li>
                  <li>Priority delivery</li>
                </ul>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Get Started
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="pricing-card">
                <p className="pricing-tier">Premium</p>
                <p className="pricing-label">Full Visualization</p>
                <ul className="pricing-features">
                  <li>Unlimited renders</li>
                  <li>Animation / walkthrough</li>
                  <li>360&deg; virtual tour</li>
                  <li>Unlimited revisions</li>
                  <li>Dedicated project manager</li>
                </ul>
                <Link
                  href="/contact"
                  className="btn btn-secondary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Get Started
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal>
            <p className="section-label">Ready to Start?</p>
            <h2 className="section-title">Let&apos;s Discuss Your Project</h2>
            <p className="section-subtitle">
              Every project is unique. Reach out and we&apos;ll craft a tailored
              visualization solution for your needs.
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
