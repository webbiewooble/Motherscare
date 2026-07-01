import { HeartHandshake, ShieldCheck, Mail, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-gray-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white shadow-sm">
                <HeartHandshake className="w-5.5 h-5.5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight text-white block leading-none">
                  MOTHER CARE
                </span>
                <span className="text-[10px] uppercase tracking-wider text-teal-400 font-semibold block mt-1">
                  Women & Child Hospital
                </span>
              </div>
            </div>
            <p className="text-sm font-light text-gray-400 max-w-sm leading-relaxed">
              An upcoming medical facility dedicated to providing quality maternal, newborn, and gynecological care. Operated in solidarity with SQA Social Welfare Trust.
            </p>
            <div className="text-xs uppercase tracking-widest text-teal-400 font-bold flex gap-2 items-center">
              <ShieldCheck className="w-4 h-4 text-rose-500" />
              <span>Care Beyond Cost</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wider">
              Hospital Anchor Links
            </h4>
            <nav className="flex flex-col gap-2.5 text-sm font-light">
              <a href="#home" className="hover:text-teal-400 transition-colors">Home Portal</a>
              <a href="#about" className="hover:text-teal-400 transition-colors">About SQA Trust</a>
              <a href="#services" className="hover:text-teal-400 transition-colors">Medical Services</a>
              <a href="#why-choose-us" className="hover:text-teal-400 transition-colors">Patient Dignity</a>
              <a href="#commitment" className="hover:text-teal-400 transition-colors">Social Commitments</a>
            </nav>
          </div>

          {/* Governing Entity Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wider">
              Governing Trust Office
            </h4>
            <p className="text-sm font-light text-gray-400 leading-relaxed">
              SQA Social Welfare Trust<br />
              Sahaswan, District Badaun, Uttar Pradesh, India
            </p>
            <p className="text-xs text-gray-500 font-light leading-relaxed">
              Established with the mandate of facilitating rural healthcare access, female education, and social protection programs for financially vulnerable households.
            </p>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-light">
          <div>
            <p>© {new Date().getFullYear()} Mother Care Women & Child Hospital. All rights reserved.</p>
            <p className="text-gray-600 mt-1">Managed under social trust mandate by SQA Social Welfare Trust.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 py-2 px-3.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-all cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
