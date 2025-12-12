"use client"

// ==================== Imports ====================
// import React core hooks
import { useEffect, useState, useMemo, useCallback } from "react"

// import Next.js Image component
import Image from "next/image"

// for icon import react-icons
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

// ==================== Component ====================

/**
 * HeroSection component
 *
 * Displays a hero section with animated binary grids,
 * subtle grid overlay, logo, titles, and system status.
 * Includes both mobile and desktop layouts.
 *
 * @returns {JSX.Element} Rendered Hero Section component
 */
export function HeroSection() {
  // ==================== State ====================
  // Stores horizontal binary lines
  const [horizontalBinary, setHorizontalBinary] = useState([])

  // Stores vertical binary lines
  const [verticalBinary, setVerticalBinary] = useState([])

  // ==================== Functions ====================

  /**
   * Generates horizontal binary strings and updates state.
   * Uses 25 lines, each 120 characters long.
   */
  const generateHorizontalBinary = useCallback(() => {
    const lines = []
    for (let i = 0; i < 25; i++) {
      lines.push(
        Array.from({ length: 120 }, () => (Math.random() > 0.5 ? "1" : "0")).join("")
      )
    }
    setHorizontalBinary(lines)
  }, [])

  /**
   * Generates vertical binary strings and updates state.
   * Uses 80 lines, each 30 characters long.
   */
  const generateVerticalBinary = useCallback(() => {
    const lines = []
    for (let i = 0; i < 80; i++) {
      lines.push(
        Array.from({ length: 30 }, () => (Math.random() > 0.5 ? "1" : "0")).join("")
      )
    }
    setVerticalBinary(lines)
  }, [])

  // ==================== Effects ====================

  // On mount: generate initial binary and refresh every 8s
  useEffect(() => {
    generateHorizontalBinary()
    generateVerticalBinary()

    const interval = setInterval(() => {
      generateHorizontalBinary()
      generateVerticalBinary()
    }, 8000)

    return () => clearInterval(interval)
  }, [generateHorizontalBinary, generateVerticalBinary])

  // ==================== Memoized Data ====================

  // Static list of symbols for UI
  const symbols = useMemo(
    () => [
      // { icon: <FaGithub />, link: "https://github.com/ascai-aiml" },
      { icon: <FaYoutube />, link: "https://youtube.com/@ascai17?si=2UwWbVACfhUblNaM" },
      { icon: <FaInstagram />, link: "https://www.instagram.com/ascai_sjcem?igsh=MXQxZjVubTBqYTZiNQ==" },
      { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/ascai-sjcem/" },
    ],
    []
  );

  // ==================== Render ====================
  return (
    <>
      {/* Vortex 2025 Live Marquee Banner - Top */}
      <a
        href="/vortex/2025"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 border-b-4 border-orange-400 py-4 mt-16 hover:from-orange-700 hover:via-amber-600 hover:to-orange-700 transition-all duration-300 cursor-pointer"
      >
        <div className="flex">
          <div className="flex whitespace-nowrap animate-marquee-faster">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex shrink-0">
                {[...Array(8)].map((_, i) => (
                  <span key={i} className="flex items-center gap-4 px-8 text-xl md:text-2xl font-orbitron font-black text-black shrink-0">
                    CLICK HERE — VORTEX.AI 2025 REGISTRATIONS LIVE — CLICK/TAP TO REGISTER NOW
                    <span className="text-lg md:text-xl font-rajdhani font-bold text-orange-900">
                      • 18–19 DEC • GAMING • TECH • INNOVATION • LIMITED SLOTS • ENTER NOW →
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </a>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* ===== Binary Grid Background ===== */}
      <div className="absolute inset-0 opacity-15">
        {/* Horizontal Binary Lines */}
        <div className="absolute inset-0">
          <div className="font-mono text-xs text-green-400 leading-loose p-8">
            {horizontalBinary.map((line, index) => (
              <div
                key={`h-${index}`}
                className="whitespace-nowrap blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Binary Lines */}
        <div className="absolute inset-0 transform rotate-90 origin-center">
          <div className="font-mono text-xs text-blue-400 leading-loose p-8">
            {verticalBinary.map((line, index) => (
              <div
                key={`v-${index}`}
                className="whitespace-nowrap blur-sm"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Gradient masks to blur edges */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top fade */}
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          {/* Left fade */}
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black via-black/60 to-transparent"></div>
          {/* Right fade - enhanced for middle area */}
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent"></div>
          {/* Additional right middle fade for better coverage */}
          <div className="absolute top-1/4 right-0 w-24 h-1/2 bg-gradient-to-l from-black via-black/70 to-transparent"></div>
        </div>
      </div>

      {/* ===== Grid Overlay ===== */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* ===== Content Container ===== */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-6xl">
        {/* --- Mobile Layout --- */}
        <div className="md:hidden text-center space-y-8 py-12 pt-15">
          {/* Logo */}
          <div className="flex justify-center mb-8 mt-8">
            <div className="relative">
              <div className="text-gray-500 text-xs font-mono absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-60">
                {"[ACTIVE]"}
              </div>

              <div className="w-64 h-64 relative">
                {/* Outer rotating ring with dots */}
                <div className="absolute inset-0 border border-orange-500/30 rounded-full animate-spin-slow">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-orange-500/60 rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-125px)`,
                      }}
                    />
                  ))}
                </div>

                {/* Logo Circle with advanced hacker effects */}
                <div className="absolute inset-4 bg-gray-900/20 rounded-full border border-orange-500/20 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                  {/* ASCAI Logo - Mobile sized */}
                  <div className="relative flex items-center justify-center">
                    <Image 
                      src="/ascai-logo.png" 
                      alt="ASCAI Logo" 
                      width={200} 
                      height={200} 
                      className="opacity-95" 
                    />
                    
                    {/* Matrix-style cascading data */}
                    <div className="absolute inset-0 overflow-hidden rounded-full opacity-15">
                      <div className="absolute top-0 left-1/6 w-0.5 h-full bg-gradient-to-b from-green-400 to-transparent animate-matrix-stream-1"></div>
                      <div className="absolute top-0 left-2/6 w-0.5 h-full bg-gradient-to-b from-orange-500 to-transparent animate-matrix-stream-2"></div>
                      <div className="absolute top-0 left-3/6 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent animate-matrix-stream-3"></div>
                      <div className="absolute top-0 left-4/6 w-0.5 h-full bg-gradient-to-b from-purple-400 to-transparent animate-matrix-stream-4"></div>
                      <div className="absolute top-0 left-5/6 w-0.5 h-full bg-gradient-to-b from-red-400 to-transparent animate-matrix-stream-5"></div>
                    </div>
                    
                    {/* Radar sweep effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-full">
                      <div className="absolute top-1/2 left-1/2 w-1 h-1/2 bg-gradient-to-t from-orange-500/80 to-transparent origin-bottom animate-radar-sweep transform -translate-x-0.5 -translate-y-full"></div>
                    </div>
                    
                    {/* Concentric rings */}
                    <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-ping-slow"></div>
                    <div className="absolute inset-6 rounded-full border border-green-400/20 animate-ping-slower"></div>
                    
                    {/* Corner targeting brackets */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-orange-500/60 animate-pulse"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-orange-500/60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-orange-500/60 animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-orange-500/60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    
                    {/* Data flow indicators */}
                    <div className="absolute top-1/2 left-0 w-3 h-0.5 bg-orange-500/60 animate-data-flow-left"></div>
                    <div className="absolute top-1/2 right-0 w-3 h-0.5 bg-orange-500/60 animate-data-flow-right"></div>
                    <div className="absolute top-0 left-1/2 w-0.5 h-3 bg-orange-500/60 animate-data-flow-up"></div>
                    <div className="absolute bottom-0 left-1/2 w-0.5 h-3 bg-orange-500/60 animate-data-flow-down"></div>
                    
                    {/* Hexagonal overlay pattern (subtle) */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="hexagon-pattern w-full h-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-gray-500 text-xs font-mono absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-60">
                {"<SYSTEM/>"}
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="inline-block px-4 py-2 border border-orange-500/50 text-orange-400 text-sm font-mono bg-black/80 backdrop-blur-sm">
            {"> SYSTEM ACTIVE"}
          </div>

          {/* Titles */}
          <div className="space-y-4">
            <h1 className="text-5xl font-orbitron font-black text-white">
              ASC
              <span className="text-orange-500 glitch-ai-minimal" data-text="AI">
                AI
              </span>
            </h1>
            <h2 className="text-base text-orange-400 font-rajdhani font-medium tracking-widest opacity-90">
              ASSOCIATION OF STUDENTS FOR
            </h2>
            <h2 className="text-base text-orange-400 font-rajdhani font-medium tracking-widest opacity-90">
              COMPUTING ARTIFICIAL INTELLIGENCE
            </h2>
          </div>

          {/* Symbols */}
          <div className="flex justify-center space-x-4 pb-8">
            {symbols.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-orange-500/50 flex items-center justify-center text-orange-400 hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-200"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* --- Desktop Layout --- */}
        <div className="hidden md:grid grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 border border-orange-500/50 text-orange-400 text-sm font-mono bg-black/60 backdrop-blur-sm">
              {"> SYSTEM ACTIVE"}
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-orbitron font-black text-white leading-tight">
                ASC
                <span className="text-orange-500 glitch-ai-minimal" data-text="AI">
                  AI
                </span>
              </h1>
              <h2 className="text-lg lg:text-xl text-orange-400 font-rajdhani font-medium tracking-widest opacity-90">
                ASSOCIATION OF STUDENTS FOR
              </h2>
              <h2 className="text-lg lg:text-xl text-orange-400 font-rajdhani font-medium tracking-widest opacity-90">
                COMPUTING ARTIFICIAL INTELLIGENCE
              </h2>
            </div>

            <div className="flex space-x-4">
              {symbols.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-orange-500/50 flex items-center justify-center text-orange-400 hover:bg-orange-500/10 hover:border-orange-500 transition-all duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Logo Section */}
          <div className="flex items-center justify-end lg:justify-center xl:justify-end">
            <div className="relative lg:ml-8 xl:ml-16">
              <div className="text-gray-500 text-xs font-mono absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-60">
                {"[ACTIVE]"}
              </div>

              <div className="w-72 h-72 relative">
                {/* Outer rotating ring with dots */}
                <div className="absolute inset-0 border border-orange-500/30 rounded-full animate-spin-slow">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-orange-500/60 rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-135px)`,
                      }}
                    />
                  ))}
                </div>

                {/* Logo Circle with perfect centering */}
                <div className="absolute inset-6 bg-gray-900/20 rounded-full border border-orange-500/20 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                  {/* ASCAI Logo - Perfectly centered and sized */}
                  <div className="relative flex items-center justify-center">
                    <Image 
                      src="/ascai-logo.png" 
                      alt="ASCAI Logo" 
                      width={240} 
                      height={240} 
                      className="opacity-95" 
                    />
                    
                    {/* Matrix-style cascading data */}
                    <div className="absolute inset-0 overflow-hidden rounded-full opacity-15">
                      <div className="absolute top-0 left-1/6 w-0.5 h-full bg-gradient-to-b from-green-400 to-transparent animate-matrix-stream-1"></div>
                      <div className="absolute top-0 left-2/6 w-0.5 h-full bg-gradient-to-b from-orange-500 to-transparent animate-matrix-stream-2"></div>
                      <div className="absolute top-0 left-3/6 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent animate-matrix-stream-3"></div>
                      <div className="absolute top-0 left-4/6 w-0.5 h-full bg-gradient-to-b from-purple-400 to-transparent animate-matrix-stream-4"></div>
                      <div className="absolute top-0 left-5/6 w-0.5 h-full bg-gradient-to-b from-red-400 to-transparent animate-matrix-stream-5"></div>
                    </div>
                    
                    {/* Radar sweep effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-full">
                      <div className="absolute top-1/2 left-1/2 w-1 h-1/2 bg-gradient-to-t from-orange-500/80 to-transparent origin-bottom animate-radar-sweep transform -translate-x-0.5 -translate-y-full"></div>
                    </div>
                    
                    {/* Concentric rings */}
                    <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-ping-slow"></div>
                    <div className="absolute inset-8 rounded-full border border-green-400/20 animate-ping-slower"></div>
                    
                    {/* Corner targeting brackets */}
                    <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-orange-500/60 animate-pulse"></div>
                    <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-orange-500/60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-orange-500/60 animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-orange-500/60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    
                    {/* Data flow indicators */}
                    <div className="absolute top-1/2 left-0 w-4 h-0.5 bg-orange-500/60 animate-data-flow-left"></div>
                    <div className="absolute top-1/2 right-0 w-4 h-0.5 bg-orange-500/60 animate-data-flow-right"></div>
                    <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-orange-500/60 animate-data-flow-up"></div>
                    <div className="absolute bottom-0 left-1/2 w-0.5 h-4 bg-orange-500/60 animate-data-flow-down"></div>
                    
                    {/* Hexagonal overlay pattern (subtle) */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="hexagon-pattern w-full h-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-gray-500 text-xs font-mono absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-60">
                {"<SYSTEM/>"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}