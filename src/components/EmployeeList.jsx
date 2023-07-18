import React from "react";
import users from "../models/users";

function EmployeeList() {
  const createEmployeeListItem = (employee) => {
    return (
      <div className="employee-list-item" key={employee.id}>
        <h3>{employee.name}</h3>
        <p>{employee.email}</p>
      </div>
    );
  };

  return (
    <div className="employee-list">{users.map(createEmployeeListItem)}</div>
  );
}

export default EmployeeList;
