import { useState, useEffect } from "react";
import { Menu, X, HeartHandshake, Phone, Shield } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Our Commitment", href: "#commitment" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <HeartHandshake className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight text-gray-900 block leading-none">
                MOTHER CARE
              </span>
              <span className="text-[10px] uppercase tracking-wider text-teal-600 font-semibold block mt-1">
                Women & Child Hospital
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 hover:bg-teal-100 px-4 py-2 rounded-full transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              Emergency Care
            </a>
            <a
              href="#commitment"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-full transition-all shadow-xs"
            >
              <Shield className="w-3.5 h-3.5" />
              SQA Trust NGO
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-50 focus:outline-none transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-b border-gray-100 shadow-lg absolute top-full left-0 right-0 py-4 px-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-teal-600 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-gray-100 pt-4 flex flex-col gap-3 mt-2">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 hover:bg-teal-100 py-2.5 rounded-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                Emergency Contact
              </a>
              <a
                href="#commitment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-white bg-rose-500 hover:bg-rose-600 py-2.5 rounded-lg transition-all"
              >
                <Shield className="w-4 h-4" />
                SQA Trust Support
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
