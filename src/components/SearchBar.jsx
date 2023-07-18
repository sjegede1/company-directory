import React from "react";

function SearchBar(props) {
  const { setCurrentProfile, grabCurrentProfile } = props.funcs;
  // document.addEventListener("click",(event) => {
  //     if (event.target.id === "submit-search") {
  //         let searchInfo = document.querySelector("#search-info").
  //         console.log(searchInfo)
  //         // setCurrentProfile(grabCurrentProfile(searchInfo))
  //     }
  // })

  const submitData = () => {
    let searchInfo = document.querySelector("#search-info").value;
    setCurrentProfile(grabCurrentProfile(searchInfo))
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search.."
        name="search"
        id="search-info"
      />
      <button type="submit" id="submit-search" onClick={submitData}>
        Submit
      </button>
    </div>
  );
}

export default SearchBar;
