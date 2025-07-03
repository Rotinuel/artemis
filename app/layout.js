import { Baumans, EB_Garamond, Outfit, Ovo } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import CustomCursor from "./components/CustomCursor";


const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400"],
});

const baumans = Baumans({
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
      <body className={`${baumans.className} ${garamond.className} antialiased`}>
      <style>
          {`
            @keyframes gradientMove {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
        <CustomCursor />
        <ClientLayout>
        {children}
        </ClientLayout>
      </body>
    </html>
  );
}
