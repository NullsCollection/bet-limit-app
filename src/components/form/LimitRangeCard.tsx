import { useState } from "react";
import { Icon } from "@iconify/react";

type RangeRow = {
  min: string;
  max: string;
  payout: string;
};

type LimitRangeCardProps = {
  title: string;
  initialMaxLimit?: string;
  initialRanges?: RangeRow[];
};

const LimitRangeCard = ({
  title,
  initialMaxLimit = "",
  initialRanges = [],
}: LimitRangeCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [maxLimit, setMaxLimit] = useState(initialMaxLimit);
  const [ranges, setRanges] = useState<RangeRow[]>(initialRanges);

  const addRow = () => {
    setRanges([...ranges, { min: "", max: "", payout: "" }]);
  };

  const deleteRow = (index: number) => {
    setRanges(ranges.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, key: keyof RangeRow, value: string) => {
    const updated = [...ranges];
    updated[index][key] = value;
    setRanges(updated);
  };

  const isSet =
    ranges.length > 0 &&
    ranges.every(
      (r) =>
        r.min.trim() !== "" &&
        r.max.trim() !== "" &&
        r.payout.trim() !== "" &&
        r.min !== "0" &&
        r.max !== "0" &&
        r.payout !== "0"
    );

  return (
    <div className="w-full border border-[var(--gray-light)] rounded-xl bg-[var(--surface)] shadow-md">
      {/* Header */}
      <div
        className="flex items-start justify-between w-full px-4 py-3 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Left: Title + Subtext */}
        <div className="flex items-center gap-2 text-sm whitespace-nowrap">
          <Icon
            icon={expanded ? "eva:arrow-down-fill" : "eva:arrow-right-fill"}
            className="w-5 h-5 text-[var(--text)]"
          />
          <h2 className="text-lg font-semibold text-[var(--text)]">{title}</h2>
          <p className="text-xs text-[var(--color-dark-text-light)]">
            {ranges.length} Ranges
          </p>
        </div>

        {/* Right: Status & Toggle */}
        <div className="flex items-center gap-2 text-sm whitespace-nowrap">
          <span className={isSet ? "text-emerald-500" : "text-red-400"}>
            Set
          </span>
          <Icon
            icon={isSet ? "mdi:check-circle" : "mdi:close-circle"}
            className={`w-4 h-4 ${isSet ? "text-emerald-500" : "text-red-400"}`}
          />
        </div>
      </div>

      {/* Body */}
      {expanded && (
        <div className="px-4 pb-4 space-y-4">
          {/* Max Limit Input */}
          <div>
            <label className="block text-sm font-medium text-[var(--text)] mb-1">
              Max limit:
            </label>
            <input
              type="text"
              value={maxLimit}
              onChange={(e) => setMaxLimit(e.target.value)}
              className="w-full border rounded px-2 py-1 text-sm border-[var(--gray-light)]"
            />
          </div>

          {/* Range Inputs */}
          <div className="space-y-3">
            {/* Header Row */}
            <div className="hidden sm:grid grid-cols-4 gap-2 text-xs text-[var(--color-dark-text-light)] font-medium px-1">
              <span>Minimum Bet</span>
              <span>Maximum Bet</span>
              <span>Payout</span>
              <span className="text-right">Action</span>
            </div>

            {/* Input Rows */}
            {ranges.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center w-full"
              >
                <input
                  type="text"
                  placeholder="Min"
                  value={row.min}
                  onChange={(e) => handleChange(index, "min", e.target.value)}
                  className="w-full border px-2 py-1 rounded text-sm border-[var(--gray-light)]"
                />
                <input
                  type="text"
                  placeholder="Max"
                  value={row.max}
                  onChange={(e) => handleChange(index, "max", e.target.value)}
                  className="w-full border px-2 py-1 rounded text-sm border-[var(--gray-light)]"
                />
                <input
                  type="text"
                  placeholder="%"
                  value={row.payout}
                  onChange={(e) =>
                    handleChange(index, "payout", e.target.value)
                  }
                  className="w-full border px-2 py-1 rounded text-sm border-[var(--gray-light)]"
                />
                <button
                  onClick={() => deleteRow(index)}
                  className="text-red-400 text-xs hover:underline text-left sm:text-center"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={addRow}
            className="mt-2 px-4 py-1 bg-[var(--primary)] text-white rounded text-sm"
          >
            + Add
          </button>
        </div>
      )}
    </div>
  );
};

export default LimitRangeCard;
