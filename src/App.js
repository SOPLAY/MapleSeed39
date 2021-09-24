import React, { useContext } from "react";
import ListComponents from "./components/ListComponents";
import "./css/reset.css";
import "./css/main.scss";
import questListJson from "./json/Qlist";
import SearchForm from "./components/SearchForm";
function App() {
  return (
    <div id="bodyContainer">
      <SearchForm questList={questListJson} />
    </div>
  );
}

export default App;
