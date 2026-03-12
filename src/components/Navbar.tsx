import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Briefcase, Users, Mail, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About Us", icon: Info },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/careers", label: "Careers", icon: Users },
  { to: "/contact", label: "Contact Us", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md nav-shadow"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="SreemSol LLC Logo" className="h-10 w-10 object-contain" />
          <span className={`font-heading font-bold text-xl transition-colors ${scrolled ? "text-secondary" : "text-primary-foreground"}`}>
            SreemSol <span className="font-normal text-sm">LLC</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : scrolled
                    ? "text-foreground hover:bg-accent hover:text-accent-foreground"
                    : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
