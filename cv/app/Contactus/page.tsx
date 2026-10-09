import Contactus from '@/components/Contactus/Contactus'
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget/WhatsAppWidget';

export default function ContactusPage() {
  return (
    <div>
      <Navbar />
      <Contactus />
        <Footer />
        <WhatsAppWidget />
    </div>
  )
}