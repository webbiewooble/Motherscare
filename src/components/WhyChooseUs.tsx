import { motion } from "motion/react";
import { choiceReasons } from "../data/hospitalData";
import { 
  ShieldAlert, 
  Users, 
  Heart, 
  Lock, 
  Coins, 
  CheckCircle,
  HelpCircle,
  Star
} from "lucide-react";

export default function WhyChooseUs() {
  const getIcon = (name: string, className: string = "w-6 h-6") => {
    switch (name) {
      case "ShieldAlert":
        return <ShieldAlert className={className} />;
      case "Users":
        return <Users className={className} />;
      case "Heart":
        return <Heart className={className} />;
      case "Lock":
        return <Lock className={className} />;
      case "Coins":
        return <Coins className={className} />;
      case "CheckCircle":
        return <CheckCircle className={className} />;
      default:
        return <HelpCircle className={className} />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Patient Comfort, Modesty & Care Above All
          </h2>
          <div className="w-12 h-1 bg-rose-500 mx-auto rounded-full mt-2" />
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-light">
            We understand the delicate requirements of maternal, gynecological, and pediatric treatments. Here is how we make our hospital a safe sanctuary for women.
          </p>
        </div>

        {/* Bento/Grid Layout of Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {choiceReasons.map((reason, index) => {
            const isTealBorder = index % 2 === 0;
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`p-8 bg-white border rounded-3xl relative overflow-hidden group flex flex-col justify-between transition-all ${
                  isTealBorder 
                    ? "border-gray-100 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-600/5" 
                    : "border-gray-100 hover:border-rose-500/30 hover:shadow-lg hover:shadow-rose-600/5"
                }`}
              >
                {/* Visual Accent glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl -z-10 transition-opacity duration-300 opacity-20 group-hover:opacity-100 ${
                  isTealBorder ? "bg-teal-400" : "bg-rose-400"
                }`} />

                <div className="space-y-6">
                  {/* Icon Block */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                    isTealBorder 
                      ? "bg-teal-50 text-teal-600 border border-teal-100" 
                      : "bg-rose-50 text-rose-500 border border-rose-100"
                  }`}>
                    {getIcon(reason.icon)}
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-gray-900 text-base sm:text-lg group-hover:text-teal-900 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                      {reason.description}
                    </p>
                  </div>
                </div>

                {/* Micro step indicators inside card */}
                <div className="pt-6 border-t border-gray-100 mt-6 flex justify-between items-center text-2xs uppercase tracking-widest text-gray-400 font-bold">
                  <span>Hospital Standard</span>
                  <span className={isTealBorder ? "text-teal-600" : "text-rose-500"}>
                    ✓ Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Region & Hygiene Highlight Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {/* Item 1: Safe & Clean Environment */}
          <div className="p-6 sm:p-8 rounded-3xl bg-teal-950 text-white flex gap-4 items-start relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-teal-800/20 rounded-full blur-xl" />
            <div className="p-2.5 rounded-xl bg-teal-800 text-teal-300 shrink-0">
              <CheckCircle className="w-5.5 h-5.5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm sm:text-base">Safe, Clean, and Hygienic Environment</h4>
              <p className="text-xs text-teal-100/80 leading-relaxed mt-2 font-light">
                Our surgical wards, neonatal units, and recovery chambers are disinfected around the clock to meet modern hospital protocols. We maintain an infection-free guarantee to protect delicate newborns and postpartum mothers.
              </p>
            </div>
          </div>

          {/* Item 2: Healthcare Close to Home */}
          <div className="p-6 sm:p-8 rounded-3xl bg-rose-950 text-white flex gap-4 items-start relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-rose-800/20 rounded-full blur-xl" />
            <div className="p-2.5 rounded-xl bg-rose-800 text-rose-300 shrink-0">
              <CheckCircle className="w-5.5 h-5.5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm sm:text-base">Healthcare Services Close to Home</h4>
              <p className="text-xs text-rose-100/80 leading-relaxed mt-2 font-light">
                No more stressful, expensive hours traveling to distant metropolitan areas for basic obstetric checkups or neonatal consults. Mother Care brings expert pediatric, normal delivery, and clinical ultrasound care directly to Sahaswan.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
