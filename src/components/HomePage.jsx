import React from "react";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";

function HomePage(props) {

  return (
    <div className="home-page">
      <h1>Employee Directory</h1>

      <SearchBar funcs={props.funcs}/>

      <EmployeeList />
    </div>
  );
}

export default HomePage;
