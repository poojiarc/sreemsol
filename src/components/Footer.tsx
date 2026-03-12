import { Link } from "react-router-dom";
import { Home, Info, Briefcase, Users, Mail, Heart, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About Us", icon: Info },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/careers", label: "Careers", icon: Users },
  { to: "/contact", label: "Contact Us", icon: Mail },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="SreemSol LLC Logo" className="h-10 w-10 object-contain" />
              <span className="font-heading font-bold text-xl text-primary-foreground">
                SreemSol <span className="font-normal text-sm opacity-80">LLC</span>
              </span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              A dynamic IT solutions and consulting firm specializing in ERP systems, cloud technologies, and professional training services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    <link.icon className="h-3.5 w-3.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-primary-foreground">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:hr@sreemsol.com"
                className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                hr@sreemsol.com
              </a>
              <a
                href="https://www.linkedin.com/in/sudha-k-3077b339a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Team Credit */}
        <div className="border-t border-secondary-foreground/10 pt-6">
          <div className="flex justify-center items-center gap-1 mb-3 text-sm text-secondary-foreground/60">
            Made with <Heart className="inline h-4 w-4 text-destructive mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
          <p className="text-center text-xs text-secondary-foreground/40 uppercase tracking-wider">
            Copyright © 2026 SreemSol — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
