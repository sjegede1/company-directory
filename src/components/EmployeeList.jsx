import React from "react";
import users from "../models/users";
import { useContext } from "react";
import { AppContext } from "../contexts/app_context";

function EmployeeList() {
  const {selectEmployee} = useContext(AppContext)

  const createEmployeeListItem = (employee) => {
    return (
      <div className="employee-list-item" onClick={selectEmployee} key={employee.id}>
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
