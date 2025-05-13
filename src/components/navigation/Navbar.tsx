import { Icon } from "@iconify/react";
import { useTheme } from "../../hooks/theme/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-3 bg-[var(--surface)] rounded-xl shadow-sm border border-[var(--gray-light)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Icon - Light/Dark Toggle */}
        <button onClick={toggleTheme} className="text-[var(--text)]">
          <Icon
            icon={
              theme === "theme-dark" ? "solar:sun-outline" : "mdi:weather-night"
            }
            className="w-6 h-6"
          />
        </button>
        {/* Right Icon - Profile */}
        <button className="bg-[var(--primary-light)] rounded-full p-2">
          <Icon
            icon="solar:user-linear"
            className="text-[var(--primary)] w-5 h-5"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
