import dynamic from "next/dynamic";
import DevicePulseDetails from "@/components/DevicePulseDetails/DevicePulseDetails";
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
      <DevicePulseDetails />
    </>
  );
}