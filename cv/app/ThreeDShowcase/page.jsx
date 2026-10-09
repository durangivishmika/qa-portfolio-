import ThreeDShowcase from '@/components/ThreeDShowcase/ThreeDShowcase';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget/WhatsAppWidget';

export default function Page() {
  return (
    <div className="apple-showcase-container">
        <Navbar />
      <ThreeDShowcase />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}