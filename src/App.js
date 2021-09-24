import ListComponents from "./components/ListComponents";
import "./css/reset.css";
import "./css/main.scss";
import questList from "./json/Qlist";
function App() {
  return (
    <div id="bodyContainer">
      <ListComponents questList={questList} />
    </div>
  );
}

export default App;
