
import Navbar from "@/components/Navbar";
import WhatsAppBot from "@/components/WhatsAppBot";
import "./globals.css";

export const metadata = {
  title: "iDesign Studio | Next-Gen Web Development & Digital Design Agency",
  description: "iDesign Studio delivers high-performance, premium web applications, bespoke design systems, and digital marketing strategies tailored for modern brands.",
  keywords: [
    "iDesign Studio",
    "web development",
    "digital design",
    "software engineering",
    "branding",
    "agency"
  ],
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
