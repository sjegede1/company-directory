import React from "react";

function EmployeePage(props) {
  if (props.currentProfile === {}) {
    return <></>;
  }

  const closeEmployeePage = () => {
    document.querySelector(".employee-page").classList.toggle("close-employee-page")
    let backButton = document.querySelector("#back-button");
    
  }

  return (
    <div className="employee-page">
      <h1 className="employee-title">
        <button id="back-button" onClick={closeEmployeePage}> {">"} </button>
        Employee
      </h1>

      <div className="employee-info">
        <h2>{props.currentProfile.name}</h2>
        <p>{props.currentProfile.website}</p>
        <br />
        <h3>Phone</h3>
        <p>{props.currentProfile.phone}</p>
        <br />
        <h3>Email</h3>
        <p>{props.currentProfile.email}</p>
      </div>
    </div>
  );
}

export default EmployeePage;
