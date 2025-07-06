"use client";
import React from "react";
import { useTheme } from "next-themes";

import { MdComputer, MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-foreground flex items-center justify-between gap-1 rounded-md p-1">
      <button
        className={
          theme === "system" ? "btn-theme btn-theme-active" : "btn-theme"
        }
        onClick={() => setTheme("system")}
      >
        <MdComputer />
      </button>

      <button
        className={
          theme === "dark" ? "btn-theme btn-theme-active" : "btn-theme"
        }
        onClick={() => setTheme("dark")}
      >
        <MdDarkMode />
      </button>
      <button
        className={
          theme === "light" ? "btn-theme btn-theme-active" : "btn-theme"
        }
        onClick={() => setTheme("light")}
      >
        <MdLightMode />
      </button>
    </div>
  );
}

export { ThemeSwitcher };
