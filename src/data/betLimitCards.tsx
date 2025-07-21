// Bet limit card definitions
// This file contains all the limit range card data used in the input pages

export type LimitRange = {
  min: string;
  max: string;
  payout: string;
};

export type BetLimitCardData = {
  title: string;
  initialMaxLimit: string;
  initialRanges: LimitRange[];
};

// Default data for limit cards
export const betLimitCards: BetLimitCardData[] = [
  {
    title: "Three Top",
    initialMaxLimit: "5001",
    initialRanges: [
      { min: "101", max: "1000", payout: "80" },
      { min: "1001", max: "2000", payout: "60" },
      { min: "12001", max: "3000", payout: "50" },
    ],
  },
  {
    title: "Two Top",
    initialMaxLimit: "0",
    initialRanges: [{ min: "0", max: "0", payout: "0" }],
  },
  {
    title: "Three Front",
    initialMaxLimit: "5001",
    initialRanges: [{ min: "1000", max: "5000", payout: "50" }],
  },
  {
    title: "Two Under",
    initialMaxLimit: "0",
    initialRanges: [{ min: "0", max: "0", payout: "0" }],
  },
  {
    title: "Three Digit Back",
    initialMaxLimit: "5001",
    initialRanges: [{ min: "1000", max: "5000", payout: "50" }],
  },
  {
    title: "Two Digit Flip",
    initialMaxLimit: "5001",
    initialRanges: [{ min: "1000", max: "5000", payout: "50" }],
  },
  {
    title: "Three Digit Flip",
    initialMaxLimit: "5001",
    initialRanges: [{ min: "1000", max: "5000", payout: "50" }],
  },
  {
    title: "Run Top",
    initialMaxLimit: "5001",
    initialRanges: [{ min: "1000", max: "5000", payout: "50" }],
  },
  {
    title: "Three Under",
    initialMaxLimit: "5001",
    initialRanges: [{ min: "1000", max: "5000", payout: "50" }],
  },
  {
    title: "Run Under",
    initialMaxLimit: "5001",
    initialRanges: [{ min: "1000", max: "5000", payout: "50" }],
  },
];
