import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Programming in Java Certification",
    issuer: "NPTEL",
    period: "January 2026 — April 2026",
    status: "Completed",
  },
  {
    title: "Data Science with Python Training Program",
    issuer: "Wipro TalentNext",
    period: "July 2026 — September 2026",
    status: "Completed",
  },
  {
    title: "Introduction to Generative AI Badge",
    issuer: "AWS Educate",
    period: "July 2026",
    status: "Completed",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic Education",
    period: "August 2026",
    status: "Completed",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Continuous Learning
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Certifications that{" "}
            <span className="font-serif italic font-normal text-white">
              sharpen the skillset.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Courses and certifications I've completed alongside my degree to
            stay current with tools and technologies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl animate-fade-in hover:border-primary/50 border border-transparent transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm text-primary font-medium mb-2">
                {cert.issuer}
              </p>
              <p className="text-xs text-muted-foreground">{cert.period}</p>
              <span className="inline-block mt-3 px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">
                {cert.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};