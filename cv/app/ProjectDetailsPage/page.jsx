"use client";

import dynamic from "next/dynamic";
import ProjectDetailsPage from "@/components/ProjectDetailsPage/ProjectDetailsPage";
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
        <ProjectDetailsPage onBack={() => window.history.back()} />
      </main>

      <WhatsAppWidget />
    </>
  );
};

export default Page;