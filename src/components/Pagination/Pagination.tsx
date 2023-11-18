import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Pagination = () => {
  const [page, setPage] = useState(1);
  const history = useHistory();

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
