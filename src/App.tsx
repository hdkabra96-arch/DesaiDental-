/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SEOStructure from "./components/SEOStructure";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutDoctor from "./components/AboutDoctor";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ClinicFeatures from "./components/ClinicFeatures";
import TreatmentProcess from "./components/TreatmentProcess";
import Education from "./components/Education";
import FAQ from "./components/FAQ";
import BookingForm from "./components/BookingForm";
import Contact from "./components/Contact";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-text antialiased selection:bg-sky-100 selection:text-brand-secondary overflow-x-hidden">
      {/* 1. SEO Tag & Schema Metadata Injector */}
      <SEOStructure />

      {/* 2. Premium Sticky Header Navigation bar */}
      <Navigation />

      {/* 3. Luxury Full Screen Hero Section */}
      <main>
        <Hero />

        {/* 4. Credentials & Meet the Doctor (MDS) */}
        <AboutDoctor />

        {/* 5. 12 Specialty Services grid with custom expansion views */}
        <Services />

        {/* 6. Eight parameters on why to select Desai Dental Clinic */}
        <WhyChooseUs />

        {/* 7. Advanced clinical gear and parameters list */}
        <ClinicFeatures />

        {/* 8. Six steps timeline of patient onboarding processes */}
        <TreatmentProcess />

        {/* 9. Educational visual advisory tips panels */}
        <Education />

        {/* 10. Direct response FAQ accordion cards */}
        <FAQ />

        {/* 11. Custom Interactive scheduler and bookings history */}
        <BookingForm />

        {/* 12. Address card, contact times and embedded coordinates */}
        <Contact />
      </main>

      {/* 13. Persistent dialers and message widget buttons */}
      <FloatingActions />

      {/* 14. Detailed information footer and interactive agreements modal */}
      <Footer />
    </div>
  );
}

