import ArrowLeftIcon from "../../Icons/ArrowLeftIcon";
import ArrowRightIcon from "../../Icons/ArrowRightIcon";

const PaginationButtons = ({ goToPage, currentPage, totalPages }) => {
  if (totalPages === 1) {
    return null;
  }

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  return (
    <div className="flex justify-center mt-4">
      {hasPreviousPage && (
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer mr-7"
          onClick={() => goToPage(currentPage - 1)}
        >
          <ArrowLeftIcon />
          Anterior
        </button>
      )}

      {hasNextPage && (
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
          onClick={() => goToPage(currentPage + 1)}
        >
          Próximo
          <ArrowRightIcon />
        </button>
      )}
    </div>
  );
};

export default PaginationButtons;
