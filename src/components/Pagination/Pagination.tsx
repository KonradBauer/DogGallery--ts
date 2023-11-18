import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

interface PaginationProps {
  onPageChange: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
  const location = useLocation();
  const [page, setPage] = useState(() => {
    const searchParams = new URLSearchParams(location.search);
    return parseInt(searchParams.get("page") || "1", 10);
  });
  const history = useHistory();

  useEffect(() => {
    onPageChange(page);
  }, [page, onPageChange]);

  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    pageUrl(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = page - 1;
    setPage(prevPage);
    pageUrl(prevPage);
  };

  const pageUrl = (pageNumber: number) => {
    history.push(`?page=${pageNumber}`);
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
