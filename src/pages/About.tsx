import SectionReveal from "@/components/SectionReveal";
import { CheckCircle, Globe, Lightbulb, Award, TrendingUp } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import ourTeam from "@/assets/our-team.jpg";
import quality from "@/assets/quality.jpg";

const About = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20" style={{ background: "var(--gradient-primary)" }}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <p className="text-primary-foreground/60 uppercase tracking-wider text-sm mb-2">Who We Are</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">About SreemSol</h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            Pioneering digital transformation through innovative IT solutions and strategic consulting since 2022.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <img
                src={aboutTeam}
                alt="SreemSol team meeting"
                className="rounded-xl card-shadow w-full object-cover h-[450px]"
              />
              <div>
                <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">About Business</p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Empowering Businesses Through <span className="gradient-text">Innovation</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SreemSol LLC is a dynamic IT solutions and consulting firm headquartered in Georgia, specializing in ERP systems, cloud technologies, and professional training services. Founded in 2022, the company is driven by a mission to empower businesses through tailored digital transformation strategies and high-quality technical talent.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With deep expertise across SAP ecosystems, cloud platforms like AWS and Azure, and enterprise applications such as Workday and Salesforce, SreemSol bridges the gap between complex technology landscapes and real-world business outcomes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our consultants bring decades of combined experience across industries, enabling us to deliver solutions that are not only technically sound but also strategically aligned with our clients' growth objectives.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Globe, label: "Global Reach" },
                    { icon: Lightbulb, label: "Innovation First" },
                    { icon: Award, label: "Industry Leaders" },
                    { icon: TrendingUp, label: "Growth Driven" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Our Values</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                What <span className="gradient-text">Drives Us</span>
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Client-Centric Approach",
                desc: "We place our clients at the heart of everything we do, crafting solutions that address their unique challenges and aspirations.",
              },
              {
                title: "Technical Excellence",
                desc: "Our team stays at the forefront of technology, ensuring we deliver cutting-edge solutions built on best practices and industry standards.",
              },
              {
                title: "Integrity & Trust",
                desc: "We believe in transparent communication, ethical business practices, and building long-lasting partnerships founded on mutual respect.",
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 150}>
                <div className="bg-card p-8 rounded-xl card-shadow h-full">
                  <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Quality */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-24">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Our People</p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  A Team of <span className="gradient-text">Experts</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our team is made up of highly qualified professionals with a passion for what they do. We work together to provide innovative solutions to our clients and help them achieve their goals. Each member brings unique expertise spanning SAP, cloud architecture, project management, and enterprise integrations.
                </p>
              </div>
              <img src={ourTeam} alt="SreemSol team" className="rounded-xl card-shadow w-full object-cover h-[350px]" />
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <img src={quality} alt="Quality commitment" className="rounded-xl card-shadow w-full object-cover h-[350px] order-2 lg:order-1" />
              <div className="order-1 lg:order-2">
                <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Quality</p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Committed to <span className="gradient-text">Excellence</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At SreemSol, we are committed to delivering the highest quality of service to our clients. We have strict quality control procedures to ensure accuracy and reliability across every project. Our continuous improvement culture drives us to refine our processes and exceed expectations at every turn.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
