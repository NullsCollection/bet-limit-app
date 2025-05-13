import { useEffect, useState } from "react";

export const useTheme = (
  defaultTheme: "theme-dark" | "theme-light" = "theme-light"
) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || defaultTheme;
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "theme-dark" ? "theme-light" : "theme-dark"));
  };

  return { theme, toggleTheme };
};
