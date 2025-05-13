import { Icon } from "@iconify/react";

type Entry = {
  min: number;
  max: number;
  payout: number;
  status: string;
};

type LimitDetailCardProps = {
  limitTitle: string;
  maxLimit: number;
  types: string[];
  rows: Entry[];
};

const LimitedNumber = ({
  limitTitle,
  maxLimit,
  types,
  rows,
}: LimitDetailCardProps) => {
  return (
    <div className="w-full rounded-xl shadow-md border border-[var(--gray-light)] p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-[var(--text)]">
          {limitTitle}
        </h2>
        <p className="text-sm text-[var(--text)]">
          Maximum Limit : {maxLimit}
        </p>
      </div>

      {/* Button group */}
      <div className="flex flex-wrap gap-2">
        {types.map((type, index) => (
          <button
            key={index}
            className="px-4 py-1 bg-[var(--background)] text-sm rounded-full text-[var(--text)] border border-[var(--gray-light)]"
          >
            {type}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-[var(--text)] font-normal border-t border-[var(--gray-light)]">
              <th className="py-2 font-medium">Range Min</th>
              <th className="py-2 font-medium">Max Limit</th>
              <th className="py-2 font-medium">Payout %</th>
              <th className="py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const isZero = row.min === 0 && row.max === 0 && row.payout === 0;
              const statusColor = isZero ? "text-red-400" : "text-emerald-500";
              const icon = isZero ? "mdi:close-circle" : "mdi:check-circle";
              return (
                <tr
                  key={i}
                  className="text-[var(--text)] border-t border-[var(--gray-light)]"
                >
                  <td className="py-2">{row.min}</td>
                  <td className="py-2">{row.max}</td>
                  <td className="py-2">{row.payout}</td>
                  <td
                    className={`py-2 flex items-center gap-1 font-normal ${statusColor}`}
                  >
                    {row.status}
                    <Icon icon={icon} className={`w-4 h-4 ${statusColor}`} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LimitedNumber;
