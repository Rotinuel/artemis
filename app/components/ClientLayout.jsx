import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsappButton";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <WhatsAppButton />
      <Footer />
    </>
  );
}
