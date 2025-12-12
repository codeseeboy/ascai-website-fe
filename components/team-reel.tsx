"use client";

import type React from "react";
import { Linkedin } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// Data
type Member = {
  name: string;
  position: string;
  team: string;
  year: string;
  image: string;
  social?: { linkedin?: string };
};
type TeamGroup = {
  name: string;
  accent:
    | "orange"
    | "cyan"
    | "purple"
    | "green"
    | "blue"
    | "red"
    | "yellow"
    | "teal";
  members: Member[];
};

const TEAMS: TeamGroup[] = [
  {
    name: "CORE TEAM",
    accent: "orange",
    members: [
      {
        name: "HITEN CHAMPANEKAR",
        position: "PRESIDENT",
        team: "CORE TEAM",
        year: "B.E",
        image: "/teams/hiten-champanekar.jpg",
        social: { linkedin: "https://linkedin.com/in/hiten" },
      },
      {
        name: "PRITI SINGH",
        position: "VICE PRESIDENT",
        team: "CORE TEAM",
        year: "T.E",
        image: "/teams/priti-singh.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "SWAYAM SANKHE",
        position: "SECRETARY",
        team: "CORE TEAM",
        year: "T.E",
        image: "/teams/swayam-sankhe.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "SHRESHTHA ROYCHOWDHURY",
        position: "JOINT SECRETARY",
        team: "CORE TEAM",
        year: "T.E",
        image: "/teams/shreshtha-roychowdhury.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "MAAN SURTI",
        position: "TREASURER",
        team: "CORE TEAM",
        year: "T.E",
        image: "/teams/maan-surti.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "LABHESH JADHAV",
        position: "ADVISOR",
        team: "CORE TEAM",
        year: "B.E",
        image: "/teams/labhesh-jadhav.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "VIRAL PATEL",
        position: "CO-ADVISOR",
        team: "CORE TEAM",
        year: "T.E",
        image: "/teams/viral-patel.jpg",
        social: { linkedin: "#" },
      },
    ],
  },
  {
    name: "TECHNICAL",
    accent: "green",
    members: [
      {
        name: "RUPESH NANDALE",
        position: "HEAD",
        team: "TECHNICAL",
        year: "T.E",
        image: "/teams/rupesh-nandale.jpg",
        social: { linkedin: "https://linkedin.com/in/rupesh" },
      },
      {
        name: "SAHIL SARMALKAR",
        position: "JOINT HEAD",
        team: "TECHNICAL",
        year: "T.E",
        image: "/teams/sahil-sarmalkar.jpg",
        social: { linkedin: "https://linkedin.com/in/sahil" },
      },
      {
        name: "SHASHIKANT RAJPUT",
        position: "MEMBER",
        team: "TECHNICAL",
        year: "T.E",
        image: "/teams/shashikant-rajput.jpg",
        social: { linkedin: "https://linkedin.com/in/shashikant" },
      },
      {
        name: "TANMAY PAWAR",
        position: "MEMBER",
        team: "TECHNICAL",
        year: "S.E",
        image: "/teams/tanmay-pawar.jpg",
        social: { linkedin: "#" },
      },
    ],
  },
  {
    name: "PR TEAM",
    accent: "blue",
    members: [
      {
        name: "NIDHI THAKUR",
        position: "HEAD",
        team: "PR TEAM",
        year: "T.E",
        image: "/teams/nidhi-thakur.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "SAMRUDDHI NIUNGARE",
        position: "JOINT HEAD",
        team: "PR TEAM",
        year: "S.E",
        image: "/teams/samruddhi-niungare.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "NIDHI KAVA",
        position: "MEMBER",
        team: "PR TEAM",
        year: "S.E",
        image: "/teams/nidhi-kava.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "VAISHNAVI KHANDAGALE",
        position: "MEMBER",
        team: "PR TEAM",
        year: "S.E",
        image: "/teams/vaishnavi-khandagale.jpg",
        social: { linkedin: "#" },
      },
    ],
  },
  {
    name: "MEDIA",
    accent: "purple",
    members: [
      {
        name: "FRANCIS BHINGARE",
        position: "HEAD",
        team: "MEDIA",
        year: "T.E",
        image: "/teams/francis-bhingare.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "SHRIYA SANJEEV",
        position: "JOINT HEAD",
        team: "MEDIA",
        year: "T.E",
        image: "/teams/shriya-sanjeev.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "MRIGANK JAISWAL",
        position: "MEMBER",
        team: "MEDIA",
        year: "S.E",
        image: "/teams/mrigank-jaiswal.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "PRANAV SHINDE",
        position: "MEMBER",
        team: "MEDIA",
        year: "S.E",
        image: "/teams/pranav-shinde.jpg",
        social: { linkedin: "#" },
      },
    ],
  },
  {
    name: "EVENTS",
    accent: "red",
    members: [
      {
        name: "RUDRA PATEL",
        position: "HEAD",
        team: "EVENTS",
        year: "T.E",
        image: "/teams/rudra-patel.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "TEJAS BHAVTHANKAR",
        position: "JOINT HEAD",
        team: "EVENTS",
        year: "T.E",
        image: "/teams/tejas-bhavthankar.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "ADITYA SINGH",
        position: "MEMBER",
        team: "EVENTS",
        year: "S.E",
        image: "/teams/aditya-singh.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "KASHISH PANDEY",
        position: "MEMBER",
        team: "EVENTS",
        year: "S.E",
        image: "/teams/kashish-pandey.jpg",
        social: { linkedin: "#" },
      },
    ],
  },
  {
    name: "DESIGN",
    accent: "yellow",
    members: [
      {
        name: "DNYANADA PATIL",
        position: "HEAD",
        team: "DESIGN",
        year: "T.E",
        image: "/teams/dnyanada-patil.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "CHETANA PATIL",
        position: "JOINT HEAD",
        team: "DESIGN",
        year: "T.E",
        image: "/teams/chetana-patil.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "SIDDHANT KOLI",
        position: "MEMBER",
        team: "DESIGN",
        year: "S.E",
        image: "/teams/siddhant-koli.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "TANISHKA GHARAT",
        position: "MEMBER",
        team: "DESIGN",
        year: "S.E",
        image: "/teams/tanishka-gharat.jpg",
        social: { linkedin: "#" },
      },
    ],
  },
  {
    name: "DOCUMENTATION",
    accent: "teal",
    members: [
      {
        name: "SHIVANI PATEL",
        position: "HEAD",
        team: "DOCUMENTATION",
        year: "T.E",
        image: "/teams/shivani-patel.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "JEET RATHOD",
        position: "JOINT HEAD",
        team: "DOCUMENTATION",
        year: "T.E",
        image: "/teams/jeet-rathod.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "SARTHAK GHARAT",
        position: "MEMBER",
        team: "DOCUMENTATION",
        year: "S.E",
        image: "/teams/sarthak-gharat.jpg",
        social: { linkedin: "#" },
      },
      {
        name: "PRAFUL AMATI",
        position: "MEMBER",
        team: "DOCUMENTATION",
        year: "S.E",
        image: "/teams/praful-amati.jpg",
        social: { linkedin: "#" },
      },
    ],
  },
];
// Accent utilities (no dynamic Tailwind class names)
const ACCENT = {
  orange: {
    ring: "ring-orange-500/60",
    text: "text-orange-400",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
    bar: "bg-orange-500",
    chip: "border-orange-500 text-orange-400",
    scan: "from-orange-500/0 via-orange-500/30 to-orange-500/0",
  },
  green: {
    ring: "ring-green-500/60",
    text: "text-green-400",
    glow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]",
    bar: "bg-green-500",
    chip: "border-green-500 text-green-300",
    scan: "from-green-500/0 via-green-500/25 to-green-500/0",
  },
  blue: {
    ring: "ring-blue-500/60",
    text: "text-blue-400",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    bar: "bg-blue-500",
    chip: "border-blue-500 text-blue-400",
    scan: "from-blue-500/0 via-blue-500/25 to-blue-500/0",
  },
  purple: {
    ring: "ring-purple-500/60",
    text: "text-purple-400",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    bar: "bg-purple-500",
    chip: "border-purple-500 text-purple-300",
    scan: "from-purple-500/0 via-purple-500/25 to-purple-500/0",
  },
  red: {
    ring: "ring-red-500/60",
    text: "text-red-400",
    glow: "shadow-[0_0_30px_rgba(239,68,68,0.3)]",
    bar: "bg-red-500",
    chip: "border-red-500 text-red-400",
    scan: "from-red-500/0 via-red-500/25 to-red-500/0",
  },
  yellow: {
    ring: "ring-yellow-400/60",
    text: "text-yellow-300",
    glow: "shadow-[0_0_30px_rgba(250,204,21,0.3)]",
    bar: "bg-yellow-400",
    chip: "border-yellow-400 text-yellow-300",
    scan: "from-yellow-400/0 via-yellow-400/25 to-yellow-400/0",
  },
  teal: {
    ring: "ring-teal-500/60",
    text: "text-teal-400",
    glow: "shadow-[0_0_30px_rgba(20,184,166,0.3)]",
    bar: "bg-teal-500",
    chip: "border-teal-500 text-teal-400",
    scan: "from-teal-500/0 via-teal-500/25 to-teal-500/0",
  },
  cyan: {
    ring: "ring-cyan-400/60",
    text: "text-cyan-400",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    bar: "bg-cyan-400",
    chip: "border-cyan-400 text-cyan-300",
    scan: "from-cyan-400/0 via-cyan-400/25 to-cyan-400/0",
  },
} as const;

export default function TeamReel() {
  // All logic and state above
  const reel = useMemo(() => {
    const items: Array<
      Member & {
        groupIndex: number;
        accent: TeamGroup["accent"];
        groupName: string;
      }
    > = [];
    TEAMS.forEach((g, gi) => {
      g.members.forEach((m) =>
        items.push({
          ...m,
          groupIndex: gi,
          accent: g.accent,
          groupName: g.name,
        })
      );
    });
    return items;
  }, []);

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const current = reel[index];
  const accent = ACCENT[current.accent];

  const go = useCallback(
    (dir: 1 | -1) => {
      if (transitioning) return;
      setTransitioning(true);
      
      const newIndex = (index + dir + reel.length) % reel.length;
      
      window.setTimeout(() => {
        setIndex(newIndex);
        setTransitioning(false);
      }, 300);
    },
    [reel.length, transitioning, index]
  );

  const next = useCallback(() => go(1), [go]);
  const prev = useCallback(() => go(-1), [go]);

  // autoplay
  useEffect(() => {
    if (!playing) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
      return;
    }
    timerRef.current = window.setInterval(() => next(), 4000) as unknown as number;
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [playing, next]);

  // touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 48) {
      if (dx < 0) {
        next();
      } else {
        prev();
      }
    }
    touchStartX.current = null;
  };

  // Responsive rendering: mobile (below sm) and desktop (sm and up)
  return (
    <>
      {/* Mobile view: below sm */}
      <div className="sm:hidden">
        {/* ...mobile JSX block (same as before)... */}
        {/* ...existing code... */}
        <main className="relative min-h-screen w-full overflow-y-auto bg-black">
          {/* Top bar */}
          <div className="sticky top-0 left-0 right-0 z-30 px-3 pt-3 sm:px-4 sm:pt-4 bg-black/80 backdrop-blur-md">
            <div className="mx-auto max-w-6xl">
              <div className="h-1 w-full bg-white/10 rounded overflow-hidden">
                <div
                  key={`${index}-${playing ? "p" : "s"}`}
                  className={`h-full ${accent.bar}`}
                  style={{
                    animation: playing ? "reelProgress 4s linear forwards" : undefined,
                  }}
                />
              </div>
              <div className="mt-1 sm:mt-2 flex items-center justify-between text-[10px] sm:text-xs text-gray-400 font-mono">
                <span>{">> ASCAI // TEAM REEL"}</span>
                <span className={accent.text}>{current.groupName}</span>
              </div>
            </div>
          </div>

          {/* Reel card */}
          <section
            className="relative z-10 flex items-center justify-center px-2 sm:px-4 py-16 sm:py-20"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={`relative w-full max-w-6xl bg-black/70 backdrop-blur-lg border border-white/10 ring-1 ${accent.ring} ${accent.glow}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1fr] gap-2 sm:gap-4 md:gap-6">
                {/* Image */}
                <div className="relative flex items-center justify-center p-2 sm:p-4 aspect-[4/5] w-full max-w-xs sm:max-w-md mx-auto overflow-hidden">
                  <Image
                    src={current.image || "/placeholder.svg"}
                    alt={current.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover w-full h-full rounded-xl border border-neutral-800 shadow-lg"
                    priority
                  />
                </div>

                {/* Details */}
                <div className="p-3 sm:p-4 md:p-6 flex flex-col h-full">
                  <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs">
                    <span className={`px-2 py-0.5 border ${accent.chip}`}> 
                      {current.team}
                    </span>
                    <span className="px-2 py-0.5 border border-white/20 text-gray-300">
                      {current.year}
                    </span>
                  </div>

                  <h1
                    className={`mt-2 sm:mt-3 md:mt-4 font-orbitron font-extrabold leading-tight truncate ${accent.text} text-xl sm:text-2xl md:text-4xl`}
                  >
                    {current.name}
                  </h1>

                  <p className="mt-1 font-rajdhani text-sm sm:text-base md:text-lg text-gray-300">
                    {current.position}
                  </p>

                  {/* Stats */}
                  <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="neon-stat text-center px-2 py-2">
                      <div className="stat-label text-[10px] sm:text-xs">TEAM</div>
                      <div className="stat-value text-sm">{current.team}</div>
                    </div>
                    <div className="neon-stat text-center px-2 py-2">
                      <div className="stat-label text-[10px] sm:text-xs">
                        POSITION
                      </div>
                      <div className="stat-value text-sm">{current.position}</div>
                    </div>
                    <div className="neon-stat text-center px-2 py-2">
                      <div className="stat-label text-[10px] sm:text-xs">SOCIAL</div>
                      <div className="stat-value flex justify-center">
                        <a
                          href={current.social?.linkedin || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:text-blue-400 text-sm"
                        >
                          <Linkedin size={14} />
                          <span className="hidden sm:inline">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="hidden sm:flex items-center gap-2">
                      <button
                        onClick={prev}
                        className="h-9 w-9 sm:h-10 sm:w-10 grid place-items-center border border-white/20 bg-black/40 hover:border-white/40"
                      >
                        <ChevronLeft className="h-5 w-5 text-white" />
                      </button>
                      <button
                        onClick={() => setPlaying((p) => !p)}
                        className="h-9 w-9 sm:h-10 sm:w-10 grid place-items-center border border-white/20 bg-black/40 hover:border-white/40"
                      >
                        {playing ? (
                          <Pause className="h-5 w-5 text-white" />
                        ) : (
                          <Play className="h-5 w-5 text-white" />
                        )}
                      </button>
                      <button
                        onClick={next}
                        className="h-9 w-9 sm:h-10 sm:w-10 grid place-items-center border border-white/20 bg-black/40 hover:border-white/40"
                      >
                        <ChevronRight className="h-5 w-5 text-white" />
                      </button>
                    </div>
                    <div className="font-mono text-[10px] sm:text-xs text-gray-400">
                      {index + 1}/{reel.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* bottom hints */}
          <div className="pb-6 text-center text-[10px] sm:text-xs text-gray-400 font-mono">
            SWIPE • ARROWS • SPACE
          </div>
        </main>
      </div>
      {/* Desktop view: sm and up */}
      <div className="hidden sm:block">
        {/* ...desktop JSX block (same as before)... */}
        {/* ...existing code... */}
        <main className="relative h-[100dvh] w-full min-h-screen overflow-y-auto bg-black" data-team-reel>
          {/* Binary/tiles background */}
          <div className="absolute inset-0 opacity-30  pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div
              className="absolute inset-0 mix-blend-screen"
              style={{
                background:
                  "radial-gradient(600px 600px at 30% 20%, rgba(249,115,22,0.12), transparent 60%), radial-gradient(600px 600px at 70% 80%, rgba(6,182,212,0.12), transparent 60%), radial-gradient(600px 600px at 80% 10%, rgba(168,85,247,0.12), transparent 60%)",
              }}
            />
          </div>

          {/* Top bar with progress */}
          <div className="absolute left-0 right-0 top-0 z-30 px-4 pt-4">
            <div className="mx-auto max-w-6xl">
              <div className="h-1 w-full bg-white/10 overflow-hidden rounded">
                {/* Progress animates only while playing */}
                <div
                  key={`${index}-${playing ? "p" : "s"}`}
                  className={`h-full ${accent.bar} transition-none`}
                  style={{
                    animation: playing ? "reelProgress 4s linear forwards" : undefined,
                  }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>{">> ASCAI // TEAM REEL"}</span>
                <span className={accent.text}>{current.groupName}</span>
              </div>
            </div>
          </div>

          {/* Reel card */}
          <section
            className="relative z-10 h-full w-full flex items-center justify-center px-4 select-none"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={["relative w-full max-w-6xl","reel-clip bg-black/70 backdrop-blur-lg border border-white/10","ring-1",accent.ring,accent.glow,].join(" ")}
            >
              {/* Media + details grid that reflows on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr] gap-0 md:gap-6">
                {/* Media */}
                <div className="relative aspect-[4/5] md:aspect-[10/9] overflow-hidden">
                  {/* Image */}
                  <Image
                    src={current.image || "/placeholder.svg"}
                    alt={current.name}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Subtle scanlines */}
                  <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay bg-[repeating-linear-gradient(0deg,rgba(255,255,255,.06)_0_1px,transparent_1px_3px)]" />

                  {/* Cyber corners */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="absolute -left-px top-4 h-10 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent"
                    />
                    <div
                      className="absolute -right-px bottom-4 h-10 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent"
                    />
                  </div>

                  {/* Transition overlays */}
                  {transitioning && (
                    <>
                      <div className={`absolute inset-0 scanline ${accent.scan}`} />
                      <div className="absolute inset-0 glitch-slices" />
                    </>
                  )}
                </div>

                {/* Details */}
                <div className="p-4 md:p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-[11px] md:text-xs">
                    <span className={`px-2 py-1 border ${accent.chip}`}>{current.team}</span>
                    <span className="px-2 py-1 border border-white/20 text-gray-300">{current.year}</span>
                  </div>

                  <h1
                    className={["mt-3 md:mt-4 font-orbitron font-extrabold leading-tight","text-2xl md:text-4xl",accent.text,].join(" ")}
                  >
                    {current.name}
                  </h1>

                  <p className="mt-1 font-rajdhani text-base md:text-lg text-gray-300">{current.position}</p>

                  {/* Divider */}
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* System readout */}
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="neon-stat text-center px-2 py-3">
                      <div className="stat-label text-xs sm:text-sm">TEAM</div>
                      <div className="stat-value text-sm sm:text-base">{current.team}</div>
                    </div>

                    <div className="neon-stat text-center px-2 py-3">
                      <div className="stat-label text-xs sm:text-sm">POSITION</div>
                      <div className="stat-value text-sm sm:text-base">{current.position}</div>
                    </div>

                    <div className="neon-stat text-center px-2 py-3">
                      <div className="stat-label text-xs sm:text-sm">SOCIAL</div>
                      <div className="stat-value flex items-center justify-center gap-1 text-sm sm:text-base">
                        <a
                          href={current.social?.linkedin || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:text-blue-400 transition"
                        >
                          <Linkedin size={14} className="sm:w-4 sm:h-4" />
                          <span className="hidden sm:inline">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prev}
                        aria-label="Previous"
                        className={["h-10 w-10 grid place-items-center border border-white/20 hover:border-white/40","transition-colors","bg-black/40",].join(" ")}
                      >
                        <ChevronLeft className="h-5 w-5 text-white" />
                      </button>
                      <button
                        onClick={() => setPlaying((p) => !p)}
                        aria-label={playing ? "Pause" : "Play"}
                        className={["h-10 w-10 grid place-items-center border border-white/20 hover:border-white/40","transition-colors","bg-black/40",].join(" ")}
                      >
                        {playing ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
                      </button>
                      <button
                        onClick={next}
                        aria-label="Next"
                        className={["h-10 w-10 grid place-items-center border border-white/20 hover:border-white/40","transition-colors","bg-black/40",].join(" ")}
                      >
                        <ChevronRight className="h-5 w-5 text-white" />
                      </button>
                    </div>

                    {/* Reel index */}
                    <div className="font-mono text-xs text-gray-400">
                      {index + 1}/{reel.length}
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle corner notches to avoid plain rectangle feel */}
              <div
                className="pointer-events-none absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
              <div
                className="pointer-events-none absolute -bottom-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </div>
          </section>

          {/* Side hints */}
          <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-6 text-[10px] md:text-xs text-gray-400 font-mono">
            <span>SWIPE • ARROWS • SPACE</span>
          </div>
        </main>
      </div>
    </>
  );
}