import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Clock, ChevronRight, Check, X } from "lucide-react";

interface EducCard {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  bullets: string[];
  fullGuide: string;
}

export default function Education() {
  const [activeArticle, setActiveArticle] = useState<EducCard | null>(null);

  const tips: EducCard[] = [
    {
      id: "checkups",
      title: "Importance of Regular Dental Checkups",
      category: "Preventative Care",
      readTime: "3 min read",
      summary: "Bi-annual clinic screenings catch deep bacterial biofilms and cavities months before they trigger painful nerve infections.",
      bullets: [
        "Identifies asymptomatic decays",
        "Assesses structural bone heights",
        "Includes soft oral tissue cancer checks"
      ],
      fullGuide: "Waiting for toothaches to happen is the most common dental mistake. Early cavities do not produce pain. By the time a tooth aches, the decay has traveled straight into the inner tooth pulp, requiring an emergency root canal or extraction. A quick examination every six months enables Dr. Desai to spot microscopic soft deposits, assess enamel health, and resolve complications using conservative, inexpensive fillings."
    },
    {
      id: "hygiene",
      title: "Benefits of Professional Teeth Scaling",
      category: "Oral Hygiene",
      readTime: "2 min read",
      summary: "Ultrasonic scaling removes calcified tartar below your gums that regular toothbrushes physically cannot scratch away.",
      bullets: [
        "Reverses gingivitis gum bleeding",
        "Eradicates persistent mouth odors",
        "Lifts stubborn tea, food and nicotinic stains"
      ],
      fullGuide: "Bacterial plaque hardens into a mineralized cement called tartar (calculus) within twenty-four hours. This cement physically cannot be removed by simple toothbrushes or flossing. Tartar harbors billions of active bacteria that slowly eat away at the supporting socket bone, causing chronic bleeding, loose teeth, and halitosis (bad breath). Professional ultrasonic cleanings gently shake loose these deposits, preventing periodontitis and refreshing oral tissues."
    },
    {
      id: "implant-care",
      title: "Dental Implant Post-Operative Care",
      category: "Restorative Dentistry",
      readTime: "4 min read",
      summary: "Ensure lifetime osseointegration strength by adopting proper flossing angles and active physical cleaning habits.",
      bullets: [
        "Avoid chewing tough fibers initially",
        "Utilize super-floss or interdental brushes",
        "Schedule standard titanium assessment checkups"
      ],
      fullGuide: "While titanium dental implants cannot decay like normal teeth, the surrounding bone and gums are still vulnerable to infections (peri-implantitis). Routine cleaning, using water flosser devices, and using specialized soft-headed implant brushes are essential. Avoid direct hard pressure for the first few weeks as the bone cells fuse around the thread, and keep appointments with Dr. Desai to verify the crown connection points."
    },
    {
      id: "daily-habits",
      title: "Oral Hygiene Daily Best Practices",
      category: "Home Care Wellness",
      readTime: "3 min read",
      summary: "Refine your manual daily angles, brush duration, and flossing routine to secure a plaque-free oral profile.",
      bullets: [
        "Use custom 45-degree sweeping motions",
        "Floss daily to clear tight interdental gaps",
        "Limit highly acidic carbonated soft-drinks"
      ],
      fullGuide: "Premium oral care begins with correct habits at home. Always choose soft-bristled brushes and brush at a 45-degree angle towards the gums, gently cleaning in short circles. Avoid violent horizontal scrubbing, which slowly wears down protective tooth enamel and forces gums to recede. Replace your toothbrush cleanings every three months or immediately after healing from common seasonal colds."
    }
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-extrabold text-brand-primary uppercase tracking-widest font-mono">Patient Education</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
            Preventative Dental Health Tips
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base max-w-lg mx-auto">
            Our commitment is to educate. Learn simple clinical ways to preserve tooth enamel and protect your gums daily.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded mx-auto mt-4"></div>
        </div>

        {/* Tips cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, idx) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-6.5 border border-slate-100/80 hover:border-sky-100 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag block */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold font-mono text-brand-primary bg-sky-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {tip.category}
                  </span>
                  <span className="flex items-center text-[11px] font-mono font-medium text-slate-400">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {tip.readTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-slate-900 text-lg leading-snug">
                  {tip.title}
                </h3>

                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  {tip.summary}
                </p>

                {/* Bullets lists */}
                <ul className="mt-5 space-y-2.5 border-t border-slate-50 pt-4.5">
                  {tip.bullets.map((b, bix) => (
                    <li key={bix} className="flex items-start text-xs text-slate-600 font-medium">
                      <Check className="w-4 h-4 text-brand-accent mr-2.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-slate-50 flex justify-end">
                <button
                  onClick={() => setActiveArticle(tip)}
                  className="text-xs font-bold text-brand-primary hover:text-brand-secondary tracking-wider uppercase flex items-center space-x-1 cursor-pointer"
                >
                  <span>Read Complete Guide</span>
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pop Up Guide Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            {/* Content Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-xl w-full border border-sky-100 shadow-2xl relative z-10 overflow-y-auto max-h-[85vh]"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 text-[10px] font-bold font-mono tracking-widest text-brand-accent uppercase mb-2">
                <span>Education File</span>
                <span>•</span>
                <span>{activeArticle.category}</span>
              </div>

              <h3 className="font-display font-extrabold text-xl text-slate-900 leading-snug pr-6">
                {activeArticle.title}
              </h3>

              <div className="h-1 w-12 bg-brand-primary rounded my-4"></div>

              {/* Guide main content */}
              <div className="space-y-4">
                <p className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line font-sans">
                  {activeArticle.fullGuide}
                </p>

                <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100/50 mt-4">
                  <h4 className="font-display font-bold text-slate-800 text-xs uppercase tracking-wider">Crucial take-home point:</h4>
                  <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-medium">
                    Brush carefully twice a day without rushing, schedule routine cleanup scaling, and seek immediate diagnosis on persistent signs or bleeding gums.
                  </p>
                </div>
              </div>

              {/* CTA Booking Link inside educational cards */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">{activeArticle.readTime}</span>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    const bookingSec = document.getElementById("book-appointment");
                    if (bookingSec) {
                      bookingSec.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="cursor-pointer px-5 py-2.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs font-bold rounded-lg shadow-md"
                >
                  Schedule A Consultation
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
