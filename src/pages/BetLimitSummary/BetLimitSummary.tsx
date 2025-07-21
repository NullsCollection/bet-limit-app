import BetLimitCard from "../../components/cards/BetLimitCard";
import LimitedNumber from "../../components/cards/LimitedNumber";
import Navbar from "../../components/navigation/Navbar";
import { betLimitSummaryData } from "../../data/betLimitSummaryData";

const BetLimitSummary = () => {

  return (
    <main className="bg-[var(--background)] text-[var(--text)] w-full min-h-screen py-6">
      <div className="container max-w-7xl mx-auto px-4 py-4 ">
        <Navbar />
      </div>
      <div className="container max-w-7xl mx-auto px-4 py-4">
        <div className="w-full flex justify-between items-center text-sm py-4">
          <div className="text-[var(--text)]">
            <span className="text-[var(--primary)]">Limit number set </span>/
            View limit number set
          </div>
          <div>
            <a href="/input-pages" className="text-[var(--primary)] hover:underline">
              Goto Input Pages →
            </a>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <div className="p-4 sm:p-4 bg-[var(--surface)] border border-[var(--gray-light)] shadow-md rounded-xl">
          <p className="text-md sm:text-lg text-[var(--text)] font-bold mb-6">
            Limit Number Set
          </p>
          {/*Bet Limit Cards*/}
          <div className="p-4 sm:p-4 border border-[var(--gray-light)] shadow-md rounded-xl">
            <p className="text-md sm:text-lg text-[var(--text)] font-semibold mb-6">
              Name :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
              {betLimitSummaryData.map((data, index) => (
                <BetLimitCard
                  key={index}
                  title={data.title}
                  maxLimit={data.maxLimit}
                  rows={data.rows}
                />
              ))}
            </div>
          </div>

          {/*Limited Numbers*/}
          <div className="pt-4">
            <LimitedNumber
              limitTitle="Limited number 222"
              maxLimit={0}
              types={[
                "Three Top",
                "Three Under",
                "Three Front",
                "3 Digit Flip",
              ]}
              rows={[{ min: 1000, max: 5000, payout: 50, status: "Set" }]}
            />
          </div>
          {/*Limited Numbers*/}
          <div className="pt-4">
            <LimitedNumber
              limitTitle="Limited number 001"
              maxLimit={0}
              types={[
                "Three Top",
                "Three Under",
                "Three Front",
                "3 Digit Flip",
              ]}
              rows={[{ min: 1000, max: 5000, payout: 50, status: "Set" }]}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BetLimitSummary;
