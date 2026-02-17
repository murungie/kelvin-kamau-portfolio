import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef, useState } from "react";

import { fadeIn } from "../../variants";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwvnkadd");
  const formRef = useRef(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Clear form + show animated success
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
      setShowSuccess(true);

      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary/40 via-black to-primary/20 flex items-center justify-center px-4">
      
      {/* Glass Card */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full max-w-2xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-semibold text-center mb-3"
        >
          Let’s <span className="text-accent">Connect</span>
        </motion.h2>

        <p className="text-white/60 text-center mb-10">
          Have a project in mind? Let’s build something powerful together.
        </p>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-400/30 text-green-400 text-center"
            >
              ✅ Message sent successfully. I’ll get back to you shortly.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col gap-6"
          autoComplete="off"
        >
          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <FloatingInput name="name" type="text" label="Full Name" required />
            <FloatingInput name="email" type="email" label="Email Address" required />
          </div>

          <ValidationError field="email" errors={state.errors} />

          {/* Subject */}
          <FloatingInput name="subject" type="text" label="Subject" required />

          {/* Message */}
          <FloatingTextarea name="message" label="Your Message" required />

          <ValidationError field="message" errors={state.errors} />

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            disabled={state.submitting}
            className="relative overflow-hidden mt-4 px-8 py-4 rounded-full bg-accent text-black font-semibold flex items-center justify-center gap-3 transition-all duration-300"
          >
            {state.submitting ? (
              <motion.div
                className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            ) : (
              <>
                Send Message
                <BsArrowRight />
              </>
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

/* ---------- Floating Input Component ---------- */

const FloatingInput = ({ label, ...props }) => {
  return (
    <div className="relative">
      <input
        {...props}
        placeholder=" "
        className="peer w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-all text-white"
      />
      <label className="absolute left-4 top-4 text-white/50 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm bg-black px-1 rounded">
        {label}
      </label>
    </div>
  );
};

const FloatingTextarea = ({ label, ...props }) => {
  return (
    <div className="relative">
      <textarea
        {...props}
        rows="5"
        placeholder=" "
        className="peer w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-all text-white resize-none"
      />
      <label className="absolute left-4 top-4 text-white/50 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-accent peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm bg-black px-1 rounded">
        {label}
      </label>
    </div>
  );
};

export default Contact;
