import { useHistory, useLocation } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const Search: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("search");

  const [searchValue, setSearchValue] = useState(query || "");

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);

    setTimeout(() => {
      const searchParams = new URLSearchParams(location.search);

      if (target.value.trim() === "") {
        searchParams.delete("search");
      } else {
        searchParams.set("search", target.value);
      }

      history.push(`${location.pathname}?${searchParams.toString()}`);
    }, 500);
  };

  return (
    <div className="flex-none gap-2">
      <div className="form-control">
        <input
          value={searchValue}
          onChange={onInputChange}
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
    </div>
  );
};
