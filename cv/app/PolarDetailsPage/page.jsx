import dynamic from "next/dynamic";
import PolarDetails from "@/components/PolarDetails/PolarDetails";
import Navbar from "@/components/Navbar/Navbar";

const WhatsAppWidget = dynamic(
  () => import("@/components/WhatsAppWidget/WhatsAppWidget"),
  { ssr: true }
);

export default function PolarDetailsPage() {
  return (
    <>
      <Navbar />
      <WhatsAppWidget />
      <PolarDetails />
    </>
  );
}