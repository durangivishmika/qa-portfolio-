import dynamic from "next/dynamic";
import CarlosEmbershilsDetails from "@/components/CarlosEmbershilsDetails/CarlosEmbershilsDetails";
import Navbar from "@/components/Navbar/Navbar";

const WhatsAppWidget = dynamic(
  () => import("@/components/WhatsAppWidget/WhatsAppWidget"),
  { ssr: true }
);

export default function Page() {
  return (
    <>
      <Navbar />
      <WhatsAppWidget />
      <CarlosEmbershilsDetails />
    </>
  );
}
