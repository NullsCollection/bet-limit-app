// React import not needed with modern JSX transform
import Navbar from "../../components/navigation/Navbar";

const LimitedNumber = () => {
  return (
    <main className="bg-[var(--background)] text-[var(--text)] w-full min-h-screen py-6">
      <div className="container max-w-7xl mx-auto px-4 py-4 ">
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
            <span className="text-[var(--primary)]">Limited Number</span>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <div className="p-6 bg-[var(--surface)] border border-[var(--gray-light)] shadow-md rounded-xl">
          <div className="p-6 bg-[var(--surface)] border border-[var(--gray-light)] shadow-md rounded-xl"></div>
        </div>
      </div>
    </main>
  );
};

export default LimitedNumber;
