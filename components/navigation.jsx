"use client"

// import React hooks
import { useState, useCallback } from "react"

// import Next.js modules
import Link from "next/link"
import { usePathname } from "next/navigation"

// import icons
import { Menu, X, ChevronDown } from "lucide-react"

/**
 * Navigation component for desktop and mobile views.
 * Includes main navigation links, a VORTEX.AI dropdown, and responsive mobile menu.
 * @component
 */
export function Navigation() {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false)

  // State for vortex dropdown toggle
  const [vortexOpen, setVortexOpen] = useState(false)

  // Current path from Next.js navigation
  const pathname = usePathname()

  // Main navigation links
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "TEAMS", href: "/teams" },
    { name: "NEWSLETTER", href: "/newsletter" },
  { name: "VOICE OF ASCAI", href: "/voice" },
  ]

  // VORTEX event years
  const vortexYears = [
    { name: "VORTEX.AI 2025", href: "/vortex-ai" },
    { name: "VORTEX.AI 2024", href: "/vortex/2024" },
    // { name: "VORTEX.AI 2023", href: "/vortex/2023" },
  ]

  /**
   * Close the mobile navigation menu.
   */
  const handleMobileNavClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  /**
   * Checks if a given route is currently active.
   * @param {string} href - The route path to check.
   * @returns {boolean} True if the route is active, false otherwise.
   */
  const isActive = (href) => pathname === href

  return (
    <>
      {/* Main navigation bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link
              href="/"
              prefetch={true}
              className="text-xl font-orbitron font-bold text-white hover:text-orange-400 transition-colors duration-200"
            >
              ASC
              <span className="text-orange-500 glitch-ai-minimal" data-text="AI">
                AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={true}
                  className={`text-gray-300 hover:text-orange-400 transition-all duration-200 font-rajdhani font-medium text-sm tracking-wider relative group ${
                    isActive(item.href) ? "text-orange-400" : ""
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-200 ${
                      isActive(item.href)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}

              {/* Vortex Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 text-orange-500 hover:text-orange-400 transition-all duration-200 font-rajdhani font-medium text-sm tracking-wider"
                  onMouseEnter={() => setVortexOpen(true)}
                >
                  <span>VORTEX.AI</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-200 ${
                      vortexOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full right-0 mt-2 w-48 bg-black/95 border border-orange-500/30 backdrop-blur-lg transition-all duration-200 ${
                    vortexOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                  onMouseEnter={() => setVortexOpen(true)}
                  onMouseLeave={() => setVortexOpen(false)}
                >
                  {vortexYears.map((year) => (
                    <Link
                      key={year.name}
                      href={year.href}
                      prefetch={true}
                      className={`block px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-200 font-rajdhani text-sm ${
                        isActive(year.href)
                          ? "text-orange-400 bg-orange-500/10"
                          : ""
                      }`}
                    >
                      {year.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile menu toggle button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-orange-400 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 bg-black backdrop-blur-lg border-b border-orange-500/30 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              prefetch={true}
              onClick={handleMobileNavClose}
              className={`block text-lg font-orbitron transition-all duration-200 py-2 ${
                isActive(item.href)
                  ? "text-orange-400"
                  : "text-gray-300 hover:text-orange-400"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Vortex Links */}
          <div className="border-t border-gray-700 pt-4 space-y-3">
            <div className="text-orange-500 font-orbitron text-base mb-3">
              VORTEX.AI
            </div>
            {vortexYears.map((year) => (
              <Link
                key={year.name}
                href={year.href}
                prefetch={true}
                onClick={handleMobileNavClose}
                className={`block text-sm font-rajdhani transition-all duration-200 pl-4 ${
                  isActive(year.href)
                    ? "text-orange-400"
                    : "text-gray-400 hover:text-orange-400"
                }`}
              >
                {year.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
