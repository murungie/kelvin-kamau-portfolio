import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef, useState } from "react";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [state, handleSubmit] = useForm("xykdwjgj");
  const formRef = useRef(null);
  const [showSuccess, setShowSuccess] = useState(false);

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
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#0f0f14] via-black to-[#0f0f14]">

      {/* Card */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        style={{ transform: "translateZ(0)" }}
        className="w-full max-w-2xl bg-[#111217] border border-white/10 rounded-3xl p-10 shadow-[0_0_60px_rgba(255,0,0,0.05)]"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-semibold text-center mb-3"
        >
          Let’s <span className="text-red-500">Connect</span>
        </motion.h2>

        <p className="text-white/60 text-center mb-10">
          Have a project in mind? Let’s build something powerful together.
        </p>

        {/* Success */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
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
          {/* Hidden Local Time Field */}
          <input
            type="hidden"
            name="submitted_at"
            value={new Date().toLocaleString()}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Input name="name" type="text" placeholder="Full Name" required />
            <Input name="email" type="email" placeholder="Email Address" required />
          </div>

          <ValidationError field="email" errors={state.errors} />

          <Input name="subject" type="text" placeholder="Subject" required />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-5 py-4 rounded-xl bg-[#1a1b22] border border-white/10 focus:border-red-500 focus:outline-none transition-all text-white resize-none"
          />

          <ValidationError field="message" errors={state.errors} />

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
            type="submit"
            disabled={state.submitting}
            className="relative mt-4 px-8 py-4 rounded-full bg-red-500 text-black font-semibold flex items-center justify-center gap-3 transition-all duration-300"
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

const Input = (props) => (
  <input
    {...props}
    className="w-full px-5 py-4 rounded-xl bg-[#1a1b22] border border-white/10 focus:border-red-500 focus:outline-none transition-all text-white"
  />
);

export default Contact;
