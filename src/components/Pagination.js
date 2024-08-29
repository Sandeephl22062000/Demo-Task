import React from "react";
import DownSlimArrow from "../icons/DownSlimArrow";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const startItem = (currentPage - 1) * 12 + 1;
  const endItem = Math.min(currentPage * 12, totalPages * 12);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between my-4 border-2 px-4 py-2 rounded-md">
      <div className="text-gray-600 hidden md:flex">
        <span className="px-1">Showing</span>
        <span className="font-semibold">{startItem}</span>-
        <span className="font-semibold pr-1">{endItem}</span>
        of
        <span className="font-semibold px-1">{totalPages * 12}</span>
      </div>

      <div className="flex">
        <button
          className={`px-4 py-1 rounded-l-md border border-r-0 min-w-24 ${
            currentPage === 1 ? "text-gray-400" : "text-gray-500"
          }`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className={`px-4 py-1 rounded-r-md border min-w-24 ${
            currentPage === totalPages ? "text-gray-400" : "text-gray-500"
          }`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <div className="border border-gray-300 rounded-lg flex items-center p-1 hidden lg:flex">
        <button
          className="px-3 py-1 text-gray-500 border-r border-gray-300 last:border-r-0"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <DownSlimArrow
            height={22}
            width={22}
            color="text-gray-500"
            transform="rotate(90 24 24)"
          />
        </button>

        {pageNumbers.slice(0, 5).map((pageNum) => (
          <button
            key={pageNum}
            className={`px-3 py-1 ${
              pageNum === currentPage ? "bg-gray-300" : "text-gray-500"
            } border-r border-gray-300 last:border-r-0`}
            onClick={() => onPageChange(pageNum)}
          >
            {pageNum}
          </button>
        ))}

        {totalPages > 5 && (
          <span className="px-3 py-1 text-gray-500 border-r border-gray-300 last:border-r-0">
            ...
          </span>
        )}

        {totalPages > 1 && (
          <button
            className="px-3 py-1 text-gray-500"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        )}
        <button
          className="px-3 py-1 text-gray-500"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <DownSlimArrow
            height={22}
            width={22}
            color="text-gray-500"
            transform="rotate(270 24 24)"
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
