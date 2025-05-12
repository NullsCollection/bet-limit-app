import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-3 bg-white rounded-xl shadow-sm font-poppins">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Icon - Light/Dark Toggle */}
        <button className="text-[var(--color-textColor)]">
          <Icon icon="solar:sun-outline" className="w-6 h-6" />
        </button>

        {/* Right Icon - Profile */}
        <button className="bg-[var(--color-lightViolet)] rounded-full p-2">
          <Icon
            icon="solar:user-linear"
            className="text-[var(--color-violet)] w-5 h-5"
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
