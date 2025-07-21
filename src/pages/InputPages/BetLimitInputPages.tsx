import Navbar from "../../components/navigation/Navbar";
import { Icon } from "@iconify/react";
import LimitRangeCard from "../../components/form/LimitRangeCard";
import { betLimitCards } from "../../data/betLimitCards";

const BetLimitInputPages = () => {
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
            <a href="/limited-number" className="text-[var(--primary)] hover:underline">
              Next pages
            </a>
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
              <h3 className="text-lg font-semibold mb-1">Set limit type</h3>
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
                className="w-full p-2 rounded border border-[var(--gray-light)]"
                placeholder="Limit set names"
              />
            </div>

            {/*Drop Downs*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {betLimitCards.map((card, index) => (
                <LimitRangeCard
                  key={index}
                  title={card.title}
                  initialMaxLimit={card.initialMaxLimit}
                  initialRanges={card.initialRanges}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                className="px-6 py-2 bg-[var(--gray-light)] border border-[var(--gray-light)] text-[var(--text)] rounded-md"
                onClick={() => window.location.href = '/'}
              >
                Back
              </button>
              <button
                className="px-6 py-2 bg-[var(--primary)] text-white rounded-md"
                onClick={() => window.location.href = '/limited-number'}
              >
                Next
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default BetLimitInputPages;
