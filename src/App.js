import users from "./models/users";
import "./App.css";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import { useContext } from "react";
import { AppContext } from "./contexts/app_context";

function App() {
  const { currentProfile, setCurrentProfile, grabCurrentProfile } =
    useContext(AppContext);

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
      <HomePage />
      <EmployeePage />
    </div>
  );
}

export default App;
