import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Calendar } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Doctor" },
    { id: "treatments", label: "Treatments" },
    { id: "why-choose-us", label: "Why Choose Us" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Quick intersection observer mockup
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetPos = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-morphism shadow-md py-3 border-b border-sky-100/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
              D
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-950 block">
                Desai <span className="text-brand-primary">Dental</span>
              </span>
              <span className="text-[10px] font-medium tracking-wider text-slate-500 uppercase block -mt-1 font-mono">
                Dr. Ankit J Desai (MDS)
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-sans text-sm font-medium transition-colors py-2 cursor-pointer ${
                  activeSection === item.id
                    ? "text-brand-primary"
                    : "text-slate-600 hover:text-brand-primary"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Call to Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+917069537131"
              className="flex items-center space-x-2 text-slate-700 hover:text-brand-primary transition-colors text-sm font-medium font-mono"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              <span>+91 70695 37131</span>
            </a>
            <button
              onClick={() => scrollToSection("book-appointment")}
              className="relative cursor-pointer px-5 py-2.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-display font-semibold text-sm rounded-full shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href="tel:+917069537131"
              className="p-2 text-brand-primary hover:bg-sky-50 rounded-full transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-800 focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-brand-primary" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden glass-morphism border-b border-sky-100/40 divide-y divide-sky-100/20 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-sky-50 text-brand-primary"
                      : "text-slate-700 hover:bg-slate-50 hover:text-brand-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 pb-2 space-y-3 px-3">
                <a
                  href="tel:+917069537131"
                  className="flex items-center space-x-3 text-slate-700 font-mono text-sm"
                >
                  <Phone className="w-5 h-5 text-brand-primary" />
                  <span>+91 70695 37131</span>
                </a>
                <button
                  onClick={() => scrollToSection("book-appointment")}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-display font-bold rounded-lg shadow-md"
                >
                  {/* Calendar Icon added to show Premium Style */}
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
