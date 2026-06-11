import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      category: "Services Offered",
      question: "What dental treatments do you offer?",
      answer: "Desai Dental Clinic is a complete multi-speciality setup. We offer dental implants, painless root canal treatments, porcelain crown bridges, professional ultrasonic scaling/cleaning, wisdom tooth surgical extractions, office zoom teeth whitening, composite fills, pediatric children dentistry, dentures (including BPS and implant-reinforced), and Emergency Pain Triage."
    },
    {
      id: "faq-2",
      category: "Reservations",
      question: "How do I book an appointment?",
      answer: "You can book an appointment easily through multiple channels. Use our interactive digital booking form below on this website, call Dr. Desai's clinic reception directly at +91 70695 37131, or tap the floating WhatsApp button to message us directly. Our scheduling coordinators will verify a slot matching your target convenience."
    },
    {
      id: "faq-3",
      category: "Specialties",
      question: "What is a root canal treatment?",
      answer: "A Root Canal Treatment (RCT) is a therapy designed to rescue a tooth whose inner nerve (pulp) has become inflamed or severely decayed due to deep cavities. Instead of extracting the tooth, the pulp is cleared out, the tiny canals are sterilized with computerized equipment, and then sealed with gutta-percha. Dr. Desai specializes in doing this pain-free, usually in single-sitting appointments."
    },
    {
      id: "faq-4",
      category: "Restorative",
      question: "Do you offer dental implants?",
      answer: "Yes, absolutely! Dental implants are our signature restorative treatment. These are grade-4 titanium screws placed securely into empty sockets which replicate tooth roots. These fuse with your jawbone over a few months, and then we anchor a handcrafted ceramic crown. It looks, acts, and feels exactly like your companion natural teeth with lifetime strength."
    },
    {
      id: "faq-5",
      category: "Preventative",
      question: "How often should I visit a dentist?",
      answer: "For healthy adults and children with no chronic tooth pains, we recommend scheduling an oral exam and basic ultrasonic cleanup scaling every six months. This allows Dr. Desai to arrest enamel decay before it breaches the nerve, keeping your long-term medical dental budgets exceptionally low and dental hygiene high."
    },
    {
      id: "faq-6",
      category: "Pediatric Care",
      question: "Do you treat children?",
      answer: "Yes, Desai Dental Clinic is fully pediatric-friendly. Dr. Ankit J Desai uses special cooperative, fun educational communication protocols designed to alleviate children's fears. We provide cavity-preventative dental sealants, fluoride varnishes, and general counseling in a friendly, gentle clinical space."
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative accent blurs */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-extrabold text-brand-primary uppercase tracking-widest font-mono">Any Doubts?</div>
          <h2 className="font-display font-extrabold text-3xl text-slate-900 mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            Have queries about dental implants, RCT, booking, or clinic protocols? 
            Here are honest transparent insights directly from Dr. Ankit J Desai.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded mx-auto mt-4"></div>
        </div>

        {/* FAQ Accordion container */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "bg-slate-50/50 border-sky-100 shadow-md shadow-sky-500/5" 
                    : "bg-white hover:bg-slate-50/20 hover:border-slate-200"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? "text-brand-primary" : "text-slate-400"}`} />
                    <span className="font-display font-bold text-slate-900 text-sm md:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-slate-100/60 transition-transform duration-350 ${isOpen ? "rotate-180 bg-brand-primary/10 text-brand-primary" : "text-slate-400"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100/50">
                        <div className="mb-2 uppercase text-[9px] font-mono tracking-widest text-brand-accent font-bold">
                          Category: {faq.category}
                        </div>
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom micro notice */}
        <div className="text-center mt-12">
          <p className="text-xs text-slate-400">
            Have another question not answered above? We are here. Please contact us via phone at{" "}
            <a href="tel:+917069537131" className="text-brand-primary font-bold hover:underline">
              +91 70695 37131
            </a>{" "}
            or write to our clinic coordinators.
          </p>
        </div>

      </div>
    </section>
  );
}
