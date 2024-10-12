import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <nav
      aria-label="Page Navigation"
      className="flex justify-end items-center mt-6 mb-3 "
    >
      <span
        className={`py-2 px-4 hover:font-bold leading-tight text-[#1814F3] bg-[#FFFFFF00] flex items-center gap-1 cursor-pointer   ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaAngleLeft />
        <p>Previous</p>
      </span>
      <span className="flex gap-1">
        <button>
          <p className="bg-[#1814F3] text-white font-semibold py-1 p-2 rounded-md">
            1
          </p>
        </button>
        <button>
          <p className=" text-[#1814F3] font-semibold py-1 p-2 rounded-md">
            2
          </p>
        </button>
        <button>
          <p className=" text-[#1814F3] font-semibold py-1 p-2 rounded-md">
            3
          </p>
        </button>
      </span>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`mx-1 px-4 py-2 rounded ${
            currentPage === index + 1
              ? "bg-[#1814F3] text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <span
        className={`py-2 px-4 hover:font-bold leading-tight text-[#1814F3] bg-[#FFFFFF00] flex items-center gap-1 cursor-pointer   ${
          currentPage === totalPages ? "opacity-50" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <p>Next</p>
        <FaAngleRight />
      </span>
      {/* <button
        className={`py-2 px-4 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </button> */}
    </nav>
  );
};

export default Pagination;
