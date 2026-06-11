import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Phone, Calendar, MapPin, Award, ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
      title: "State-of-the-Art Operations",
      desc: "Sterilized, safe environments with absolute hygiene"
    },
    {
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
      title: "Expert MDS Treatments",
      desc: "Comprehensive care and precision dental surgery in Surat"
    },
    {
      url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
      title: "Modern Diagnostics",
      desc: "Advanced digital imagery and precise medical examinations"
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
      title: "Prosthodontics Excellence",
      desc: "Premium restorations, root canals, and life-like implants"
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const scrollToBook = () => {
    const el = document.getElementById("book-appointment");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const trustHighlights = [
    "MDS Qualified Dentist",
    "Advanced Dental Treatments",
    "Patient-Focused Care",
    "Convenient Surat Location",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-sky-50/20"
    >
      {/* Decorative premium blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-accent/10 rounded-full blur-2xl -ml-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Top Local Accent Badge */}
            <div className="inline-flex self-start items-center space-x-2 px-3 py-1.5 bg-sky-50 border border-sky-100 rounded-full text-brand-primary text-xs font-semibold uppercase tracking-wider font-mono">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              <span>Nanpura, Surat</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-none">
              Expert Dental Care for a{" "}
              <span className="text-gradient block">Healthier Smile</span>
            </h1>

            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl font-sans">
              Comprehensive dental treatments delivered with precision, comfort, and care by{" "}
              <span className="font-semibold text-slate-800">Dr. Ankit J Desai (MDS)</span>. 
              Modern technology meets gentle dentistry in Surat.
            </p>

            {/* Checkmark trust grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-4">
              {trustHighlights.map((hl, k) => (
                <div key={k} className="flex items-center space-x-2.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-brand-accent stroke-[3px]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{hl}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={scrollToBook}
                className="cursor-pointer flex items-center justify-center space-x-2.5 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-display font-bold rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:+917069537131"
                className="flex items-center justify-center space-x-2.5 px-8 py-4 bg-white border border-slate-200/80 text-slate-800 font-display font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all duration-200"
              >
                <Phone className="w-5 h-5 text-brand-primary" />
                <span>Call +91 70695 37131</span>
              </a>
            </div>

            {/* Minimal Stat / Highlight Info */}
            <div className="pt-6 border-t border-slate-100 flex items-center space-x-6">
              <div className="flex items-center space-x-2.5">
                <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                  <Award className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider">Credentials</div>
                  <div className="text-sm font-bold text-slate-800">Master of Dental Surgery (MDS)</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column Advanced Premium Graphics Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="relative mx-auto max-w-[400px] lg:max-w-none">
              {/* Background gradient outline card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-accent/10 rounded-3xl blur-xl transform translate-x-4 translate-y-4 -z-10"></div>
              
              {/* Main Premium Card Image Slider */}
              <div className="overflow-hidden rounded-3xl border border-sky-100/50 shadow-2xl bg-white relative group h-[320px] sm:h-[420px] w-full">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentSlide}
                    src={slides[currentSlide].url}
                    alt={slides[currentSlide].title}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Left/Right navigation controls (visible on hover) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 cursor-pointer border border-sky-50"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 cursor-pointer border border-sky-50"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Slider pagination indicators (dots) */}
                <div className="absolute top-4 right-4 z-20 flex space-x-1.5 px-2.5 py-1.5 rounded-full bg-black/30 backdrop-blur-xs">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setDirection(i > currentSlide ? 1 : -1);
                        setCurrentSlide(i);
                      }}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i === currentSlide ? "bg-white scale-125 w-3" : "bg-white/50 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Floating caption glass indicator */}
                <div className="absolute bottom-4 left-4 right-4 z-20 glass-morphism p-4 rounded-2xl border border-white/55 shadow-lg flex items-center space-x-3.5">
                  <div className="w-3.5 h-3.5 bg-brand-accent rounded-full animate-pulse flex-shrink-0"></div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-slate-900 text-sm truncate">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-xs text-slate-600 truncate">
                      {slides[currentSlide].desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Little Extra floating Badge */}
              <div className="absolute -top-4 -left-4 glass-morphism px-4 py-2.5 rounded-2xl border border-white/50 shadow-md flex items-center space-x-2.5 hidden sm:flex">
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-brand-accent">
                  <Award className="w-4.5 h-4.5 font-bold" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono leading-none">Specialist</div>
                  <div className="text-xs font-bold text-slate-800">Prosthodontist & Implantologist</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
