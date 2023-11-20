import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PaginationProps {
  onPageChange: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
  const location = useLocation();
  const [page, setPage] = useState(() => {
    const searchParams = new URLSearchParams(location.search);
    return parseInt(searchParams.get("page") || "1", 10);
  });

  useEffect(() => {
    onPageChange(page);
  }, [page]);

  const handleNextPage = () => {
    setPage((nextPage) => nextPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="join bg-neutral flex justify-center py-2 rounded-none">
      <button onClick={handlePrevPage} disabled={page === 1} className="join-item btn">
        «
      </button>
      <button className="join-item btn">Page {page}</button>
      <button onClick={handleNextPage} className="join-item btn">
        »
      </button>
    </div>
  );
};
