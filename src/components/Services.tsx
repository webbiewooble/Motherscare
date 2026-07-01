import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { serviceCategories } from "../data/hospitalData";
import { ServiceItem } from "../types";
import { 
  Heart, 
  Baby, 
  Sparkles, 
  Activity, 
  Search, 
  Check, 
  ArrowRight,
  Sparkle
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("womens-healthcare");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Map icon names to Lucide elements
  const getIcon = (name: string, className: string = "w-5 h-5") => {
    switch (name) {
      case "Heart":
        return <Heart className={className} />;
      case "Baby":
        return <Baby className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      case "Activity":
        return <Activity className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  // Filter categories and their items based on search query
  const filteredCategories = serviceCategories.map(category => {
    const matchedItems = category.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return {
      ...category,
      items: matchedItems
    };
  }).filter(category => category.items.length > 0);

  // Determine which categories are currently visible
  const availableCategoryIds = filteredCategories.map(c => c.id);
  const currentActiveTab = availableCategoryIds.includes(activeTab) 
    ? activeTab 
    : (availableCategoryIds[0] || "");

  const activeCategory = filteredCategories.find(c => c.id === currentActiveTab);

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkle className="w-3.5 h-3.5" />
            <span>Comprehensive Care</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Our Medical & Healthcare Services
          </h2>
          <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full mt-2" />
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-light">
            Providing compassionate, female-focused maternity, gynecological, and pediatric diagnostics right in your neighborhood.
          </p>
        </div>

        {/* Search & Tabs Layout Control */}
        <div className="max-w-4xl mx-auto mb-10 space-y-6">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a service... (e.g. Normal Delivery, Ultrasound, C-Section)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white shadow-3xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-sans text-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs bg-gray-100 hover:bg-gray-200 text-gray-500 px-2.5 py-1 rounded-md transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs (only shown if not filtering deeply, or show adaptive tabs) */}
          {searchQuery === "" && (
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-gray-100 rounded-2xl border border-gray-200/50">
              {serviceCategories.map((category) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 relative ${
                      isActive 
                        ? "text-white shadow-xs" 
                        : "text-gray-600 hover:text-teal-600 hover:bg-white/50"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-service-tab"
                        className="absolute inset-0 bg-teal-600 rounded-xl -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {getIcon(category.icon, "w-4 h-4")}
                    <span>{category.title}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Dynamic Service Cards Display */}
        <div className="max-w-6xl mx-auto">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16 bg-white border border-gray-100 rounded-3xl shadow-3xs">
              <p className="text-gray-400 font-medium">No services found matching "{searchQuery}".</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="text-teal-600 hover:text-teal-700 text-sm font-semibold mt-2 underline"
              >
                View all medical services
              </button>
            </div>
          ) : searchQuery !== "" ? (
            /* Search Results Grid View */
            <div className="space-y-12">
              {filteredCategories.map((category) => (
                <div key={category.id} className="space-y-4">
                  <div className="flex items-center gap-2.5 border-b border-gray-100 pb-2">
                    <span className="text-teal-600">{getIcon(category.icon, "w-5 h-5")}</span>
                    <h3 className="font-display font-bold text-gray-900 text-lg uppercase tracking-wider">
                      {category.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, idx) => (
                      <ServiceCard key={idx} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Single Category Tab View */
            <AnimatePresence mode="wait">
              {activeCategory && (
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
                >
                  {/* Category Feature Panel */}
                  <div className="lg:col-span-4 bg-teal-950 text-white rounded-3xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
                    {/* Background decor */}
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-600/20 rounded-full blur-2xl" />
                    
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                        {getIcon(activeCategory.icon, "w-6 h-6")}
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-teal-400">Department</span>
                        <h3 className="font-display text-2xl font-bold leading-tight">
                          {activeCategory.title}
                        </h3>
                      </div>
                      <p className="text-teal-100/80 text-sm font-light leading-relaxed">
                        {activeCategory.description}
                      </p>
                    </div>

                    <div className="pt-10 space-y-4 border-t border-teal-800">
                      <div className="flex gap-3 items-center">
                        <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center text-2xs font-bold">✓</div>
                        <span className="text-xs text-teal-100">Female Team Support</span>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center text-2xs font-bold">✓</div>
                        <span className="text-xs text-teal-100">Patient Dignity & Privacy</span>
                      </div>
                    </div>
                  </div>

                  {/* Category Items List Grid */}
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {activeCategory.items.map((item, idx) => (
                      <ServiceCard key={idx} item={item} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="max-w-4xl mx-auto mt-16 p-6 sm:p-8 rounded-3xl bg-teal-50 border border-teal-100/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-display font-bold text-gray-900 text-base">Looking for specialized consultancy?</h4>
            <p className="text-xs sm:text-sm text-gray-500">Our compassionate female doctors are available to assist you in complete privacy.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-teal-600 hover:bg-teal-700 px-5 py-3 rounded-xl transition-all shrink-0 shadow-xs"
          >
            Enquire Now
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

// Inner Service Card component
function ServiceCard({ item }: { item: ServiceItem; key?: any }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="p-5 sm:p-6 bg-white border border-gray-100 rounded-2xl shadow-3xs flex flex-col justify-between hover:shadow-xs group"
    >
      <div className="space-y-2.5">
        <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xs group-hover:bg-teal-600 group-hover:text-white transition-all">
          <Check className="w-4 h-4" />
        </div>
        <h4 className="font-display font-semibold text-gray-900 text-sm sm:text-base tracking-tight leading-tight group-hover:text-teal-700 transition-colors">
          {item.name}
        </h4>
        {item.description && (
          <p className="text-xs text-gray-500 leading-relaxed font-light">
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
