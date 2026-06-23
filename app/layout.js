
import Navbar from "@/components/Navbar";
import WhatsAppBot from "@/components/WhatsAppBot";
import "./globals.css";

export const metadata = {
  title: "iDesign Studio",
  description: "Next-Gen Development Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <WhatsAppBot />
      </body>
    </html>
  );
}
