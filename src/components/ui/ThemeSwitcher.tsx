"use client";
import React from "react";
import { MdComputer, MdDarkMode, MdLightMode } from "react-icons/md";

type Theme = "dark" | "light" | "system";

function ThemeSwitcher() {
  const [theme, setTheme] = React.useState<Theme>("system");

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;

    const effectiveTheme = stored || "system";
    setTheme(effectiveTheme);

    const applyTheme = () => {
      const isDark = stored === "dark" || (!stored && media.matches);
      document.documentElement.classList.toggle("dark", isDark);
    };

    applyTheme();
    media.addEventListener("change", applyTheme);

    return () => {
      media.removeEventListener("change", applyTheme);
    };
  }, []);

  function changeTheme(newTheme: "dark" | "light") {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  }

  function resetTheme() {
    localStorage.removeItem("theme");
    setTheme("system");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    document.documentElement.classList.toggle("dark", prefersDark);
  }

  const buttonClass = (current: Theme) =>
    `btn-theme ${theme === current && "bg-background text-foreground"}`;

  return (
    <div className="bg-foreground flex items-center justify-between gap-1 rounded-md p-1">
      <button className={buttonClass("system")} onClick={resetTheme}>
        <MdComputer />
      </button>
      <button
        className={buttonClass("dark")}
        onClick={() => changeTheme("dark")}
      >
        <MdDarkMode />
      </button>
      <button
        className={buttonClass("light")}
        onClick={() => changeTheme("light")}
      >
        <MdLightMode />
      </button>
    </div>
  );
}

export { ThemeSwitcher };
