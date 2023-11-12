import { useHistory, useLocation } from "react-router-dom";
import { ChangeEvent } from "react";

export const Search: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("search");

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="flex-none gap-2">
      <div className="form-control">
        <input
          value={query || ""}
          onChange={onInputChange}
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
    </div>
  );
};
