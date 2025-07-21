import { BrowserRouter, Routes, Route } from "react-router-dom";
import BetLimitSummary from "./pages/BetLimitSummary/BetLimitSummary";
import BetLimitInputPages from "./pages/InputPages/BetLimitInputPages";
import LimitedNumber from "./pages/InputPages/LimitedNumber";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BetLimitSummary />} />
        <Route path="/input-pages" element={<BetLimitInputPages />} />
        <Route path="/limited-number" element={<LimitedNumber />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
