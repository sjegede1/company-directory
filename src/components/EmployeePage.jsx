import React from "react";
import { useContext } from "react";
import { AppContext } from "../contexts/app_context";

function EmployeePage() {
  const {currentProfile} = useContext(AppContext);

  if (currentProfile === {}) {
    return <></>;
  }

  return (
    <div className="employee-page">
      <h1 className="employee-title">
        Employee
      </h1>

      <div className="employee-info">
        <img src={currentProfile.img} alt="" className="profile-page-img" />

        <h2>{currentProfile.name}</h2>
        <p>{currentProfile.website}</p>
        <h3>Phone</h3>
        <p>{currentProfile.phone}</p>
        <h3>Email</h3>
        <p>{currentProfile.email}</p>
      </div>
    </div>
  );
}

export default EmployeePage;
