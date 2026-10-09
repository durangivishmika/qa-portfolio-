import dynamic from "next/dynamic";
import RebuildLankaDetails from "@/components/RebuildLankaDetails/RebuildLankaDetails";
import Navbar from "@/components/Navbar/Navbar";

const WhatsAppWidget = dynamic(
  () => import("@/components/WhatsAppWidget/WhatsAppWidget"),
  { ssr: true }
);

export default function RebuildLankaDetailsPage() {
  return (
    <>
      <Navbar />
      <RebuildLankaDetails />
      <WhatsAppWidget />
    </>
  );
}