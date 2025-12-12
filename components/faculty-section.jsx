
"use client";

import { useState, useEffect } from "react";

const facultyData = [
  {
    id: 1,
    name: "AJAY SIRSAT",
    position: "HOD - AIML",
    department: "AIML Department",
    image: "/faculty/ajay-sirsat.jpg",
  },
  {
    id: 2,
    name: "MR. SANDEEP DWIVEDI",
    position: "Faculty Coordinator",
    department: "AIML Department",
    image: "/faculty/sandeep.jpg",
  },
];

export function FacultySection() {
  const [currentFaculty, setCurrentFaculty] = useState(0);
  const [displayedFaculty, setDisplayedFaculty] = useState(0); // What we show in UI
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  // Touch/swipe handling for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextFaculty(); // Swipe left = next
    } else if (isRightSwipe) {
      prevFaculty(); // Swipe right = previous
    }
  };

  useEffect(() => {
    // Clean scan transition when switching faculty
    setIsTransitioning(true);
    setScanProgress(0);
    
    // Update displayed faculty after a short delay
    setTimeout(() => {
      setDisplayedFaculty(currentFaculty);
    }, 300);
    
    // Animate scan line from 0 to 100%
    const scanInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(scanInterval);
          setTimeout(() => setIsTransitioning(false), 200);
          return 100;
        }
        return prev + 4; // Smooth progression
      });
    }, 20);

    return () => clearInterval(scanInterval);
  }, [currentFaculty]);

  // Next/Prev navigation with proper image transition
  const nextFaculty = () => {
    const newIndex = (currentFaculty + 1) % facultyData.length;
    setCurrentFaculty(newIndex);
  };
  
  const prevFaculty = () => {
    const newIndex = (currentFaculty - 1 + facultyData.length) % facultyData.length;
    setCurrentFaculty(newIndex);
  };

  const faculty = facultyData[currentFaculty]; // For image
  const displayFaculty = facultyData[displayedFaculty]; // For text display

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Green gradient background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 border-2 border-green-500 text-green-500 text-sm font-mono mb-6 bg-black/80">
            FACULTY MENTORS
          </div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white">
            OUR GUIDES
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Left - Faculty Display with proper progressive reveal */}
            <div className="relative">
              <div className="relative w-full h-96 bg-gray-900/50 border-2 border-green-500/40 overflow-hidden">
                {/* Faculty image - completely hidden during transition */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover rounded-none shadow-2xl"
                  />
                  
                  {/* Progressive reveal mask - covers the image and reveals it bit by bit */}
                  <div 
                    className="absolute inset-0 bg-black"
                    style={{
                      clipPath: isTransitioning 
                        ? `polygon(0 ${scanProgress}%, 100% ${scanProgress}%, 100% 100%, 0 100%)`
                        : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
                    }}
                  />
                  
                  {/* Scanning line - moves with the reveal */}
                  {isTransitioning && (
                    <div 
                      className="absolute w-full h-1 bg-green-400 shadow-[0_0_20px_#00ff00] z-20"
                      style={{
                        top: `${scanProgress}%`,
                        transition: 'top 0.02s ease-out'
                      }}
                    />
                  )}
                  
                  {/* Tech grid overlay only on revealed portion */}
                  {isTransitioning && (
                    <div 
                      className="absolute inset-0 opacity-20 z-10"
                      style={{
                        background: `repeating-linear-gradient(
                          0deg,
                          transparent,
                          transparent 3px,
                          rgba(0, 255, 0, 0.3) 3px,
                          rgba(0, 255, 0, 0.3) 4px
                        )`,
                        clipPath: `polygon(0 0, 100% 0, 100% ${scanProgress}%, 0 ${scanProgress}%)`
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Right - Faculty Info with no flickering */}
            <div className="space-y-8 text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-orbitron font-bold text-white">
                {displayFaculty.name}
              </h3>
              <p className="text-green-400 font-rajdhani text-xl font-semibold">
                {displayFaculty.position}
              </p>
              <p className="text-gray-400 font-rajdhani text-lg">
                {displayFaculty.department}
              </p>

              {/* Navigation buttons - keeping your original style but with smooth transitions */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8">
                <button
                  onClick={prevFaculty}
                  className="w-14 h-14 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 font-orbitron text-xl"
                >
                  {"<"}
                </button>
                <span className="font-mono text-gray-400 text-lg">
                  {displayedFaculty + 1} / {facultyData.length}
                </span>
                <button
                  onClick={nextFaculty}
                  className="w-14 h-14 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 font-orbitron text-xl"
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


