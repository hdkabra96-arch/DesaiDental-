import { motion } from "motion/react";
import { 
  UserCheck, Eye, Compass, ClipboardList, Scissors, HeartPulse 
} from "lucide-react";

export default function TreatmentProcess() {
  const steps = [
    {
      step: 1,
      title: "Consultation",
      icon: UserCheck,
      description: "Personal meeting to review symptoms, previous dental histories, and complete comfort preferences.",
      details: "No rush. Dr. Desai listens to your physical concerns and clarifies any anxieties first."
    },
    {
      step: 2,
      title: "Oral Examination",
      icon: Eye,
      description: "Thorough physical cavity mapping. Includes soft tissue cancer checks and structural teeth alignments.",
      details: "We map your gums, teeth, and bite alignments with absolute precision checks."
    },
    {
      step: 3,
      title: "Diagnosis",
      icon: Compass,
      description: "Utilizing digital RVG X-ray scans to reveal hidden pocket cavities, bone statuses, and root channels.",
      details: "Accurate computer-guided diagnosis to find the deep root causes of tooth pains."
    },
    {
      step: 4,
      title: "Treatment Plan",
      icon: ClipboardList,
      description: "Designing personalized procedural options, explaining timelines, and detailing budgets transparently.",
      details: "We walk you through step-by-step options before any procedure is scheduled."
    },
    {
      step: 5,
      title: "Procedure",
      icon: Scissors,
      description: "Highly specialized clinical treatment (e.g. implant placement or precise micro-root canal therapy).",
      details: "Conducted under optimal comfort setups using pain-free localized anesthetic tools."
    },
    {
      step: 6,
      title: "Follow-Up Care",
      icon: HeartPulse,
      description: "In-depth self-maintenance education, soft tissue checkups, and subsequent regular cleanup guidance.",
      details: "We stay in touch to ensure your healing is smooth with zero secondary inflammation."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Visual top and bottom boundaries */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-18">
          <div className="text-xs font-extrabold text-brand-primary uppercase tracking-widest font-mono">Your Clinical Journey</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
            Our Care-First Treatment Process
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            From the minute you step into our Surat clinic to your post-treatment smile, we maintain a predictable, zero-pain pathway.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded mx-auto mt-4"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-12">
          {/* Central Line for Large Screens */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-sky-100 transform lg:-translate-x-1/2 pointer-events-none hidden md:block"></div>

          {/* Staggered Steps */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.step}
                  className="flex flex-col lg:flex-row items-start lg:items-center relative"
                >
                  {/* Alternating Columns */}
                  <div className={`w-full lg:w-1/2 ${isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:order-2"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="bg-slate-50 border border-slate-100 rounded-2xl p-6.5 hover:border-sky-100 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 relative inline-block text-left w-full"
                    >
                      {/* Step Number Top Banner */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-extrabold font-mono tracking-widest text-brand-accent uppercase bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full">
                          Stage {step.step}
                        </span>
                        <div className="p-1.5 bg-white border border-slate-100 rounded-lg text-brand-primary lg:hidden">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                      </div>

                      <h3 className="font-display font-extrabold text-slate-900 text-base">
                        {step.title}
                      </h3>
                      
                      <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                        {step.description}
                      </p>

                      <p className="text-slate-400 text-[11px] font-medium italic mt-3 border-t border-slate-100 pt-2 bg-gradient-to-r from-sky-50/20 to-transparent pl-2 border-l-2 border-l-sky-200">
                        {step.details}
                      </p>
                    </motion.div>
                  </div>

                  {/* Marker Node for Central Line */}
                  <div className="absolute left-8 lg:left-1/2 transform -translate-y-1/2 lg:-translate-y-0 lg:-translate-x-1/2 top-10 lg:top-auto w-12 h-12 rounded-full bg-white border-2 border-sky-100 shadow-md flex items-center justify-center text-brand-primary z-10 hidden md:flex hover:scale-110 active:scale-95 transition-transform cursor-pointer">
                    <Icon className="w-5 h-5 text-brand-secondary" />
                  </div>

                  {/* Filler side for symmetry on large screen */}
                  <div className="w-1/2 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
