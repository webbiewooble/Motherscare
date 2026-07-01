import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { donationOptions } from "../data/hospitalData";
import { 
  Heart, 
  ShieldCheck, 
  Building2, 
  Sparkles,
  Coins,
  Activity,
  Shield,
  Baby,
  ArrowRight,
  HandHeart,
  Info
} from "lucide-react";

export default function TrustInfo() {
  const [selectedTier, setSelectedTier] = useState<number>(3500);

  const activeDonationOption = donationOptions.find(opt => opt.amount === selectedTier) || donationOptions[2];

  const getTierIcon = (name: string, className: string = "w-5 h-5") => {
    switch (name) {
      case "Activity":
        return <Activity className={className} />;
      case "Shield":
        return <Shield className={className} />;
      case "Baby":
        return <Baby className={className} />;
      case "Heart":
        return <Heart className={className} />;
      default:
        return <HandHeart className={className} />;
    }
  };

  return (
    <section id="commitment" className="py-20 md:py-28 bg-gradient-to-b from-teal-50/10 via-rose-50/10 to-teal-50/10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Managed By SQA Trust</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Our Commitment & Social Governance
          </h2>
          <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full mt-2" />
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-light">
            Working hand-in-hand with SQA Social Welfare Trust to bring compassionate, safe, and subsidized treatment to deserving families.
          </p>
        </div>

        {/* Info Grid - SQA Trust on Left, Our Commitment on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Managed By SQA Social Welfare Trust */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-3xs flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50/60 rounded-full blur-2xl -z-10 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="space-y-6">
              <span className="text-2xs uppercase font-bold tracking-widest text-teal-600">Governing Body</span>
              <h3 className="font-display text-2xl font-bold text-gray-900 leading-tight">
                SQA Social Welfare Trust
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-sm sm:text-base">
                SQA Social Welfare Trust is deeply committed to supporting regional healthcare, education, social welfare, and comprehensive community development initiatives.
              </p>
              <p className="text-gray-600 leading-relaxed font-light text-sm sm:text-base">
                The Trust tirelessly works towards improving the lives of women, children, and underprivileged families through meaningful social impact programs and grass-root community health networks.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-100 mt-8 space-y-4">
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-xs font-bold shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">Subsidized and charitable health waivers</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-xs font-bold shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">Free diagnostic checkups in neighboring villages</span>
              </div>
            </div>
          </div>

          {/* Our Core Commitment */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-3xs flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50/60 rounded-full blur-2xl -z-10 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="space-y-6">
              <span className="text-2xs uppercase font-bold tracking-widest text-rose-500">Care Guarantee</span>
              <h3 className="font-display text-2xl font-bold text-gray-900 leading-tight">
                Our Absolute Commitment
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-sm sm:text-base">
                At Mother Care Women & Child Hospital, we are committed to providing a safe, respectful, and comfortable healthcare environment for women and children.
              </p>
              <p className="text-gray-600 leading-relaxed font-light text-sm sm:text-base">
                Special attention will be given to maintaining privacy and dignity for women patients. Wherever possible, female healthcare professionals and support staff will be available to assist women during consultations, examinations, and treatment.
              </p>
            </div>

            <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100/50 flex gap-3 items-start mt-8">
              <ShieldCheck className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <p className="text-2xs sm:text-xs text-rose-700 leading-normal font-medium">
                Support for financially vulnerable families may be facilitated through charitable initiatives undertaken by SQA Social Welfare Trust, subject to applicable policies and available resources.
              </p>
            </div>
          </div>

        </div>

        {/* Big Reassurance Quotes */}
        <div className="text-center space-y-3 mb-20 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xl sm:text-2xl font-bold text-teal-600"
          >
            “Every Mother Deserves Safe Care.”
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xl sm:text-2xl font-bold text-rose-500"
          >
            “Every Child Deserves a Healthy Start.”
          </motion.p>
        </div>

        {/* Interactive Donation Tier / Subsidy Calculator */}
        <div className="bg-white border border-gray-150 rounded-3xl shadow-md p-6 sm:p-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Simulator Left Column */}
            <div className="md:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1 text-teal-600 text-[10px] font-bold uppercase tracking-wider">
                  <Coins className="w-3.5 h-3.5" />
                  <span>Interactive Simulator</span>
                </div>
                <h4 className="font-display font-bold text-gray-900 text-lg leading-tight">
                  Subsidy & Impact Transparency
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  See how SQA Social Welfare Trust deploys donations and trust funds directly into clinical care programs. Click on any amount to visualize the concrete health outcome:
                </p>
              </div>

              {/* Tier selectors */}
              <div className="grid grid-cols-2 gap-3">
                {donationOptions.map((opt) => {
                  const isSelected = selectedTier === opt.amount;
                  return (
                    <button
                      key={opt.amount}
                      onClick={() => setSelectedTier(opt.amount)}
                      className={`py-3 px-4 rounded-xl border text-center transition-all duration-300 ${
                        isSelected 
                          ? "bg-teal-600 border-teal-600 text-white shadow-xs scale-[1.02] font-semibold" 
                          : "bg-gray-50 border-gray-150 text-gray-700 hover:bg-gray-100 hover:border-gray-300"
                      }`}
                    >
                      <span className="block text-2xs uppercase tracking-widest opacity-80 mb-0.5">Sponsor</span>
                      <span className="text-sm font-mono">₹{opt.amount}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Simulator Right Column (Displays active details) */}
            <div className="md:col-span-7 bg-teal-950/2 bg-gray-50/80 border border-gray-100 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between h-full min-h-[220px]">
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200/50">
                  <span className="text-xs uppercase tracking-wider font-bold text-gray-500">Selected Impact Program</span>
                  <div className="p-2 rounded-xl bg-teal-50 text-teal-600">
                    {getTierIcon(activeDonationOption.icon, "w-5 h-5")}
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="font-display font-bold text-sm sm:text-base text-gray-900 leading-tight">
                    {activeDonationOption.label}
                  </h5>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={selectedTier}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light"
                    >
                      {activeDonationOption.impact}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Transparency reassurance info */}
              <div className="mt-6 pt-4 border-t border-gray-200/50 flex gap-2.5 items-start">
                <Info className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <p className="text-[10px] sm:text-xs text-gray-400 font-light leading-normal">
                  All subsidies and care waivers are vetted under strict social audit policies to ensure 100% of SQA Social Welfare Trust support reaches verified BPL / low-income households.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
