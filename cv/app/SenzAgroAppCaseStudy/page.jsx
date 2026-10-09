"use client";

import dynamic from "next/dynamic";
import SenzAgroAppCaseStudy from "@/components/SenzAgroAppCaseStudy/SenzAgroAppCaseStudy";
import Navbar from "@/components/Navbar/Navbar";

const WhatsAppWidget = dynamic(
  () => import("@/components/WhatsAppWidget/WhatsAppWidget"),
  { ssr: true }
);

const Page = () => {
  return (
    <>
      <Navbar />
      <main>
        <SenzAgroAppCaseStudy />
      </main>

      <WhatsAppWidget />
    </>
  );
};

export default Page;