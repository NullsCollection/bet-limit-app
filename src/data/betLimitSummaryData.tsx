// Bet limit summary data
// This file contains all the bet limit summary data for display purposes

export type BetLimitRow = {
  min: number;
  max: number;
  payout: number;
  status: string;
};

export type BetLimitSummaryItem = {
  title: string;
  maxLimit: number;
  rows: BetLimitRow[];
};

// Summary data for bet limits 
export const betLimitSummaryData: BetLimitSummaryItem[] = [
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
