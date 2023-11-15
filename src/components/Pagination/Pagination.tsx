import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Pagination = () => {
  const history = useHistory();
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    urlPage(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = Math.max(page - 1, 1);
    setPage(prevPage);
    urlPage(prevPage);
  };

  const urlPage = (pageNumber: number) => {
    // Użyj history.push, aby dodać aktualną stronę do URL-a
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
