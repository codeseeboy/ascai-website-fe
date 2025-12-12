import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FacultySection } from "@/components/faculty-section"

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* Vortex 2025 Live Marquee Banner */}
      <a
        href="/vortex/2025"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 border-y-4 border-orange-400 py-6 hover:from-orange-700 hover:via-amber-600 hover:to-orange-700 transition-all duration-300 cursor-pointer"
      >
        {/* Animated marquee */}
        <div className="flex">
          <div className="flex whitespace-nowrap animate-marquee-faster">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex shrink-0">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className="flex items-center gap-4 px-8 text-2xl md:text-3xl font-orbitron font-black text-black shrink-0">
                    CLICK HERE — VORTEX.AI 2025 REGISTRATIONS LIVE — CLICK/TAP TO REGISTER NOW
                    <span className="text-xl md:text-2xl font-rajdhani font-bold text-orange-900">
                      • 18–19 DEC • GAMING • TECH • INNOVATION • LIMITED SLOTS • ENTER NOW →
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </a>
      
      <AboutSection />
      <FacultySection />
    </div>
  )
}
