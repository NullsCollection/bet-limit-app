import { BrowserRouter, Routes, Route } from "react-router-dom";
import BetLimitSummary from "./pages/BetLimitSummary/BetLimitSummary";
import "./styles/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BetLimitSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
