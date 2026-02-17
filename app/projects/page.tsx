"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

const projects = [
  {
    src: "/assets/IMG_6695.jpg",
    alt: "Modern Residential Villa - Full View",
    type: "Exterior Visualization",
    title: "Modern Residential Villa",
    description:
      "Contemporary two-story residence featuring clean geometric lines, stone accent walls, and integrated carport design.",
    category: "exterior",
  },
  {
    src: "/assets/IMG_6696.jpg",
    alt: "Luxury Living Room",
    type: "Interior Visualization",
    title: "Luxury Living Room",
    description:
      "Warm golden-hour interior with marble feature wall, walnut media console, and curated decor accents.",
    category: "interior",
  },
  {
    src: "/assets/IMG_6694.jpg",
    alt: "Villa Facade Detail",
    type: "Exterior Detail",
    title: "Villa Facade Detail",
    description:
      "Close-up facade render highlighting stone textures, landscaping, and material transitions.",
    category: "exterior",
  },
  {
    src: "/assets/IMG_6697.jpg",
    alt: "Green Roof Residence",
    type: "Exterior Visualization",
    title: "Green Roof Residence",
    description:
      "Eco-friendly design with rooftop gardens, soft green palette, and natural integration with landscaping.",
    category: "exterior",
  },
  {
    src: "/assets/IMG_6695.jpg",
    alt: "Villa Dusk View",
    type: "Exterior \u2014 Dusk",
    title: "Residential Villa \u2014 Dusk",
    description:
      "Evening atmosphere render showcasing artificial lighting and warm interior glow.",
    category: "exterior",
    style: { filter: "brightness(0.7) saturate(1.2) hue-rotate(10deg)" },
  },
  {
    src: "/assets/IMG_6696.jpg",
    alt: "Entertainment Lounge",
    type: "Interior Visualization",
    title: "Entertainment Lounge",
    description:
      "Media room visualization with emphasis on ambient lighting and material contrast.",
    category: "interior",
    style: { transform: "scaleX(-1)" },
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Exterior", value: "exterior" },
  { label: "Interior", value: "interior" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Our Portfolio</p>
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">
            Every render tells a story. Explore our collection of architectural
            visualizations crafted with precision and artistry.
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section style={{ paddingTop: "4rem" }}>
        <div className="container">
          <ScrollReveal>
            <div className="projects-filter">
              {filters.map((f) => (
                <button
                  key={f.value}
                  className={`filter-btn ${activeFilter === f.value ? "active" : ""}`}
                  onClick={() => setActiveFilter(f.value)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="projects-masonry">
            {filtered.map((project) => (
              <ScrollReveal key={project.title}>
                <div className="project-card">
                  <div className="project-card-img">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      width={800}
                      height={600}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        ...project.style,
                      }}
                    />
                    <div className="project-card-overlay" />
                  </div>
                  <div className="project-card-info">
                    <p className="project-card-type">{project.type}</p>
                    <h4 className="project-card-title">{project.title}</h4>
                    <p className="project-card-location">
                      {project.description}
                    </p>
                  </div>
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
            <p className="section-label">Like What You See?</p>
            <h2 className="section-title">
              Let&apos;s Create Something Together
            </h2>
            <p className="section-subtitle">
              Have a project in mind? We&apos;d love to bring your architectural
              vision to life with stunning visualizations.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
