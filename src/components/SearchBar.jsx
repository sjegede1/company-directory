import React, { useContext } from "react";
import { AppContext } from "../contexts/app_context";

function SearchBar() {
  const { setCurrentProfile,grabCurrentProfile } = useContext(AppContext);

  const submitData = (event) => {
    event.preventDefault();
    let searchInfo = document.querySelector("#search-info").value;
    setCurrentProfile(grabCurrentProfile(searchInfo));
    console.log("submit");
  };
  return (
    <form className="search-bar" onSubmit={submitData}>
      <input
        type="text"
        placeholder="Search.."
        name="search"
        id="search-info"
      />
      <input type="submit" id="submit-search" value="Submit" />
    </form>
  );
}

export default SearchBar;
