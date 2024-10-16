import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GenLayOut from "./layouts/GenLayOut";
import Loans from "./pages/Loans";
import Accounts from "./pages/accounts/Accounts";
import Services from "./pages/Services";
import Settings from "./pages/Settings";
import Previlages from "./pages/Previlages";
import Dashboard from "./pages/Dashboard";
import CreditCards from "./pages/creditCard/CreditCards";
import Transactions from "./pages/transactions/Transactions";
import Investments from "./pages/investments/Investments";
import NotFound from "./pages/NotFound";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import AccountCreated from "./components/AccountCreated";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<GenLayOut />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/services" element={<Services />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/previlages" element={<Previlages />} />
            <Route path="/credit-card" element={<CreditCards />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/transactions" element={<Transactions />} />
          </Route>
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/" element={<LogIn/>} />
            <Route path="/_" element={<AccountCreated/>} />
            <Route path="/*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
