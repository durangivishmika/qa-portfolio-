"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export default function CustomCursor({ userName = "User" }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (!desktop) {
        document.body.style.cursor = "auto";
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    if (window.innerWidth < 768) return;

    // HIDES the native laptop/desktop system cursor completely
    document.body.style.cursor = "none";

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      // Restores native cursor back if component unmounts
      document.body.style.cursor = "auto";
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isDesktop || !isVisible) return null;

  return (
    <motion.div
      style={styles.wrapper}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 35,
        mass: 0.1,
      }}
    >
      <div style={styles.content}>
        {/* Lucide Mouse Pointer Arrow Icon */}
        <MousePointer2 style={styles.arrow} />

        {/* User Name Tag Badge */}
        <div style={styles.tag}>{userName}</div>
      </div>
    </motion.div>
  );
}

// Component-based CSS styles object
const styles = {
  wrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 9999,
    willChange: "transform",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    transform: "translate(-2px, -2px)",
  },
  arrow: {
    width: "22px",
    height: "22px",
    color: "#3b82f6", // Blue outline
    fill: "#3b82f6", // Solid blue fill
    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
  },
  tag: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    fontFamily: "var(--font-roboto), sans-serif",
    fontSize: "11px",
    fontWeight: 500,
    padding: "4px 8px",
    borderRadius: "24px",
    whiteSpace: "nowrap",
    marginTop: "2px",
    marginLeft: "12px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
  },
};