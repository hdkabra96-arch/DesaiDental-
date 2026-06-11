import { motion } from "motion/react";
import { Award, GraduationCap, Heart, CheckCircle2, ShieldAlert } from "lucide-react";

export default function AboutDoctor() {
  const credentials = [
    {
      icon: <GraduationCap className="w-5 h-5 text-brand-primary" />,
      title: "MDS - Master of Dental Surgery",
      description: "Highest postgraduate specialization degree in professional dentistry, with focused hands-on surgery credentials.",
    },
    {
      icon: <Award className="w-5 h-5 text-brand-accent" />,
      title: "Advanced Clinical Expertise",
      description: "Deep training in full mouth dental implants, pain-free laser root canals, and cosmetic smile designs.",
    },
    {
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      title: "Patient-Centered Comfort",
      description: "Dedicated to providing anxiety-free treatments with personalized consultations and step-by-step guidance.",
    },
  ];

  const highlights = [
    "Expertise in complex structural extractions",
    "Tailored treatment plans matching your physical and financial needs",
    "Implementation of latest global sterilization protocols",
    "Dedicated follow-up and emergency availability",
    "Specialized pediatric dental techniques for safe children care",
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -left-16 bottom-20 w-72 h-72 bg-sky-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Doctor Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[360px] lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border border-sky-100 -z-10 bg-slate-50/50"></div>
              
              {/* Actual photo card placeholder */}
              <div className="overflow-hidden rounded-2xl shadow-xl border border-slate-100 bg-white relative">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Ankit J Desai (MDS)"
                  referrerPolicy="no-referrer"
                  className="w-full h-[450px] object-cover object-top hover:scale-102 transition-transform duration-500"
                />
                
                {/* Floating trust banner inside photo */}
                <div className="absolute bottom-5 left-5 right-5 glass-morphism p-4.5 rounded-xl border border-white/60 shadow-lg text-center">
                  <div className="text-xs font-bold text-brand-primary uppercase tracking-wider font-mono">Principal Dentist</div>
                  <h4 className="font-display font-extrabold text-slate-900 text-base mt-1">Dr. Ankit J Desai (MDS)</h4>
                  <p className="text-xs text-slate-500 font-medium">Dental Specialist & Implant Consultant</p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute top-4 right-4 bg-teal-500 text-white rounded-full p-2 shadow-lg border border-teal-400">
                <CheckCircle2 className="w-5 h-5 fill-current text-white stroke-teal-500" />
              </div>
            </div>
          </motion.div>

          {/* Text/Credentials Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div>
              <div className="text-xs font-extrabold text-brand-primary uppercase tracking-widest font-mono select-none">Surat's Premier Oral Care</div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 mt-2 tracking-tight">
                Meet Dr. Ankit J Desai <span className="text-brand-accent">(MDS)</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded mt-3"></div>
            </div>

            <p className="text-slate-600 leading-relaxed font-sans text-base sm:text-lg">
              At Desai Dental Clinic, we believe every patient deserves tailored, zero-compromise dental care. 
              As an <strong className="text-slate-900">MDS (Master of Dental Surgery) specialist</strong>, 
              Dr. Ankit J Desai implements advanced clinical procedures using modern scientific diagnostic aids.
            </p>

            <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base -mt-2">
              Whether you need dental implants, computer-guided root canal therapy, or cosmetic aesthetic modifications, 
              Dr. Desai applies meticulous, pain-free dental methodologies centered around active patient comfort and total transparency.
            </p>

            {/* Structured Credentials Grid */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-sky-100 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                    {cred.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-950 text-sm leading-tight">{cred.title}</h4>
                    <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">{cred.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick trust checklist */}
            <div className="pt-2">
              <h4 className="font-display font-bold text-slate-800 text-sm mb-3">Our Core Dental Commitments:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {highlights.map((text, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
                    <span className="text-slate-600 text-xs font-semibold">{text}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
