import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, User, Phone, Mail, FileText, Send, CheckCircle2, AlertCircle, Sparkles, ClipboardCheck
} from "lucide-react";
import { BookingData } from "../types";

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingData>({
    fullName: "",
    mobile: "",
    email: "",
    treatment: "None",
    preferredDate: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<BookingData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [savedBookings, setSavedBookings] = useState<BookingData[]>([]);

  // Load existing mock bookings from localStorage if any
  useEffect(() => {
    const historical = localStorage.getItem("desai_mock_bookings");
    if (historical) {
      try {
        setSavedBookings(JSON.parse(historical));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const treatmentOptions = [
    { value: "None", label: "-- Select treatment needed --" },
    { value: "Dental Implants", label: "Dental Implants" },
    { value: "Root Canal Treatment", label: "Root Canal Treatment" },
    { value: "Crowns & Bridges", label: "Crowns & Bridges" },
    { value: "Teeth Cleaning", label: "Teeth Cleaning" },
    { value: "Tooth Extraction", label: "Tooth Extraction" },
    { value: "Teeth Whitening", label: "Teeth Whitening" },
    { value: "Smile Makeover", label: "Smile Makeover" },
    { value: "Cosmetic Dentistry", label: "Cosmetic Dentistry" },
    { value: "Dental Fillings", label: "Dental Fillings" },
    { value: "Pediatric Dentistry", label: "Pediatric Dentistry" },
    { value: "Dentures", label: "Dentures" },
    { value: "Emergency Dental Care", label: "Emergency care" },
    { value: "General Checkup", label: "General Checkup / Consultation" }
  ];

  const validate = (): boolean => {
    const newErrors: Partial<BookingData> = {};
    
    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters";
    }

    // Indian Phone format validation: 10 digits
    const cleanPhone = formData.mobile.replace(/\D/g, "");
    if (!formData.mobile) {
      newErrors.mobile = "Mobile Number is required";
    } else if (cleanPhone.length < 10) {
      newErrors.mobile = "Please provide a valid 10-digit mobile number";
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = "Email address is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please provide a valid email format";
    }

    // Date validation
    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please choose a preferred reservation date";
    } else {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // normalize clock
      if (selectedDate < today) {
        newErrors.preferredDate = "Appointment cannot be set to a past date";
      }
    }

    // Treatment
    if (formData.treatment === "None") {
      newErrors.treatment = "Please select a specialty treatment class";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error dynamically as user typing
    if (errors[name as keyof BookingData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate database network lag of 1.5s
    setTimeout(() => {
      const updatedBookings = [formData, ...savedBookings];
      setSavedBookings(updatedBookings);
      localStorage.setItem("desai_mock_bookings", JSON.stringify(updatedBookings));
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      treatment: "None",
      preferredDate: "",
      message: ""
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="book-appointment" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-20">
      {/* Dynamic graphic structures */}
      <div className="absolute left-0 top-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl -ml-20 -mt-20"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl -mr-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-extrabold text-brand-primary uppercase tracking-widest font-mono">Instant Booking</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
            Schedule Your Dental Appointment
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base leading-relaxed">
            Fill out the digital appointment request below. Our clinic staff will review Dr. Ankit J Desai's operations diary and verify your slot.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-accent rounded mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left panel: Info checklist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <h3 className="font-display font-extrabold text-slate-900 text-lg">
                What Happens Next?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-brand-primary flex-shrink-0 border border-sky-100/50">
                    <span className="text-xs font-mono font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-sm">Submit Form Securely</h4>
                    <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                      Your details are registered securely. No third-party exposure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-brand-primary flex-shrink-0 border border-sky-100/50">
                    <span className="text-xs font-mono font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-sm">Staff Verification Call</h4>
                    <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                      Our receptionist calling from <strong className="text-slate-800">+91 70695 37131</strong> will contact you within 2 business hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-brand-accent flex-shrink-0 border border-teal-100/50">
                    <span className="text-xs font-mono font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-sm">Receive Confirmation SMS</h4>
                    <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                      You will receive direct text coordinates outlining the session date, time, and parking details.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100/50 flex items-center space-x-3 text-teal-800">
                <ClipboardCheck className="w-5 h-5 flex-shrink-0 text-brand-accent" />
                <span className="text-xs font-semibold leading-relaxed">
                  Real-time slot locks. Dr. Desai's scheduling team is online.
                </span>
              </div>
            </div>

            {/* List of current booked appointments in this session */}
            {savedBookings.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4.5">
                  <h4 className="font-display font-extrabold text-slate-900 text-sm">Your Recent Reservations:</h4>
                  <span className="text-[10px] font-bold font-mono tracking-wider bg-sky-50 text-brand-primary px-2 py-0.5 rounded-full">
                    {savedBookings.length} Saved
                  </span>
                </div>
                <div className="space-y-3 max-h-[160px] overflow-y-auto pr-1">
                  {savedBookings.map((b, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-800 leading-none">{b.fullName}</div>
                        <div className="text-[10px] font-mono text-slate-400 mt-1">{b.treatment} • {b.preferredDate}</div>
                      </div>
                      <span className="text-[10px] items-center space-x-1 font-bold text-brand-accent bg-emerald-50 px-2 py-1 rounded-full flex">
                        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-ping mr-1"></span>
                        <span>Pending Verification</span>
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right column: Form body or success screens */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-9 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                /* The Booking Form */
                <motion.form
                  key="bookingForm"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <p className="text-xs text-slate-400 font-mono text-right select-none">* All details verified secure</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5 text-brand-primary" />
                        <span>Full Patient Name *</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 hover:bg-slate-50/50 focus:bg-white text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? "border-red-300 focus:ring-red-100 bg-red-50/10 text-red-900"
                            : "border-slate-200 focus:ring-sky-100 focus:border-brand-primary text-slate-800"
                        }`}
                      />
                      {errors.fullName && (
                        <div className="flex items-center space-x-1 text-red-500 text-[11px] font-medium mt-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.fullName}</span>
                        </div>
                      )}
                    </div>

                    {/* Mobile Number input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center space-x-1.5">
                        <Phone className="w-3.5 h-3.5 text-brand-primary" />
                        <span>Mobile Number *</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 70123 45678"
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 hover:bg-slate-50/50 focus:bg-white text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.mobile
                            ? "border-red-300 focus:ring-red-100 bg-red-50/10 text-red-900"
                            : "border-slate-200 focus:ring-sky-100 focus:border-brand-primary text-slate-800"
                        }`}
                      />
                      {errors.mobile && (
                        <div className="flex items-center space-x-1 text-red-500 text-[11px] font-medium mt-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.mobile}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center space-x-1.5">
                        <Mail className="w-3.5 h-3.5 text-brand-primary" />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. rahul@gmail.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 hover:bg-slate-50/50 focus:bg-white text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? "border-red-300 focus:ring-red-100 bg-red-50/10 text-red-900"
                            : "border-slate-200 focus:ring-sky-100 focus:border-brand-primary text-slate-800"
                        }`}
                      />
                      {errors.email && (
                        <div className="flex items-center space-x-1 text-red-500 text-[11px] font-medium mt-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                        <span>Preferred Date *</span>
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 hover:bg-slate-50/50 focus:bg-white text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.preferredDate
                            ? "border-red-300 focus:ring-red-100 bg-red-50/10 text-red-900"
                            : "border-slate-200 focus:ring-sky-100 focus:border-brand-primary text-slate-800"
                        }`}
                      />
                      {errors.preferredDate && (
                        <div className="flex items-center space-x-1 text-red-500 text-[11px] font-medium mt-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{errors.preferredDate}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Treatment Needed dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 flex items-center space-x-1.5">
                      <FileText className="w-3.5 h-3.5 text-brand-primary" />
                      <span>Treatment Needed *</span>
                    </label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 hover:bg-slate-50/50 focus:bg-white text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.treatment
                          ? "border-red-300 focus:ring-red-100 bg-red-50/10 text-red-900"
                          : "border-slate-200 focus:ring-sky-100 focus:border-brand-primary text-slate-800"
                      }`}
                    >
                      {treatmentOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.treatment && (
                      <div className="flex items-center space-x-1 text-red-500 text-[11px] font-medium mt-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.treatment}</span>
                      </div>
                    )}
                  </div>

                  {/* Message input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Message / Symptoms (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="e.g. Tooth sensitivity when drinking cold water, wisdom tooth discomfort..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-50/50 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-brand-primary text-slate-800 transition-all font-sans"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-13 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-display font-bold text-sm rounded-xl flex items-center justify-center space-x-2.5 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/45 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 transition-all duration-300 cursor-pointer text-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Locking Slot...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5" />
                        <span>Register Appointment Booking</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Success Screen */
                <motion.div
                  key="successScreen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-8 text-center flex flex-col items-center justify-center space-y-6"
                >
                  {/* Big CheckCircle with Sparkles */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl scale-125"></div>
                    <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center text-white relative shadow-lg shadow-teal-500/30">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>
                    {/* Sparkle details */}
                    <div className="absolute -top-1 -right-1 text-teal-400">
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
                      Booking Request Submitted!
                    </h3>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto">
                      Thank you <strong className="text-slate-800">{formData.fullName}</strong>. Dr. Ankit J Desai's clinic reception team has registered your request.
                    </p>
                  </div>

                  {/* Booking Receipt Summary Card */}
                  <div className="p-5.5 bg-sky-50/50 rounded-2xl border border-sky-100 text-left max-w-md w-full space-y-3">
                    <div className="text-[10px] font-extrabold font-mono text-brand-primary uppercase tracking-widest leading-none border-b border-sky-100 pb-2">
                      Official Booking Draft
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-medium">
                      <div>
                        <span className="text-slate-400 block font-mono uppercase text-[9px]">Mobile Code</span>
                        <span className="text-slate-800">{formData.mobile}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-mono uppercase text-[9px]">Enrolled Email</span>
                        <span className="text-slate-800 truncate block">{formData.email}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-mono uppercase text-[9px]">Treatment Needed</span>
                        <span className="text-brand-secondary font-bold">{formData.treatment}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-mono uppercase text-[9px]">Date Reserved</span>
                        <span className="text-slate-800 font-mono font-bold">{formData.preferredDate}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 italic max-w-sm">
                    Our verified staff will phone you shortly at {formData.mobile} to confirm the precise hour of your appointment.
                  </p>

                  <div className="flex space-x-3 pt-2">
                    <button
                      onClick={resetForm}
                      className="cursor-pointer px-6 py-2.5 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all"
                    >
                      Book Another slot
                    </button>
                    <a
                      href="tel:+917069537131"
                      className="px-6 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center space-x-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call to Fast-Track</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
