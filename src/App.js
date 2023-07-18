import users from "./models/users";
import "./App.css";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import { useState } from "react";

function App() {
  const [currentProfile, setCurrentProfile] = useState({});

  const grabCurrentProfile = (userName) => {
    return users.filter(user => user.name.toLowerCase().includes(userName.toLowerCase()))[0]
  }

  //Utility function
  const selectEmployee = (event) => {
    if (event.target.classList.contains("employee-list-item")) {
      let userName = event.target.firstChild.innerHTML;
      setCurrentProfile(grabCurrentProfile(userName));
    }
  };

  document.addEventListener("click", selectEmployee);

  return (
    <div className="App">
      <HomePage funcs={{setCurrentProfile,grabCurrentProfile}}/>

      <EmployeePage currentProfile={currentProfile} />
    </div>
  );
}

export default App;
