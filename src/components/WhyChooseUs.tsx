import { motion } from "motion/react";
import { 
  Award, Cpu, Sparkles, Heart, ClipboardList, BookOpen, Coins, MapPin 
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      id: "mds",
      icon: Award,
      title: "Experienced MDS Specialist",
      description: "Dr. Ankit J Desai holds a Master of Dental Surgery (MDS). He provides highly refined clinical insight beyond general standard dentistry."
    },
    {
      id: "equipment",
      icon: Cpu,
      title: "Advanced Dental Equipment",
      description: "Our clinic is equipped with cutting-edge tools, including ultrasonic scalers, digital sensors, and Apex locators for pristine execution."
    },
    {
      id: "techniques",
      icon: Sparkles,
      title: "Modern Treatment Techniques",
      description: "We use micro-dentistry and modern pain-management protocols that render treatments incredibly comfortable and fast."
    },
    {
      id: "environment",
      icon: Heart,
      title: "Comfortable Environment",
      description: "Our clinic lounge and surgery theater are designed with maximum sterility, relaxing acoustics, and soothing lighting to combat anxieties."
    },
    {
      id: "plans",
      icon: ClipboardList,
      title: "Personalized Treatment Plans",
      description: "No cookie-cutter setups. Every treatment is designed uniquely to match dental hygiene needs, schedules, and financial budgets."
    },
    {
      id: "education",
      icon: BookOpen,
      title: "Focus on Patient Education",
      description: "We explain teeth diagnostics using visual intraoral feeds and provide customized guidelines for long-term self-maintenance."
    },
    {
      id: "affordable",
      icon: Coins,
      title: "Affordable Dental Care",
      description: "Premium healthcare shouldn't be stressful. We ensure competitive, honest local dental valuations with zero hidden fees."
    },
    {
      id: "surat",
      icon: MapPin,
      title: "Convenient Surat Location",
      description: "Centrally located at Nanpura near Landmark Dotiwala Bakery. Highly accessible with plenty of dedicated street parking spaces."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic graphic dividers */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="text-xs font-extrabold text-brand-primary uppercase tracking-widest font-mono">Our Quality Promise</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
              Why You Can Trust Desai Dental Clinic
            </h2>
            <p className="text-slate-500 mt-3 text-base sm:text-lg max-w-3xl">
              Even without online reviews yet, our surgical standard speaks for itself. 
              We prioritize modern hygiene parameters and patient health accountability.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right hidden lg:block">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-teal-50 border border-teal-100/50 rounded-full text-brand-accent text-xs font-mono font-bold uppercase tracking-wider">
              <span>★ 100% Client Centered</span>
            </span>
          </div>
        </div>

        {/* Reasons Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6.5">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-sky-100 hover:bg-white hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 flex flex-col items-start"
              >
                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brand-primary shadow-sm mb-4">
                  <Icon className="w-5 h-5 text-brand-primary" />
                </div>

                <h3 className="font-display font-bold text-slate-950 text-sm leading-tight mb-2">
                  {reason.title}
                </h3>

                <p className="text-slate-500 text-xs leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Lower Banner emphasizing Clinical Excellence */}
        <div className="mt-16 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400 via-sky-600 to-slate-900 hidden sm:block"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="text-xs font-bold font-mono tracking-widest text-sky-200 uppercase">Emergency Appointment Gap</div>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl mt-1.5">
              Suffering from acute tooth pain? We keep immediate emergency reservation spaces.
            </h3>
            <p className="text-sky-100 text-sm mt-3 leading-relaxed max-w-2xl">
              Dr. Desai understands deep pulp/jaw pains require priority care. If you have an urgent wisdom tooth swelling or structural chip, contact our team immediately for same-day relief.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-5 mt-6">
              <a
                href="tel:+917069537131"
                className="px-5 py-2.5 bg-white text-brand-secondary font-display font-bold text-sm rounded-xl shadow-md hover:bg-sky-50 transition-colors"
              >
                Emergency Call: +91 70695 37131
              </a>
              <a
                href="https://wa.me/917069537131?text=Hello%20Doctor%2C%20I%20have%20a%20dental%20emergency%20and%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-white underline hover:text-sky-100"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
