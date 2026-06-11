import { motion } from "motion/react";
import { Monitor, ShieldCheck, UserCheck, Cpu, Smile, CheckCircle } from "lucide-react";

export default function ClinicFeatures() {
  const clinicalSpecs = [
    {
      id: "equipment",
      icon: Monitor,
      title: "State-of-the-Art Equipment",
      description: "Equipped with advanced diagnostic chairs, ultrasonic equipment, and high-frequency dental units, maximizing precision."
    },
    {
      id: "sterilized",
      icon: ShieldCheck,
      title: "Sterilized Environment",
      description: "Class-B autoclave sterilization of all medical inputs. We adhere to rigorous WHO-standard clinic disinfection regulations daily."
    },
    {
      id: "consultation",
      icon: UserCheck,
      title: "Personalized Consultations",
      description: "We explain your diagnostics using active visual representations, explaining each treatment phase clearly before starting."
    },
    {
      id: "tech",
      icon: Cpu,
      title: "Modern Dental Technology",
      description: "Computer aided precision devices, high resolution digital X-rays (RVG), and advanced rotary instrumentation."
    },
    {
      id: "comfort",
      icon: Smile,
      title: "Patient Comfort First",
      description: "Ergonomically designed chairs, soundproof dental compartments, and local anesthesia systems for painless tooth extractions."
    },
    {
      id: "standards",
      icon: CheckCircle,
      title: "Quality Treatment Standards",
      description: "We use only ADA & ISO-certified materials for composite fills, ceramic implants, and root restorations so they withstand the test of time."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Background Blur */}
        <div className="absolute right-10 bottom-10 w-60 h-60 bg-sky-200/20 rounded-full blur-2xl"></div>

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold text-slate-400 font-mono tracking-widest uppercase mb-1">Our Environment</div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-sm">
            Premium Clinical Standards
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            Every square inch of Desai Dental Clinic is custom-optimized to foster absolute hygiene, safe surgical precision, and physical patient peace.
          </p>
        </div>

        {/* Features Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicalSpecs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-sky-100/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-start space-x-4"
              >
                {/* Clean, circle icon badge */}
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-sky-50 flex items-center justify-center text-brand-primary border border-sky-100/50">
                  <Icon className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-sm leading-tight">
                    {spec.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
