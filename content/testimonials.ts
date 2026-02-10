export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company?: string;
  /** Optional: context (project type, timeframe, collaboration) */
  context?: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Client A",
    role: "Product Owner",
    company: "Company",
    quote:
      "Strong delivery, clear communication, and high-quality engineering practices. The project shipped on time."
  },
  {
    id: "t2",
    name: "Client B",
    role: "CTO",
    company: "Startup",
    quote:
      "Great autonomy and pragmatic decisions. Clean implementation and well-documented handover."
  },
  {
    id: "t3",
    name: "Colleague C",
    role: "Tech Lead",
    company: "Consulting",
    quote:
      "Reliable, consistent, and focused on maintainability. Excellent at reducing risk with good testing & CI."
  }
];
