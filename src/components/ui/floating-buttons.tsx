"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function FloatingButtons() {
  const [isHovered, setIsHovered] = useState(false);

  const instagramUrl = "https://www.instagram.com/tornadoallydev/";

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Discord Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-black hover:bg-black flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 border-2 border-gray-600"
            aria-label="Instagram contact"
          >
            <Image 
              src="/icons/instagram.svg" 
              alt="Instagram" 
              width={28} 
              height={28}
            />
          </a>
          
          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-16 top-1/2 -translate-y-1/2 bg-black border border-gray-600 rounded-lg px-3 py-2 whitespace-nowrap shadow-xl"
              >
                <p className="text-sm font-medium text-white">Instagram</p>
                <p className="text-xs text-gray-400">Get a Free Consultation</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
