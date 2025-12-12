// Import Google Fonts from Next.js
import { Orbitron, Share_Tech_Mono, Rajdhani } from "next/font/google";

// Import global styles
import "./globals.css";

// Import shared layout components
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

// Configure Orbitron font
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
});

// Configure Share Tech Mono font
const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-share-tech",
  weight: ["400"],
});

// Configure Rajdhani font
const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
});

// Export global metadata (SEO)
export const metadata = {
  title: "ASCAI - Association of Students for Computing Artificial Intelligence",
  description:
    "ASCAI - Association of Students for Computing Artificial Intelligence at SJCEM.",
};

/**
 * Root layout wrapper for all pages.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 * @returns {JSX.Element} - Root HTML structure
 */
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${shareTechMono.variable} ${rajdhani.variable}`}
    >
      <body className="bg-black text-white overflow-x-hidden">
        
        {/* Navigation bar */}
        <Navigation />

        {/* Main content area */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
