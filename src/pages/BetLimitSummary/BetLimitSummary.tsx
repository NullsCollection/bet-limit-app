import BetLimitCard from "../../components/cards/BetLimitCard";
import LimitedNumber from "../../components/cards/LimitedNumber";
import Navbar from "../../components/navigation/Navbar";

const BetLimitSummary = () => {
  const dummyData = [
    {
      title: "Three Top",
      maxLimit: 5000,
      rows: [
        { min: 101, max: 1000, payout: 80, status: "Set" },
        { min: 1001, max: 2000, payout: 60, status: "Set" },
        { min: 12001, max: 3000, payout: 50, status: "Set" },
      ],
    },
    {
      title: "Three Front",
      maxLimit: 5001,
      rows: [{ min: 1000, max: 5000, payout: 70, status: "Set" }],
    },
    {
      title: "Three Digit Back",
      maxLimit: 5001,
      rows: [{ min: 1000, max: 5000, payout: 70, status: "Set" }],
    },
    {
      title: "Three Digit Flip",
      maxLimit: 5001,
      rows: [{ min: 1000, max: 5000, payout: 70, status: "Set" }],
    },
    {
      title: "Three Under",
      maxLimit: 5001,
      rows: [{ min: 1000, max: 5000, payout: 70, status: "Set" }],
    },
    {
      title: "Two Top",
      maxLimit: 0,
      rows: [{ min: 0, max: 0, payout: 0, status: "Set" }],
    },
    {
      title: "Two Under",
      maxLimit: 0,
      rows: [{ min: 0, max: 0, payout: 0, status: "Set" }],
    },
    {
      title: "Two Digit Flip",
      maxLimit: 5001,
      rows: [{ min: 1000, max: 5000, payout: 70, status: "Set" }],
    },
    {
      title: "Run Top",
      maxLimit: 5001,
      rows: [{ min: 1000, max: 5000, payout: 70, status: "Set" }],
    },
    {
      title: "Run Under",
      maxLimit: 5001,
      rows: [{ min: 1000, max: 5000, payout: 70, status: "Set" }],
    },
  ];

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
              {dummyData.map((data, i) => (
                <BetLimitCard
                  key={i}
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
