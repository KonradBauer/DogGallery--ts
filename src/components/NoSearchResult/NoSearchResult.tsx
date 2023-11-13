import noResult from "../../images/noResult.png";

export const NoSearchResult = () => {
  return (
    <>
      <div className="flex-row justify-center align-middle">
        <div className="text-white text-xl text-center">No search results</div>
        <img src={noResult} alt="no result" />
      </div>
    </>
  );
};
