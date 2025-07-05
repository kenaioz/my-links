"use client";

import { useEffect } from "react";
import { MdComputer, MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeSwitcher() {
  useEffect(() => {
    console.log(localStorage.theme);

    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  });

  function changeTheme(theme: "dark" | "light") {
    localStorage.theme = theme;
  }

  return (
    <div className="flex items-center justify-between rounded-md bg-gray-700">
      <button
        className="cursor-pointer rounded-md p-1 data-[theme]:bg-gray-800"
        onClick={() => localStorage.removeItem("theme")}
      >
        <MdComputer />
      </button>
      <button className="p-1" onClick={() => changeTheme("dark")}>
        <MdDarkMode />
      </button>
      <button className="p-1" onClick={() => changeTheme("light")}>
        <MdLightMode />
      </button>
    </div>
  );
}

export { ThemeSwitcher };
