import HeroSlider from "@/components/HeroSlider";
import ServiceCards from "@/components/ServiceCards";
import SectionReveal from "@/components/SectionReveal";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Target, Shield } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import ourTeam from "@/assets/our-team.jpg";
import quality from "@/assets/quality.jpg";

const stats = [
  { label: "Years of Excellence", value: "3+" },
  { label: "Successful Projects", value: "100+" },
  { label: "Satisfied Clients", value: "50+" },
  { label: "Expert Consultants", value: "200+" },
];

const Index = () => {
  return (
    <div>
      <HeroSlider />

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={aboutTeam}
                  alt="SreemSol team collaboration"
                  className="rounded-xl card-shadow w-full object-cover h-[400px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl hidden lg:block">
                  <p className="font-heading font-bold text-3xl">Since</p>
                  <p className="font-heading font-bold text-4xl">2022</p>
                </div>
              </div>
              <div>
                <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">About Us</p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Driving Digital Transformation with <span className="gradient-text">Purpose</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  SreemSol LLC is a dynamic IT solutions and consulting firm headquartered in Georgia, specializing in ERP systems, cloud technologies, and professional training services. Founded in 2022, we are driven by a mission to empower businesses through tailored digital transformation strategies and high-quality technical talent.
                </p>
                <div className="space-y-3 mb-8">
                  {["Tailored ERP & Cloud Solutions", "Expert IT Staffing & Consulting", "End-to-End Project Delivery"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <p className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</p>
                  <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">What We Do</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We deliver comprehensive IT solutions that drive efficiency, innovation, and sustainable growth for enterprises worldwide.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={200}>
            <ServiceCards />
          </SectionReveal>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Our Team</p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Passionate <span className="gradient-text">Professionals</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our team is made up of highly qualified professionals with a deep passion for technology and innovation. We work collaboratively to provide cutting-edge solutions that help our clients achieve their strategic objectives and stay ahead of the competition.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: Users, title: "Expert Team", desc: "Skilled consultants" },
                    { icon: Target, title: "Goal Driven", desc: "Results focused" },
                    { icon: Shield, title: "Trusted", desc: "Reliable partner" },
                  ].map((item) => (
                    <div key={item.title} className="p-4 bg-accent rounded-lg text-center">
                      <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-heading font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={ourTeam}
                alt="SreemSol professional team"
                className="rounded-xl card-shadow w-full object-cover h-[400px]"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <img
                src={quality}
                alt="Quality assurance at SreemSol"
                className="rounded-xl card-shadow w-full object-cover h-[400px]"
              />
              <div>
                <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Excellence</p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Our Commitment to <span className="gradient-text">Quality</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At SreemSol, we are committed to delivering the highest quality of service to our clients. Every project undergoes rigorous quality control procedures to ensure accuracy, reliability, and exceptional outcomes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our structured methodologies, continuous improvement practices, and dedicated quality assurance teams ensure that we consistently exceed client expectations and deliver solutions that stand the test of time.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Let's discuss how SreemSol can help you achieve your technology goals with tailored solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-card text-foreground font-semibold hover:opacity-90 transition-all shadow-lg"
            >
              Get In Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
