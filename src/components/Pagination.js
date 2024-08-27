const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center my-4">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className={`bg-darkBlack min-w-24 ${currentPage === 1 ? 'bg-gray-600' : 'bg-darkBlack hover:bg-gray-700'} text-white p-2 rounded-lg mx-1`}
    >
      Previous
    </button>
    <span className="text-white mx-2">{currentPage} / {totalPages}</span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`bg-darkBlack min-w-24 ${currentPage === totalPages ? 'bg-gray-600' : 'bg-darkBlack hover:bg-gray-700'} text-white p-2 rounded-lg mx-1`}
    >
      Next
    </button>
  </div>
);

export default Pagination;
