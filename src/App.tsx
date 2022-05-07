import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.theme === "dark"
  );

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    const html = document.documentElement;

    const prevTheme = isDarkMode ? "light" : "dark";
    html.classList.remove(prevTheme);

    const nextTheme = isDarkMode ? "dark" : "light";
    html.classList.add(nextTheme);

    localStorage.setItem("theme", nextTheme);
  }, [isDarkMode]);

  return (
    <div className="text-center flex flex-col justify-center items-center transition-colors duration-200 ease-linear bg-white dark:bg-[#1C1C36] h-[100vh]">
      <SiTailwindcss className="mb-5 text-[#38bdf8] text-5xl" />

      <h1 className="transition-all duration-150 text-2xl text-zinc-800 dark:text-white font-[Montserrat] font-bold">
        Hello,
        <br />
      </h1>
      <p className="px-10 transition-all duration-150 text-xl mt-5 mb-10 text-center text-zinc-700 dark:text-white font-[Montserrat] font-thin">
        This is a simple example of light and dark themes using TailwindCSS!
      </p>
      <button
        className="flex items-center bg-[#2aa3d6] hover:brightness-125 duration-200 transition-all p-5 rounded-full text-white font-[Montserrat] font-medium"
        onClick={toggleTheme}
      >
        {isDarkMode ? (
          <FaMoon className="text-2xl" />
        ) : (
          <FaSun className="text-2xl" />
        )}
      </button>
    </div>
  );
}
