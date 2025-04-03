import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on first load
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleDarkMode}
      className="p-1 rounded"
    >
      {darkMode ? (
        <p
            onClick={toggleDarkMode}
        >
            Light mode
        </p>
      ) : (
        <p
            onClick={toggleDarkMode}
        >
            Dark mode
        </p>
      )}
    </button>
  );
};

export default DarkModeToggle;