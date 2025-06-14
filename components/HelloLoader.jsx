"use client";
import { useState, useEffect } from "react";

const HelloLoader = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const greetings = [
    { text: "Hello", lang: "English" },
    { text: "Hola", lang: "Spanish" },
    { text: "Bonjour", lang: "French" },
    { text: "こんにちは", lang: "Japanese" },
    { text: "नमस्ते", lang: "Hindi" }
  ];

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // Skip animation if already visited in this session
      setIsVisible(false);
      onComplete();
      return;
    }

    // Mark as visited
    sessionStorage.setItem('hasVisited', 'true');

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          // Start fade out after showing all greetings
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              setIsVisible(false);
              onComplete();
            }, 600);
          }, 800);
          clearInterval(interval);
          return prev;
        }
      });
    }, 600);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-all duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="relative h-20 flex items-center justify-center">
          {greetings.map((greeting, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-500 ${
                index === currentIndex
                  ? 'opacity-100 transform translate-y-0 scale-100'
                  : index < currentIndex
                  ? 'opacity-0 transform -translate-y-4 scale-95'
                  : 'opacity-0 transform translate-y-4 scale-95'
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                {greeting.text}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">
                {greeting.lang}
              </p>
            </div>
          ))}
        </div>
        
        {/* Subtle loading indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i <= currentIndex 
                    ? 'bg-blue-500 dark:bg-blue-400' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloLoader;