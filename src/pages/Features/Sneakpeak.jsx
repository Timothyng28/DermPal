import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Sneakpeak.css";

const words = ["H3r3's a sn3ak pe3k_", "H€re's a sn£ak pee£__", "Here's a sneak peek"];

export default function SneakPeek({ image }) {
  const [glitchText, setGlitchText] = useState("Here's a sneak peek");

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(words[Math.floor(Math.random() * words.length)]);
    }, 500); // Change every 500ms for a flickering effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh', 
        width: '100vw',
        backgroundSize: 'cover', // Keeps aspect ratio, no stretch
        backgroundColor: 'grey', // Fills empty space with black
        allignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      {/* Glitching Title - FORCED FULL WIDTH CONTAINER */}
      <motion.h1
        className="text-4xl md:text-6xl font-mono text-white text-center z-10 glitch"
        style={{ color: 'white', fontFamily: "'VT323', monospace"}}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.8, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {glitchText}
        <span className="animate-blink">_</span>
      </motion.h1>
      </div>
    </div>
  );
}
