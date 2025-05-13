import { BrowserRouter, Routes, Route } from "react-router-dom";
import BetLimitSummary from "./pages/BetLimitSummary/BetLimitSummary";
import BetLimitInputPages from "./pages/InputPages/BetLimitInputPages";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BetLimitSummary />} />
        <Route path="/input-pages" element={<BetLimitInputPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
