import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <nav
      aria-label="Page Navigation"
      className="flex justify-end items-center mt-6 mb-3"
    >
      {/* Previous Button */}
      <button
        className={`py-2 px-4 flex items-center gap-1 cursor-pointer leading-tight text-[#1814F3] bg-transparent hover:font-bold ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        <FaAngleLeft />
        <span>Previous</span>
      </button>

      {/* Page Number Buttons */}
      <div className="flex gap-1">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-1 px-4 py-2 rounded font-semibold ${
              currentPage === index + 1
                ? "bg-[#1814F3] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handlePageChange(index + 1)}
            aria-current={currentPage === index + 1 ? "page" : undefined}
            aria-label={`Page ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        className={`py-2 px-4 flex items-center gap-1 cursor-pointer leading-tight text-[#1814F3] bg-transparent hover:font-bold ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        <span>Next</span>
        <FaAngleRight />
      </button>
    </nav>
  );
};

export default Pagination;
