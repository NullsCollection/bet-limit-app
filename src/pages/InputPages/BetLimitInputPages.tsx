import Navbar from "../../components/navigation/Navbar";
import { Icon } from "@iconify/react";
import Accordion from "../../components/common/Accordion";
import LimitRangeCard from "../../components/form/LimitRangeCard";

const BetLimitInputPages = () => {
  const limitSets = [
    {
      title: "Three Top",
      maxLimit: "5001",
      ranges: [
        { min: "101", max: "1000", payout: "80" },
        { min: "101", max: "2000", payout: "60" },
        { min: "101", max: "3000", payout: "50" },
      ],
    },
    {
      title: "Two Top",
      maxLimit: "",
      ranges: [],
    },
    {
      title: "Run Top",
      maxLimit: "5001",
      ranges: [{ min: "1000", max: "5000", payout: "50" }],
    },
    // Add more sets...
  ];

  return (
    <main className="bg-[var(--background)] text-[var(--text)] w-full min-h-screen py-6">
      <div className="container max-w-7xl mx-auto px-4 py-4">
        <Navbar />
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-4">
        <div className="w-full flex justify-between items-center text-sm py-4">
          <div className="text-[var(--text)]">
            <a href="/" className="text-[var(--primary)] hover:underline">
              ← Back to Summary
            </a>
          </div>
          <div className="text-[var(--text)]">
            <span className="text-[var(--primary)]">Input Pages</span>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <div className="p-6 bg-[var(--surface)] border border-[var(--gray-light)] shadow-md rounded-xl">
          <p className="text-md sm:text-lg text-[var(--text)] font-semibold mb-6">
            Add Limit Number Set
          </p>

          {/* Step Indicator */}
          <div className="mb-8 flex items-center space-x-3">
            {/* Step 1 */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--primary)] text-white text-sm font-semibold">
                1
              </div>
              <span className="ml-2 text-sm text-[var(--text]">
                Set Limit Type
              </span>
            </div>

            {/* Connection Line */}
            <div className="flex-grow border-t border-[var(--gray-light)]"></div>

            {/* Step 2 */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border border-[var(--gray-light)] text-[var(--text-color)] text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-sm text-[var(--text-color)]">
                Set interesting limit number
              </span>
            </div>
          </div>

          <div className="w-full h-full rounded-xl shadow-md border border-[var(--gray-light)] p-4 text-[var(--text-color)] space-y-6">
            {/* Set Limit Type */}
            <div>
              <h3 className="text-md font-semibold mb-1">Set limit type</h3>
              <p className="text-xs text-gray-500 mb-4">
                How much can be bet and the Payout for each Range
              </p>
            </div>

            {/* Set Name Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium">Set Name</label>
                <span className="text-red-400 text-xs flex items-center">
                  <Icon icon="ic:round-warning" className="h-4 w-4 ml-1" /> This
                  field is required{" "}
                </span>
              </div>
              <input
                type="text"
                className="w-full p-2 rounded border border-[var(--gray-light)] bg-[var(--background)]"
                placeholder="Limit set names"
              />
            </div>

            {/*Drop Downs*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <LimitRangeCard
                title="Three Top"
                initialMaxLimit="5001"
                initialRanges={[
                  { min: "101", max: "1000", payout: "80" },
                  { min: "1001", max: "2000", payout: "60" },
                  { min: "12001", max: "3000", payout: "50" },
                ]}
              />
              <LimitRangeCard
                title="Three Top"
                initialMaxLimit="5001"
                initialRanges={[
                  { min: "101", max: "1000", payout: "80" },
                  { min: "1001", max: "2000", payout: "60" },
                  { min: "12001", max: "3000", payout: "50" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BetLimitInputPages;
