import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, ArrowUpRight, X, Phone, Heart } from "lucide-react";

export default function Footer() {
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  const servicesLinks = [
    { id: "implants", label: "Dental Implants" },
    { id: "rct", label: "Root Canal Treatment" },
    { id: "crowns", label: "Crowns & Bridges" },
    { id: "whitening", label: "Teeth Whitening" },
    { id: "cosmetic", label: "Cosmetic Smile Makeover" },
    { id: "emergency", label: "Emergency Care" }
  ];

  const quickLinks = [
    { target: "home", label: "Home" },
    { target: "about", label: "About Doctor" },
    { target: "treatments", label: "Treatments & Services" },
    { target: "why-choose-us", label: "Why Choose Us" },
    { target: "faq", label: "Common FAQs" },
    { target: "contact", label: "Location & Contacts" }
  ];

  const dentalSchedules = [
    { days: "Monday - Friday", times: "09:00 AM - 08:00 PM" },
    { days: "Saturday", times: "09:00 AM - 08:00 PM" },
    { days: "Sunday", times: "Emergencies on-call triage" }
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4 border-t border-slate-800 relative overflow-hidden">
      {/* Structural blur */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main upper grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => handleScrollTo("home")}
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-lg shadow-md">
                D
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg tracking-tight block">
                  Desai <span className="text-brand-primary">Dental</span>
                </span>
                <span className="text-[9px] font-medium tracking-wider text-slate-500 uppercase block -mt-1 font-mono">
                  Dr. Ankit J Desai (MDS)
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed font-sans max-w-sm">
              We provide state-of-the-art prosthetic, dental implant, and root canal procedures in Surat. 
              Our team values strict sterilization parameters, gentle patient management, and diagnostic transparency.
            </p>

            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>ADA & IDA Active Registry</span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest border-l-2 border-brand-primary pl-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((ql, k) => (
                <li key={k}>
                  <button
                    onClick={() => handleScrollTo(ql.target)}
                    className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {ql.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Shortlist */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest border-l-2 border-brand-primary pl-2">
              Our Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesLinks.map((sl, k) => (
                <li key={k}>
                  <button
                    onClick={() => handleScrollTo("treatments")}
                    className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {sl.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Schedule info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest border-l-2 border-brand-primary pl-2">
              Clinic Contact
            </h4>
            
            <div className="space-y-2 text-xs">
              <p className="leading-relaxed">
                Landmark Dotiwala Bakery, Nanpura, Surat, Gujarat 395001
              </p>
              <p className="font-bold text-slate-200 flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-primary" />
                <a href="tel:+917069537131" className="hover:underline">
                  +91 70695 37131
                </a>
              </p>
            </div>

            {/* Timings */}
            <div className="pt-2 border-t border-slate-800/85">
              <h5 className="text-[10px] font-bold font-mono tracking-wider uppercase text-slate-500 mb-1">
                Consultation Timings:
              </h5>
              <div className="space-y-1 text-slate-400 text-[11px]">
                {dentalSchedules.map((ds, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>{ds.days}</span>
                    <span className="font-semibold text-slate-300">{ds.times}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Lower row: Copyright and legal buttons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          
          <div>
            &copy; {currentYear} Desai Dental Clinic. All Rights Reserved. 
            <span className="block sm:inline sm:ml-1 text-slate-600 font-mono">
              Designed for Dr. Ankit J Desai (MDS) in Surat, Gujarat.
            </span>
          </div>

          <div className="flex space-x-4 font-semibold">
            {/* Direct legal mock toggles */}
            <button
              onClick={() => setLegalModal("privacy")}
              className="hover:text-slate-300 transition-colors cursor-pointer focus:outline-none"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal("terms")}
              className="hover:text-slate-300 transition-colors cursor-pointer focus:outline-none"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Legal terms overlays */}
      <AnimatePresence>
        {legalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 text-slate-800">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalModal(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
            />
            {/* Content drawer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-white rounded-2xl p-6.5 max-w-lg w-full shadow-2xl relative z-10"
            >
              <button
                onClick={() => setLegalModal(null)}
                className="absolute top-4.5 right-4.5 p-1.5 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              <h3 className="font-display font-extrabold text-base uppercase tracking-tight text-slate-900 mb-2">
                {legalModal === "privacy" ? "Privacy Policy Statement" : "Standard Terms & Guidelines"}
              </h3>
              
              <div className="h-0.5 w-12 bg-brand-primary rounded mb-4"></div>

              <div className="text-xs text-slate-500 leading-relaxed space-y-3 font-sans overflow-y-auto max-h-[250px] pr-1">
                {legalModal === "privacy" ? (
                  <>
                    <p>
                      Welcome to the Desai Dental Clinic, hosted relative to Nanpura Surat. 
                      We respect your biological and digit privacy. Any credentials logged via our 
                      interactive slot booking request form (Full Names, Telephone parameters, and diagnostics emails) 
                      are stored strictly inside client storage to draft your schedule.
                    </p>
                    <p>
                      We do not transmit your biological files, names, or addresses to external data vendors or tracking metrics. 
                      Your telephone credentials are only pulled by our clinic receptionist to complete your verification callback.
                    </p>
                    <p>
                      If you would like to purge your booked historical details, simply clear your browser's local cache. 
                      For questions, contact our supervisor team.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      The website is prepared for patient education and instant appointment inquiries at Desai Dental Clinic (represented by Dr. Ankit J Desai MDS).
                    </p>
                    <p>
                      Drafted reservation slots are NOT guaranteed until verified via phone by our receptionist. 
                      Dr. Desai's schedules are subject to change due to acute emergency operations.
                    </p>
                    <p>
                      The instructional health tips, lists, and advice available on this platform are drafted for high level general guidance 
                      and do not replace physical face-to-face diagnosis by active clinic surgeons. 
                      Always secure physical dental examination checkups for actual symptoms.
                    </p>
                  </>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setLegalModal(null)}
                  className="cursor-pointer px-4.5 py-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs font-bold rounded-lg"
                >
                  Confirm & Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
