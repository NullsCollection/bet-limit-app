import { useState } from "react";
import { Icon } from "@iconify/react";

type AccordionProps = {
  title: string;
  icon?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

const Accordion = ({
  title,
  icon,
  defaultOpen = true,
  children,
}: AccordionProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="w-full border border-[var(--gray-light)] rounded-xl overflow-hidden bg-[var(--surface)] shadow-sm">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2 text-[var(--text)] font-medium text-sm">
          {icon && <Icon icon={icon} className="w-5 h-5" />}
          {title}
        </div>
        <Icon
          icon={open ? "mdi:chevron-up" : "mdi:chevron-down"}
          className="w-5 h-5 text-[var(--text)]"
        />
      </button>

      {/* Body */}
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
};

export default Accordion;
