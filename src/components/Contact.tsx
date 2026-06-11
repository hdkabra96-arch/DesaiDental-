import { motion } from "motion/react";
import { 
  MapPin, Phone, MessageSquare, Compass, Clock, ShieldCheck, Mail, ArrowUpRight
} from "lucide-react";

export default function Contact() {
  const address = "Landmark Dotiwala Bakery, Rang Upvan Bhavan Road 1/11, Kinkhabwala Mansion, Adajan Rd, Nanpura, Surat, Gujarat 395001";
  
  const handleGetDirections = () => {
    // Open google maps direct coordinate lookup for Nanpura Surat Landmark Dotiwala Bakery
    const targetUrl = `https://www.google.com/maps/search/?api=1&query=Kinkhabwala+Mansion+Nanpura+Surat+Gujarat`;
    window.open(targetUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="text-xs font-extrabold text-brand-primary uppercase tracking-widest font-mono">Location & Details</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
              Visit Dr. Ankit J Desai in Surat
            </h2>
            <p className="text-slate-500 mt-3 text-base sm:text-lg">
              Our clinic lies in the central commercial district of Surat, close to landmark spots. Complete wheelchair accessibility and parking slots.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right hidden lg:block">
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">★ Google Plus Code: 5RV8+2P Surat</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Info cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Info details wrap */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-7 space-y-6">
              
              <div>
                <dt className="text-[10px] font-extrabold font-mono text-brand-primary uppercase tracking-widest">Clinic Identity</dt>
                <dd className="font-display font-black text-slate-900 text-xl mt-1 leading-none">
                  Desai Dental Clinic
                </dd>
                <dd className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-medium font-mono">
                  Dr. Ankit J Desai (MDS)
                </dd>
              </div>

              {/* Physical Address card row */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brand-primary flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">Clinic Address</h4>
                  <p className="text-slate-600 text-sm mt-1.5 leading-relaxed font-sans font-medium">
                    {address}
                  </p>
                </div>
              </div>

              {/* Phone Details Row */}
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brand-primary flex-shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">Phone Helpline</h4>
                  <p className="text-slate-900 text-base mt-1 font-bold font-mono">
                    <a href="tel:+917069537131" className="hover:text-brand-secondary transition-colors">
                      +91 70695 37131
                    </a>
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-medium leading-none">Tap to dial from mobile directly</p>
                </div>
              </div>

              {/* Consultation timing rows */}
              <div className="flex items-start space-x-3.5 border-t border-slate-200/60 pt-5">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brand-primary flex-shrink-0 shadow-sm">
                  <Clock className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">Working Schedules</h4>
                  <p className="text-slate-600 text-xs mt-1.5 leading-relaxed font-medium">
                    Monday – Saturday: <strong className="text-slate-800">09:00 AM – 08:00 PM</strong>
                  </p>
                  <p className="text-rose-500 text-xs mt-1 leading-none font-semibold">
                    Sunday: Closed (Emergencies on-call triage)
                  </p>
                </div>
              </div>

            </div>

            {/* Structured action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="tel:+917069537131"
                className="cursor-pointer flex items-center justify-center space-x-2 px-5 py-3.5 bg-brand-primary hover:bg-brand-secondary text-white font-display font-semibold text-xs rounded-xl shadow-md text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call Clinic</span>
              </a>

              <a
                href="https://wa.me/917069537131?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer flex items-center justify-center space-x-2 px-5 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-display font-semibold text-xs rounded-xl shadow-md text-center"
              >
                <MessageSquare className="w-4 h-4 fill-current text-white" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={handleGetDirections}
                className="cursor-pointer flex items-center justify-center space-x-2 px-5 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-display font-semibold text-xs rounded-xl shadow-sm hover:bg-slate-50"
              >
                <Compass className="w-4 h-4 text-brand-accent" />
                <span>Get Directions</span>
              </button>
            </div>

          </div>

          {/* Right panel: Maps frame */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border border-slate-100 shadow-xl bg-slate-50 group">
            
            {/* Embedded Google Web Iframe coordinates of Nanpura Surat */}
            <iframe
              title="Google Map location of Desai Dental Clinic Nanpura Surat"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14879.91605239!2d72.80957591!3d21.1953232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e6df7db00d9%3A0xe54e610d481dae18!2sNanpura%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
            />

            {/* Accent Floating Map Indicator */}
            <div 
              onClick={handleGetDirections}
              className="absolute bottom-5 right-5 cursor-pointer glass-morphism px-3.5 py-2 rounded-xl border border-white/40 flex items-center space-x-2 shadow-lg hover:scale-103 transition-transform"
            >
              <Compass className="w-4 h-4 text-brand-primary animate-spin" />
              <div className="text-left leading-none">
                <span className="text-[10px] font-bold text-slate-400 block font-mono">SURAT OFFICE Map</span>
                <span className="text-xs font-bold text-slate-800 leading-none inline-flex items-center">
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
