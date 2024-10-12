import { useLocation } from "react-router-dom";

const PagesTitle = () => {
  const location = useLocation();

  const currentPage = location.pathname.split("/")[1] || "dashboard"; // Default to 'dashboard'

  const pageTitlesMap = {
    "dashboard": "overview",
    "transactions": "transactions",
    "accounts": "accounts",
    "investments": "investments",
    "credit-card": "credit card",
    "loans": "loans",
    "services": "services",
    "previlages": "my previlages",
    "settings": "settings",
  };

  const pageTitle = pageTitlesMap[currentPage] || "Page Not Found";

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <h1 className="text-[1.5625rem] font-bold text-[#343C6A]">{capitalizeWords(pageTitle)}</h1>
  );
};

export default PagesTitle;
