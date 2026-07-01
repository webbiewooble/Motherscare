/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import TrustInfo from "./components/TrustInfo";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col justify-between selection:bg-teal-500 selection:text-white overflow-hidden">
      {/* Header Navigation Bar */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Entrance motion container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Welcome / Hero Portals */}
          <Hero />

          {/* About Us (Vision, Mission) Section */}
          <AboutUs />

          {/* Our Services Explorer Panel */}
          <Services />

          {/* Why Choose Us Grid */}
          <WhyChooseUs />

          {/* Trust Managed & Commitment section */}
          <TrustInfo />

          {/* Stay Connected (Contact details & Form) */}
          <ContactUs />
        </motion.div>
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}

