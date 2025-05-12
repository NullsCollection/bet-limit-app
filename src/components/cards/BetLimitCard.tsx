import { Icon } from "@iconify/react";

type BetLimitEntry = {
  min: number;
  max: number;
  payout: number;
  status: string;
};

type BetLimitCardProps = {
  title: string;
  maxLimit: number;
  rows: BetLimitEntry[];
};

const BetLimitCard = ({ title, maxLimit, rows }: BetLimitCardProps) => {
  return (
    <div className="w-full h-full rounded-xl shadow-md border border-[var(--color-lightGray)] p-4 text-[var(--color-textColor)] space-y-2">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-[var(--color-textColor)] font-light">
          Maximum Limit: {maxLimit}
        </p>
      </div>

      <table className="w-full text-left border-t border-[var(--color-lightGray)]">
        <thead>
          <tr className="text-sm text-[var(--color-textColor)] ">
            <th className="p-2 font-medium">Range Min</th>
            <th className="p-2 font-medium">Max Limit</th>
            <th className="p-2 font-medium">Payout %</th>
            <th className="p-2 font-medium">Status</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="text-sm text-[var(--color-textColor)] border-t border-[var(--color-lightGray)]"
            >
              <td className="p-2 font-normal">{row.min}</td>
              <td className="p-2 font-normal">{row.max}</td>
              <td className="p-2 font-normal">{row.payout}</td>
              <td
                className={`p-2 font-normal flex items-center gap-1 ${
                  row.min === 0 && row.max === 0 && row.payout === 0
                    ? "text-red-400"
                    : "text-emerald-500"
                }`}
              >
                {row.status}
                <Icon
                  icon={
                    row.min === 0 && row.max === 0 && row.payout === 0
                      ? "mdi:close-circle"
                      : "mdi:check-circle"
                  }
                  className={`w-4 h-4 ${
                    row.min === 0 && row.max === 0 && row.payout === 0
                      ? "text-red-400"
                      : "text-emerald-500"
                  }`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BetLimitCard;
