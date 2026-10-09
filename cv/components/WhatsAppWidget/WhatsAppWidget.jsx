"use client";
import React from "react";
import "./WhatsAppWidget.css";

const WhatsAppWidget = () => {
  // Country code + number without spaces, '+', or dashes
  const phoneNumber = "94763659342";
  const message = encodeURIComponent("Hi Danushka, I came across your portfolio and would like to discuss a project with you.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-floating-container"
      aria-label="Chat on WhatsApp"
    >
      {/* Animated Text Bubble */}
      <div className="wa-text-bubble">
        Ready to get started? Let’s chat
      </div>

      {/* WhatsApp Circular Button with Pulse Effect */}
      <div className="wa-icon-button">
        <img src="/Images/whatsapp new.png" alt="WhatsApp" />
      </div>
    </a>
  );
};

export default WhatsAppWidget;