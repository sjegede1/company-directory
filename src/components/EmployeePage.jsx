import React from "react";

function EmployeePage(props) {
    if (props.currentProfile === {}) {
        return <></>
    }
  return (
    <div className="employee-page">
      <h1>Employee</h1>

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
