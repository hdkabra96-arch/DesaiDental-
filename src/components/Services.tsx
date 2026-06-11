import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, Shield, Heart, Zap, Gem, Baby, Activity, Trash2, Layers, Grid, Combine, Clock, ChevronRight, X, Smile
} from "lucide-react";

interface ServiceDisplay {
  id: string;
  title: string;
  description: string;
  icon: any;
  benefits: string[];
  fullDetails: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDisplay | null>(null);

  const services: ServiceDisplay[] = [
    {
      id: "implants",
      title: "Dental Implants",
      description: "Permanent replacement for missing teeth. Implants function, feel, and look exactly like natural tooth roots.",
      icon: Layers,
      benefits: ["Lifetime durability", "Preserves jawbone density", "No adjacent tooth damage"],
      fullDetails: "Dental implants are titanium posts surgically inserted into the jawbone, acting as artificial roots. Over time, they integrate with the bone (osseointegration) to support an ultra-natural porcelain crown. Under Dr. Desai's guidance, implants are placed virtual-guided for perfect, predictable outcomes."
    },
    {
      id: "rct",
      title: "Root Canal Treatment",
      description: "Rescue diseased or damaged teeth painlessly. Advanced rotary technologies make treatments fast and stress-free.",
      icon: Activity,
      benefits: ["Stops intense direct toothaches", "Preserves the natural tooth", "Saves chew functionality"],
      fullDetails: "When a deep cavity reaches the tooth nerve, simple fillings cannot halt the damage. Root Canal Treatment cleans out infected pulp nerve fibers, disinfects the inner canals, and seals them with biocompatible materials to prevent re-infection. Dr. Ankit J Desai uses modern apex locators and computerized rotary devices to complete root canals efficiently, usually in a single painless session."
    },
    {
      id: "crowns",
      title: "Crowns & Bridges",
      description: "Restore damaged or missing teeth structures. We use heavy dental zirconia to guarantee beautiful smiles.",
      icon: Shield,
      benefits: ["Strengthens fractured teeth", "Seamless natural look", "Restores balance in bite forces"],
      fullDetails: "Crowns are protective 'caps' fitted over weakened or root-canal treated teeth. Bridges bridge empty tooth corridors by utilizing neighbouring teeth as support anchors, restoring chewing comfort. We utilize premium glass-ceramics and metal-free CAD/CAM zirconia for highly structural durability."
    },
    {
      id: "cleaning",
      title: "Teeth Cleaning",
      description: "Ultrasonic scaling and plaque removal. Eliminate stubborn stains and bad breath for radiant oral wellness.",
      icon: Sparkles,
      benefits: ["Prevents progressive gum disease", "Stops chronic mouth odor", "Removes tea and smoke stains"],
      fullDetails: "Regular brushing can't clear plaque calculus that hardens into tartar below the gumline. Our dental cleanings utilize state-of-the-art gentle ultrasonic scalers to vibrate away debris without harming tooth enamel, finished with fluoridated polish to guard against decay."
    },
    {
      id: "extraction",
      title: "Tooth Extraction",
      description: "Painless, atraumatic dental extractions. Special focus on impacted wisdom teeth with high comfort care.",
      icon: Trash2,
      benefits: ["Relieves spatial tooth crowding", "Prevents wisdom tooth infection", "Atypical microscopic gentle tissue handling"],
      fullDetails: "While keeping natural teeth is our primary objective, severely decayed, broken or crowded teeth (such as third molars or wisdom teeth) must occasionally be removed. Dr. Desai specializes in atraumatic surgical extractions, utilizing specialized instruments to preserve surrounding bone and accelerate tissue healing."
    },
    {
      id: "whitening",
      title: "Teeth Whitening",
      description: "Brighten your tooth color instantly. Achieve multiple shades of improvement safely under professional care.",
      icon: Zap,
      benefits: ["Dramatic, speedy outcomes", "Safe, non-abrasive treatments", "Boosts personal meeting confidence"],
      fullDetails: "Over-the-counter whitening pastes can scratch enamel and fail to lift deep intrinsic yellowing. Our professional whitening systems apply protective barrier gels over your gums and use active, light-energized whitening elements to safely lift stains in under an hour."
    },
    {
      id: "makeover",
      title: "Smile Makeover",
      description: "Comprehensive aesthetic restorations. Transform your smile proportions using computerized planning.",
      icon: Smile,
      benefits: ["Perfect smile alignment", "Tailored to your facial shape", "Holistic tooth restoration"],
      fullDetails: "A smile makeover is a customized combinations of cosmetic dental practices tailored carefully to your unique facial features. We analyze lip alignment, tooth lengths, and skin tones using Digital Smile Design (DSD) to plan dynamic physical restorations before starting therapy."
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      description: "Refining minor teeth chips and cracks. Includes ultra-thin premium composite and porcelain veneers.",
      icon: Gem,
      benefits: ["Fixes minor tooth gaps", "Reshapes irregular teeth outline", "Resistant to future stains"],
      fullDetails: "Cosmetic dentistry focuses on enhancing your smile's visual appearance. This includes tooth bonding using high-strength composite materials, porcelain veneers, and gum contouring. We use light-reflective ceramic materials to match natural looking characteristics."
    },
    {
      id: "fillings",
      title: "Dental Fillings",
      description: "Durable metal-free fillings. Restores tooth structure invisibly with advanced biocompatible composites.",
      icon: Combine,
      benefits: ["100% Mercury-free materials", "Invisible composite matches", "Prevents tooth decay progression"],
      fullDetails: "We utilize composite resin fillings that bond straight to your tooth structure. These fillings shrink minimally, match any enamel coloration perfectly, and reinforce weakened parts of the tooth to protect it from fracture."
    },
    {
      id: "pediatric",
      title: "Pediatric Dentistry",
      description: "Dedicated oral care for kids. Gentle, friendly, and instructive treatment keeping children absolute at ease.",
      icon: Baby,
      benefits: ["Fun, stress-free clinical visits", "Establishes lifelong oral habits", "Protective pit & fissure sealants"],
      fullDetails: "A child's early dental experiences shape their view towards oral care for life. Dr. Desai's patient, friendly methodology explains procedures in fun concepts to put children at complete ease. We emphasize preventative care such as cavity sealants and gentle cavity treatments."
    },
    {
      id: "dentures",
      title: "Dentures",
      description: "Lightweight partial and full dentures. Retrieve healthy chewing habits and youthful jawline profiles.",
      icon: Grid,
      benefits: ["Affordable full teeth renewal", "Natural, organic appearance", "Improves speech pronunciation"],
      fullDetails: "For patients missing multiple teeth, dentures provide a highly reliable treatment route. We offer lightweight acrylic dentures, premium BPS dentures, as well as modern implant-supported overdentures that remain anchored without loose slipping during conversations."
    },
    {
      id: "emergency",
      title: "Emergency Dental care",
      description: "Immediate triage for severe tooth pain, fractured teeth, swellings, or sudden sporting impact trauma.",
      icon: Clock,
      benefits: ["Immediate painful relief", "Saves dislodged teeth", "Same-day priority bookings"],
      fullDetails: "Dental emergencies require swift, professional intervention. If you suffer from sudden tooth structural loss, gum swelling, or a tooth completely knocked out in a sporting impact, call us immediately. We maintain daily priority reservation gaps to resolve acute suffering prompt."
    }
  ];

  const handleBookRedirect = () => {
    setSelectedService(null);
    const bookingSec = document.getElementById("book-appointment");
    if (bookingSec) {
      bookingSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="treatments" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Absolute shapes */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-extrabold text-brand-primary uppercase tracking-widest font-mono">Expert Procedures</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
            Our Advanced Dental Treatments
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg">
            We provide dental treatments spanning simple preventative hygiene to complex oral surgeries, 
            using high-grade biocompatible materials matching global standards.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-primary to-brand-accent rounded mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6.5 border border-slate-100 hover:border-sky-200 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Panel */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5 border border-brand-primary/10 flex items-center justify-center text-brand-primary mb-5 group-hover:from-brand-primary group-hover:to-brand-secondary group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-slate-950 text-lg group-hover:text-brand-primary transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Benefits Preview */}
                  <ul className="mt-4 space-y-2">
                    {service.benefits.map((bf, bidx) => (
                      <li key={bidx} className="flex items-center text-xs text-slate-600 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2 flex-shrink-0 animate-pulse"></span>
                        <span>{bf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Read more footer */}
                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-brand-primary group-hover:text-brand-secondary tracking-wider uppercase flex items-center space-x-1 hover:underline cursor-pointer"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Modern Detailed Drawer Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-sky-100 shadow-2xl relative z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header Icon + Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary border border-brand-primary/10">
                  {(() => {
                    const ModalIcon = selectedService.icon;
                    return <ModalIcon className="w-7 h-7" />;
                  })()}
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-slate-900 leading-tight">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-brand-accent mt-0.5 font-bold">
                    Speciality Practice
                  </p>
                </div>
              </div>

              {/* Full Description & Context */}
              <div className="space-y-4">
                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                  {selectedService.fullDetails}
                </p>

                <div className="p-4.5 bg-sky-50/50 rounded-2xl border border-sky-100/50">
                  <h4 className="font-display font-bold text-slate-800 text-sm mb-2.5">Key Patient Benefits:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.benefits.map((bf, k) => (
                      <li key={k} className="flex items-start text-xs text-slate-700 font-medium">
                        <span className="w-2 h-2 rounded-full bg-brand-accent mt-1 mr-2 flex-shrink-0" />
                        <span>{bf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Block */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-6 mt-8 border-t border-slate-100 gap-4">
                <div className="text-left">
                  <p className="text-xs text-slate-400 font-mono">Need immediate diagnosis?</p>
                  <p className="text-xs text-slate-700 font-semibold mt-0.5">Call Dr. Desai's clinic team</p>
                </div>
                
                <div className="flex space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 sm:flex-none cursor-pointer px-5 py-3 border border-slate-200 hover:border-slate-300 text-slate-700 text-sm font-semibold rounded-xl text-center transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleBookRedirect}
                    className="flex-1 sm:flex-none cursor-pointer px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm font-bold rounded-xl text-center shadow-lg shadow-sky-500/15"
                  >
                    Book Treatment
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
