"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    q: "What files do you need to get started?",
    a: "We can work with architectural plans (PDF, DWG), 3D models (SketchUp, Revit, 3ds Max, Rhino), or even hand sketches. The more detail you provide, the more accurate the final result.",
  },
  {
    q: "How long does a typical project take?",
    a: "A single render typically takes 3-5 business days. Multi-render packages and animations may take 1-2 weeks depending on complexity. Rush delivery is available.",
  },
  {
    q: "How many revisions are included?",
    a: "Our packages include 2-3 rounds of revisions. We share draft previews early in the process so we can align on direction before final rendering.",
  },
  {
    q: "What format are the final files delivered in?",
    a: "Final renders are delivered in high-resolution PNG or TIFF format. Animations are delivered in MP4 (H.264/H.265) at up to 4K resolution. We can accommodate custom format requests.",
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Let&apos;s Talk</p>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">
            Have a project in mind? We&apos;d love to hear about it. Reach out
            and let&apos;s start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <ScrollReveal>
              <div>
                <div className="contact-info-item">
                  <p className="contact-info-label">Email</p>
                  <p className="contact-info-value">
                    <a href="mailto:archut204@gmail.com">
                      archut204@gmail.com
                    </a>
                  </p>
                </div>
                <div className="contact-info-item">
                  <p className="contact-info-label">Phone</p>
                  <p className="contact-info-value">
                    <a href="tel:+94765682551">+94765682551</a>
                  </p>
                </div>
                <div className="contact-info-item">
                  <p className="contact-info-label">Location</p>
                  <p className="contact-info-value">
                    Available worldwide
                    <br />
                    Remote collaboration
                  </p>
                </div>
                <div className="contact-info-item">
                  <p className="contact-info-label">Working Hours</p>
                  <p className="contact-info-value">
                    Monday &ndash; Friday
                    <br />
                    9:00 AM &ndash; 5:00 PM
                  </p>
                </div>

                <div className="contact-socials">
                  <a href="#" className="contact-social-link" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  <a href="#" className="contact-social-link" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" className="contact-social-link" aria-label="Behance">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 12h5a3 3 0 1 0 0-6H3v12h5a3.5 3.5 0 1 0 0-6" />
                      <path d="M16 6h6M16 18h6a3.5 3.5 0 0 0 0-7h-6v10" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" name="service" required defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="exterior">Exterior Visualization</option>
                    <option value="interior">Interior Visualization</option>
                    <option value="animation">Animation & Walkthrough</option>
                    <option value="virtual-tour">360&deg; Virtual Tour</option>
                    <option value="package">Full Package</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project: type of building, number of renders needed, timeline, any reference images or specific requirements..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    alignSelf: "flex-start",
                    opacity: status === "sending" ? 0.7 : 1,
                    background: status === "sent" ? "#2d8a4e" : undefined,
                  }}
                  disabled={status === "sending"}
                >
                  {status === "idle" && "Send Message"}
                  {status === "sending" && "Sending..."}
                  {status === "sent" && "Message Sent!"}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="services-section">
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p className="section-label">Common Questions</p>
              <h2 className="section-title">FAQ</h2>
            </div>
          </ScrollReveal>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {faqs.map((faq) => (
              <ScrollReveal key={faq.q}>
                <div className="faq-item">
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
