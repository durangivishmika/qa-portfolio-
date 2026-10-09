"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./AppleVideoSection.css";

export default function AppleVideoSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Scroll animation optimized for fluid Apple-style reveal
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0.1, 0.5], [0.9, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0.08, 0.3], [0, 1]);
  const videoY = useTransform(scrollYProgress, [0.1, 0.5], [60, 0]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={sectionRef} className="psec-section apple-pro-section">
      <div className="apple-pro-container">
        
        {/* Header Content */}
        <div className="apple-pro-header-wrapper">
          <motion.span
            className="apple-pro-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Immersive Web Design
          </motion.span>

          <motion.h2
            className="apple-pro-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Every Detail. <span className="apple-pro-gradient-text">Engineered in Motion.</span>
          </motion.h2>

          <motion.p
            className="apple-pro-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Designed and developed a cinematic 3D website for JBL using Next.js, Three.js, and high-performance motion interactions to showcase the product with precision and elegance.
          </motion.p>
        </div>

        {/* Video Frame Card with Apple Pro Styling */}
        <motion.div
          className="apple-pro-video-wrapper"
          style={{
            scale: videoScale,
            opacity: videoOpacity,
            y: videoY,
          }}
        >
          {/* Floating Glass Control Button */}
          <motion.button
            className="apple-pro-action-btn"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {isPlaying ? (
              <Pause className="apple-pro-icon" strokeWidth={2.2} />
            ) : (
              <Play className="apple-pro-icon play-offset" strokeWidth={2.2} />
            )}
          </motion.button>

          <video
            ref={videoRef}
            className="apple-pro-video-element"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/Images/3D-Website.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Live Demo Action */}
        <motion.div
          className="apple-pro-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://jbl-murex.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-pro-demo-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>See Live Demo</span>
            <ExternalLink className="apple-pro-demo-icon" strokeWidth={2.2} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}