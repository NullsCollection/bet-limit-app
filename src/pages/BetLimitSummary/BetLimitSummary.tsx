import BetLimitCard from "../../components/cards/BetLimitCard";

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
      maxLimit: 3000,
      rows: [
        { min: 50, max: 500, payout: 75, status: "Set" },
        { min: 501, max: 1500, payout: 65, status: "Set" },
        { min: 1501, max: 2500, payout: 55, status: "Set" },
      ],
    },
    {
      title: "Three Digit Flip",
      maxLimit: 3000,
      rows: [
        { min: 50, max: 500, payout: 75, status: "Set" },
        { min: 501, max: 1500, payout: 65, status: "Set" },
        { min: 1501, max: 2500, payout: 55, status: "Set" },
      ],
    },
  ];

  return (
    <main className="bg-[var(--color-bgColor)] w-full min-h-screen py-6">
      <div className="container max-w-7xl mx-auto px-4">
        <h1 className="text-xl sm:text-2xl font-bold mb-6">
          Bet Limit Summary
        </h1>

        <div className="p-4 sm:p-6 bg-white border border-[var(--color-lightGray)] shadow-md rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </div>
    </main>
  );
};

export default BetLimitSummary;
