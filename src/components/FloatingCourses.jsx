import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import whatsappIcon from "../assets/whatsapp.svg";

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center">
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="mr-3 bg-slate-900 text-white px-4 py-2 rounded-xl shadow-lg pointer-events-none relative"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.2 }}
          >
          <h4 className="text-sm font-semibold text-white">
  Chat with us
</h4>

<p className="text-xs text-white">
  We reply as soon as possible.
</p>

            <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-900 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/740040073"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* WhatsApp Icon */}
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-12 h-12 object-contain"
        />

        {/* Pulse Animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-green-500"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;