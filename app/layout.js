import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import CustomCursor from "./components/CustomCursor";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Artemis Atelier ltd",
  description: "where vision meets structure",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${outfit.className} ${ovo.className} antialiased`}>
        <CustomCursor />
        <ClientLayout>
        {children}
        </ClientLayout>
      </body>
    </html>
  );
}
