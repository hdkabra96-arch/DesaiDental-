import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center space-y-3.5 pointer-events-none select-none">
      <AnimatePresence>
        {/* Scroll To Top Trigger */}
        {showScrollTop && (
          <motion.button
            key="scrollTopBtn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="p-3 bg-white hover:bg-slate-50 text-slate-700 rounded-full shadow-lg border border-slate-100 hover:border-slate-200 transition-all cursor-pointer pointer-events-auto"
            title="Scroll to main top header"
          >
            <ChevronUp className="w-5 h-5 text-brand-primary" />
          </motion.button>
        )}

        {/* Regular Phone Dialer Widget */}
        <motion.a
          key="floatingCallWidget"
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          href="tel:+917069537131"
          className="p-4 bg-brand-primary text-white rounded-full shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer pointer-events-auto border border-sky-400/40 flex items-center justify-center"
          title="Dial clinic operator"
        >
          <Phone className="w-5 h-5 fill-current text-white stroke-brand-primary" />
        </motion.a>

        {/* WhatsApp message hook */}
        <motion.a
          key="floatingWAWidget"
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          href="https://wa.me/917069537131?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noreferrer"
          className="p-4 bg-emerald-500 text-white rounded-full shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer pointer-events-auto flex items-center justify-center"
          title="Direct message on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current text-white stroke-none" />
        </motion.a>
      </AnimatePresence>
    </div>
  );
}
