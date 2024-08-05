"use client"

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeComponent = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ensure component is mounted before setting the theme
    setMounted(true);

    // Determine the initial theme based on system preference or localStorage
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme]);

  // Handle theme change
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    // Show loading spinner while determining the theme
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-end p-4">
        <button
          id="buttonToggle"
          onClick={toggleTheme}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Toggle Theme
        </button>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to the Themed Page</h1>
        <p>
          This page will adapt to your system's color scheme or your choice.
        </p>
      </div>
    </div>
  );
};

export default ThemeComponent;
