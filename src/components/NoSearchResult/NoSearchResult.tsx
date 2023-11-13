import noResult from "../../images/noResult.png";

export const NoSearchResult = () => {
  return (
    <>
      <div className="flex-row justify-center align-middle">
        <div className="text-white text-xl text-center">BRAK WYNIKÓW WYSZUKIWANIA</div>
        <img src={noResult} alt="no result" />
      </div>
    </>
  );
};
