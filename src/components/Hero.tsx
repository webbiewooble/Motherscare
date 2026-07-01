import { motion } from "motion/react";
import { ArrowRight, Sparkles, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-teal-50/40 via-white to-white overflow-hidden">
      {/* Background soft blobs for custom organic feel */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-rose-50/50 blur-3xl -z-10 animate-pulse duration-8000" />
      <div className="absolute bottom-10 left-[-10%] w-[400px] h-[400px] rounded-full bg-teal-50/50 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Content Block */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mx-auto lg:mx-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Care Beyond Cost</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]"
              >
                Welcome to <span className="text-teal-600">Mother Care</span> Women & Child Hospital
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-display text-lg sm:text-xl font-medium text-rose-500/90 italic tracking-wide"
              >
                “Care Beyond cost.”
              </motion.p>
            </div>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Mother Care Women & Child Hospital is an upcoming healthcare institution dedicated to providing quality healthcare services for women, mothers, newborns, and children in Sahaswan and surrounding communities.
            </motion.p>

            {/* Highlighting Trust Bullet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="p-5 rounded-2xl bg-white border border-gray-100 shadow-xs max-w-2xl mx-auto lg:mx-0 text-left flex gap-4 items-start"
            >
              <div className="p-2.5 rounded-xl bg-rose-50 text-rose-500 shrink-0">
                <Heart className="w-5 h-5 fill-rose-500" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-sm text-gray-900">Our Shared Vision</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                  To create a trusted healthcare center where every mother receives safe and compassionate care, and every child gets the healthiest possible start in life.
                </p>
              </div>
            </motion.div>

            {/* Actions Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-white bg-teal-600 hover:bg-teal-700 px-8 py-4 rounded-xl transition-all shadow-md shadow-teal-600/10 hover:shadow-lg hover:shadow-teal-600/20 active:scale-[0.98]"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-700 bg-white hover:bg-gray-50 px-8 py-4 rounded-xl transition-all border border-gray-200 hover:border-gray-300 active:scale-[0.98]"
              >
                Learn About Us
              </a>
            </motion.div>

            {/* Quick Metrics of our conviction */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 text-left max-w-md mx-auto lg:mx-0"
            >
              <div>
                <span className="block text-2xl font-bold text-teal-600 font-display">100%</span>
                <span className="block text-2xs text-gray-400 uppercase font-semibold tracking-wider">Female Modesty Focus</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-rose-500 font-display">Sahaswan</span>
                <span className="block text-2xs text-gray-400 uppercase font-semibold tracking-wider">Our Core Region</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-gray-800 font-display">NGO</span>
                <span className="block text-2xs text-gray-400 uppercase font-semibold tracking-wider">SQA Trust Backed</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant Image Border Frame */}
            <div className="relative aspect-[4/3] lg:aspect-square w-full rounded-3xl overflow-hidden shadow-2xl border border-white bg-teal-50">
              <img
                src="/src/assets/images/mother_child_hero_1782887274623.jpg"
                alt="Mother holding a newborn child gently"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with subtle tagline or reassurance */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 text-white text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-teal-300 block mb-1">Upcoming Milestone</span>
                <p className="font-display font-medium text-sm sm:text-base leading-snug">
                  Strengthening healthcare accessible close to home for every mother and child.
                </p>
              </div>
            </div>

            {/* Decorative background framing shapes */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-teal-600/30 rounded-tl-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-rose-500/30 rounded-br-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
