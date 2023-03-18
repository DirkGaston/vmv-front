import { useState } from "react";

const UsePagination = (data, perPage, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(data.length / perPage);

  const currentData = data.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const goToPage = (page) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    totalPages,
    currentData,
    goToPage,
  };
};

export default UsePagination;
