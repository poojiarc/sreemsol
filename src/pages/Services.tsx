import ServiceCards from "@/components/ServiceCards";
import SectionReveal from "@/components/SectionReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20" style={{ background: "var(--gradient-primary)" }}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <p className="text-primary-foreground/60 uppercase tracking-wider text-sm mb-2">What We Offer</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Comprehensive IT solutions designed to drive your business forward with innovation, efficiency, and scalable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionReveal>
            <ServiceCards />
          </SectionReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Why SreemSol</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Why Choose <span className="gradient-text">Us</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Industry Expertise", desc: "Deep knowledge across SAP, Salesforce, Workday, and cloud platforms." },
                { num: "02", title: "Agile Delivery", desc: "Flexible methodologies that adapt to your project needs and timelines." },
                { num: "03", title: "Quality Assurance", desc: "Rigorous testing and QA processes ensure flawless deliverables." },
                { num: "04", title: "24/7 Support", desc: "Dedicated post-project support to keep your systems running smoothly." },
              ].map((item, i) => (
                <SectionReveal key={item.num} delay={i * 100}>
                  <div className="bg-card p-6 rounded-xl card-shadow h-full">
                    <span className="font-heading text-4xl font-bold text-primary/20">{item.num}</span>
                    <h3 className="font-heading font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--gradient-primary)" }}>
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contact us to discuss your specific requirements and let our experts craft the perfect solution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-card text-foreground font-semibold hover:opacity-90 transition-all shadow-lg"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
