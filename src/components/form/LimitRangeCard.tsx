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
  const [expanded, setExpanded] = useState(true);
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
    ranges.length > 0 && ranges.some((r) => r.min || r.max || r.payout);

  return (
    <div className="w-full border border-[var(--gray-light)] rounded-xl bg-[var(--surface)] shadow-md">
      {/* Header */}
      <div
        className="flex justify-between items-start px-4 py-3 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <h2 className="text-sm font-semibold text-[var(--text)]">{title}</h2>
          <p className="text-xs text-gray-400">{ranges.length} Ranges</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className={isSet ? "text-emerald-500" : "text-red-500"}>
            {isSet ? "Set" : "Not set"}
          </span>
          <Icon
            icon={isSet ? "mdi:check-circle" : "mdi:close-circle"}
            className={`w-4 h-4 ${isSet ? "text-emerald-500" : "text-red-500"}`}
          />
          <Icon
            icon={expanded ? "mdi:chevron-up" : "mdi:chevron-down"}
            className="w-5 h-5 text-[var(--text)]"
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
              className="w-full border rounded px-2 py-1 text-sm border-[var(--gray-light)] bg-[var(--background)]"
            />
          </div>

          {/* Range Inputs */}
          <div className="space-y-3">
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
                  className="w-full border px-2 py-1 rounded text-sm border-[var(--gray-light)] bg-[var(--background)]"
                />
                <input
                  type="text"
                  placeholder="Max"
                  value={row.max}
                  onChange={(e) => handleChange(index, "max", e.target.value)}
                  className="w-full border px-2 py-1 rounded text-sm border-[var(--gray-light)] bg-[var(--background)]"
                />
                <input
                  type="text"
                  placeholder="%"
                  value={row.payout}
                  onChange={(e) =>
                    handleChange(index, "payout", e.target.value)
                  }
                  className="w-full border px-2 py-1 rounded text-sm border-[var(--gray-light)] bg-[var(--background)]"
                />
                <button
                  onClick={() => deleteRow(index)}
                  className="text-red-400 text-xs hover:underline text-left sm:text-right"
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
