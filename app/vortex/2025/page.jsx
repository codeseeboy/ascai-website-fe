"use client"

import { ExternalLink, Sparkles, Zap, Calendar, Trophy, Users } from "lucide-react"

export default function Vortex2025Page() {
  return (
    <div className="pt-16">
      {/* Hero Section with Big Announcement */}
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden flex items-center justify-center">
        {/* Cyberpunk Background Effects */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Glowing orbs */}
          <div
            className="absolute -left-32 -top-24 w-96 h-96 rounded-full"
            style={{ background: "rgba(249,115,22,0.15)", filter: "blur(100px)", transform: "scale(1.2)" }}
          />
          <div
            className="absolute -right-36 top-1/2 w-80 h-80 rounded-full"
            style={{ background: "rgba(250,204,21,0.12)", filter: "blur(90px)", transform: "scale(1.1)" }}
          />
          <div
            className="absolute left-1/2 -bottom-32 w-96 h-96 rounded-full"
            style={{ background: "rgba(59,130,246,0.1)", filter: "blur(95px)", transform: "scale(1.15)" }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0" style={{ opacity: 0.04 }}>
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(249,115,22,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.06) 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          {/* Gradient masks */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black via-black/80 to-transparent" />
          </div>

          {/* Animated scanlines */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.1)_2px,rgba(255,255,255,0.1)_4px)]" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-orange-500 text-orange-400 text-sm font-mono bg-orange-500/10 backdrop-blur-sm animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>REGISTRATIONS LIVE NOW</span>
              <Sparkles className="w-4 h-4" />
            </div>

            {/* Main Heading - HUGE */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 leading-tight tracking-tight">
                VORTEX.AI
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-orbitron font-black text-white leading-tight">
                2025
              </h2>
              <p className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold text-orange-400 animate-pulse">
                IS HERE
              </p>
            </div>

            {/* Event Date */}
            <div className="pt-4">
              <p className="text-2xl md:text-3xl font-rajdhani font-bold text-gray-200">
                18–19 December 2025
              </p>
            </div>

            {/* CTA Button - RIGHT AFTER IS HERE */}
            <div className="pt-12">
              <a
                href="https://vortex-ai2025.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black font-orbitron font-black text-2xl md:text-3xl border-4 border-orange-400 shadow-[0_0_50px_rgba(249,115,22,0.6)] hover:shadow-[0_0_80px_rgba(249,115,22,0.9)] transition-all duration-300 transform hover:scale-110 animate-pulse"
              >
                <span>ENTER VORTEX 2025</span>
                <ExternalLink className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
              <p className="mt-6 text-base md:text-lg text-gray-400 font-mono">
                {">> CLICK TO VISIT THE OFFICIAL VORTEX.AI 2025 WEBSITE"}
              </p>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto space-y-4 pt-10">
              <p className="text-lg md:text-xl text-gray-300 font-rajdhani leading-relaxed">
                The biggest gaming + tech innovation festival of ASCAI returns on 18–19 December 2025.
              </p>
              <p className="text-lg md:text-xl text-gray-400 font-rajdhani leading-relaxed">
                Registrations are now open! Secure your spot and be part of the ultimate competition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What is VORTEX Section */}
      <div className="min-h-[50vh] bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8 text-orange-400">
              What is VORTEX.AI?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-rajdhani leading-relaxed">
              Vortex AI is ASCAI's flagship annual event, bringing together competitive gaming, tech challenges, and innovation under one roof.
            </p>
          </div>
        </div>
      </div>

      {/* Highlights Section removed per request */}
    </div>
  )
}
