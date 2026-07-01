import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  HeartHandshake, 
  Calendar,
  AlertCircle
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "patient-care",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "patient-care",
        message: ""
      });
    }, 1500);
  };

  const contactInfos = [
    {
      icon: <MapPin className="w-5.5 h-5.5 text-teal-600" />,
      title: "Hospital Address",
      value: "Sahaswan, District Badaun, Uttar Pradesh, India",
      desc: "Upcoming primary health compound, conveniently accessible for regional families.",
      isBadge: false
    },
    {
      icon: <Phone className="w-5.5 h-5.5 text-rose-500" />,
      title: "Phone Line",
      value: "To Be Updated",
      desc: "Emergency helpline and OPD reservation numbers will be listed immediately upon operational clearance.",
      isBadge: true
    },
    {
      icon: <Mail className="w-5.5 h-5.5 text-teal-600" />,
      title: "Email Support",
      value: "To Be Updated",
      desc: "Official digital helpdesk monitored directly by SQA Social Welfare Trust team.",
      isBadge: true
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Stay in Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Connect With Our Project Team
          </h2>
          <div className="w-12 h-1 bg-teal-600 mx-auto rounded-full mt-2" />
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-light">
            Have questions about our launch schedule, medical services, or want to support the SQA Trust welfare programs? Write to us today.
          </p>
        </div>

        {/* Contact layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-gray-900">
                Hospital Establishment Hub
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm font-light leading-relaxed">
                Mother Care Women & Child Hospital is an upcoming center of excellence. SQA Social Welfare Trust is facilitating the development of physical wards, operating theaters, and diagnostic equipment.
              </p>
            </div>

            {/* Support cards list */}
            <div className="space-y-6">
              {contactInfos.map((info, idx) => (
                <div key={idx} className="flex gap-4 items-start p-5 rounded-2xl border border-gray-100 hover:border-teal-500/15 transition-all bg-gray-50/50">
                  <div className="p-2.5 rounded-xl bg-white shadow-3xs shrink-0">
                    {info.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-sm text-gray-800 uppercase tracking-wider">
                      {info.title}
                    </h4>
                    {info.isBadge ? (
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100 font-mono">
                        {info.value}
                      </span>
                    ) : (
                      <p className="text-sm font-medium text-gray-900 leading-snug">
                        {info.value}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1 font-light leading-normal">
                      {info.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Milestone Info Alert */}
            <div className="p-4 bg-teal-50 border border-teal-100/50 rounded-2xl flex gap-3 items-start">
              <AlertCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-teal-800">Launch Updates Available</h5>
                <p className="text-2xs sm:text-xs text-teal-700 leading-relaxed font-light">
                  Once our clinical licensing clearances are finalized, toll-free lines and emergency contacts will go live. Sign up using the contact form to receive progress reports.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Enquiry Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-gray-50 border border-gray-150/80 shadow-3xs">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="enquiry-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="space-y-1">
                      <h3 className="font-display font-bold text-lg text-gray-900">Send an Online Enquiry</h3>
                      <p className="text-xs text-gray-400">Our SQA trust administrative team handles queries daily.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Enquiry Purpose
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                        >
                          <option value="patient-care">Clinical Services Enquiry</option>
                          <option value="trust-donation">SQA Trust Support / Donation</option>
                          <option value="career-volunteer">Job Openings / Volunteering</option>
                          <option value="other">General Feedback & Suggestion</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Message Content
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your query here. If you are inquiring on behalf of an expectant mother, please mention their basic trimester status or health conditions..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 transition-all shadow-md shadow-teal-600/5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing enquiry...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-enquiry"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 px-6 text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mx-auto border border-teal-100 shadow-xs animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2.5">
                      <h4 className="font-display font-bold text-xl text-gray-900">Enquiry Submitted Successfully!</h4>
                      <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to us. Your enquiry has been safely received by SQA Social Welfare Trust. A team representative will review your query and respond shortly.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-600 hover:text-teal-700 py-2 px-4 rounded-lg bg-teal-50 hover:bg-teal-100 transition-colors"
                    >
                      Submit another query
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Custom Visual Map Area (Elegant placeholder replacing Raw "Google Map Location: To Be Updated") */}
        <div className="mt-20 max-w-5xl mx-auto rounded-3xl border border-gray-150 overflow-hidden bg-gray-50 relative p-8 text-center sm:text-left shadow-2xs">
          {/* Subtle grid styling */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
          
          <div className="relative grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
            {/* Visual description */}
            <div className="sm:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-3xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3 h-3" />
                <span>Geographic Target</span>
              </div>
              <h4 className="font-display font-bold text-lg text-gray-900 leading-tight">
                Sahaswan, District Badaun
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Uttar Pradesh, India. Centrally situated to offer close-to-home diagnostic and maternal care to multiple rural sub-divisions who currently travel over 50 km for delivery emergencies.
              </p>
            </div>

            {/* Custom stylized vector map element */}
            <div className="sm:col-span-7 bg-white/80 backdrop-blur-xs rounded-2xl border border-gray-100 p-6 flex items-center justify-center min-h-[160px] relative">
              <div className="space-y-4 text-center">
                
                {/* Simulated radar coordinate tracker */}
                <div className="relative w-16 h-16 mx-auto">
                  <span className="absolute inset-0 rounded-full bg-teal-500/20 animate-ping" />
                  <span className="absolute inset-2 rounded-full bg-rose-500/30 animate-pulse" />
                  <div className="absolute inset-4 rounded-full bg-teal-600 flex items-center justify-center text-white shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                    Google Map Location
                  </span>
                  <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 border border-amber-100 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider mt-1.5">
                    To Be Updated
                  </span>
                </div>

                <p className="text-[10px] text-gray-400 font-light italic max-w-xs mx-auto leading-normal">
                  Our exact coordinates and interactive satellite pins will be loaded here as soon as our central hospital facility construction is finalized.
                </p>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
