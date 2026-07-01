import { motion } from "motion/react";
import { Eye, Target, CheckCircle2, Heart, Award, ShieldAlert } from "lucide-react";

export default function AboutUs() {
  const missions = [
    { text: "Safe motherhood for every woman", desc: "Advanced pregnancy supervision, high-risk screening, and secure birthing environments." },
    { text: "Quality healthcare for every child", desc: "Pediatric screening, immunizations, developmental surveillance, and urgent support." },
    { text: "Affordable treatment for all families", desc: "Non-profit NGO structure to remove financial barriers from critical medical care." },
    { text: "Respect, dignity, and privacy for every patient", desc: "Dedicated spaces and protocols emphasizing comfort and absolute confidentiality." },
    { text: "Healthcare services closer to home", desc: "No more traveling hours to big cities for standard gynecological or newborn care." },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5" />
            <span>Who We Are</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            About Mother Care Women & Child Hospital
          </h2>
          <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full mt-2" />
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-light">
            An upcoming non-profit healthcare center dedicated to transforming the maternal, infant, and pediatric landscape of Sahaswan and surrounding areas.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main About Text & Vision */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-gray-900">
                Strengthening Regional Women's & Children's Care
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Mother Care Women & Child Hospital is being established with the objective of strengthening women's and children's healthcare services in the region. 
                Our region faces a crucial gap in prompt, specialized, and hygienic care for expecting mothers and infants.
              </p>
              <p className="text-gray-600 leading-relaxed font-light">
                The hospital will focus on maternity care, gynecology, newborn care, and pediatric healthcare in a safe, comfortable, and patient-centered environment. 
                Our commitment is to provide high-quality medical services at affordable costs so that families can access healthcare without unnecessary financial burden.
              </p>
            </div>

            {/* Vision Block */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-2xl bg-teal-50/50 border border-teal-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-100/30 rounded-full blur-2xl -z-10" />
              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-teal-600 text-white shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 uppercase tracking-wider text-xs text-teal-800">
                    OUR VISION
                  </h4>
                  <p className="text-gray-700 mt-2 font-medium leading-relaxed">
                    “To become a trusted center of excellence in women’s and child healthcare by providing quality treatment, compassionate care, and affordable medical services.”
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission Block */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-xs space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-rose-500 text-white shadow-xs">
                  <Target className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-900 uppercase tracking-wider text-xs">
                    OUR MISSION
                  </h4>
                  <span className="text-xs text-gray-400">Guiding our daily patient care operations</span>
                </div>
              </div>

              <div className="space-y-4">
                {missions.map((mission, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-3.5 items-start bg-white p-4 rounded-xl border border-gray-100/80 shadow-3xs hover:border-teal-500/20 transition-all group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <h5 className="font-semibold text-sm text-gray-800 tracking-tight leading-tight">
                        {mission.text}
                      </h5>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed font-light">
                        {mission.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
