import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { Mail, Linkedin, Send, Upload } from "lucide-react";
import { toast } from "sonner";

const careerRoles = [
  "Cloud Solutions",
  "SAP SuccessFactors Employee Central",
  "SAP SuccessFactors Employee Central Payroll",
  "SAP SuccessFactors Performance and Goals Management",
  "SAP SuccessFactors Learning Management",
  "SAP SuccessFactors Recruiting Management, Recruiting Marketing, and Onboarding",
  "SAP SuccessFactors Workforce Analytics and Planning",
  "SAP SuccessFactors Reporting and People Analytics",
  "SAP SuccessFactors Compensation Management",
  "SAP Cloud Platform Integration",
  "SAP S/4 HANA",
  "SAP Hybris",
  "SAP Ariba",
  "Salesforce",
  "Workday",
  "AWS",
  "Azure",
  "SAP Concur",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    career: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Build mailto link with form data
    const subject = encodeURIComponent(`New Contact: ${formData.name} - ${formData.career || "General Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCareer Interest: ${formData.career || "N/A"}\n\nMessage:\n${formData.message}\n\n${resume ? `Resume: ${resume.name} (please request attachment)` : "No resume attached"}`
    );

    window.location.href = `mailto:hr@sreemsol.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      toast.success("Email client opened! Please send the email to complete your submission.");
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20" style={{ background: "var(--gradient-primary)" }}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <p className="text-primary-foreground/60 uppercase tracking-wider text-sm mb-2">Get In Touch</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            We'd love to hear from you. Reach out and let's discuss how we can help your business grow.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <SectionReveal>
                <p className="text-primary font-medium mb-2 uppercase tracking-wider text-sm">Reach Us</p>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Contact Details</h2>

                <div className="space-y-6">
                  <a
                    href="mailto:hr@sreemsol.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground text-sm">hr@sreemsol.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sudha-k-3077b339a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <p className="text-muted-foreground text-sm">Connect with us</p>
                    </div>
                  </a>
                </div>
              </SectionReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <SectionReveal delay={200}>
                <div className="bg-card p-8 rounded-xl card-shadow">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Career Interest</label>
                      <select
                        name="career"
                        value={formData.career}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      >
                        <option value="">Select a career role</option>
                        {careerRoles.map((role) => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                        placeholder="Tell us about your needs..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Upload Resume</label>
                      <label className="flex items-center gap-3 px-4 py-3 rounded-lg border border-dashed border-input bg-background cursor-pointer hover:border-primary transition-colors">
                        <Upload className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {resume ? resume.name : "Click to upload your resume"}
                        </span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => setResume(e.target.files?.[0] || null)}
                        />
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all disabled:opacity-50"
                    >
                      <Send className="h-4 w-4" />
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
