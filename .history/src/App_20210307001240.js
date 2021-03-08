import "./app.css";
import Header from "./components/header/header";
import ItemContainer from "./components/item_container/item_container";
import "@fortawesome/react-fontawesome/index.js";

function App({ requestInfo }) {
  return (
    <div>
      <Header />
      <ItemContainer requestInfo={requestInfo} />
    </div>
  );
}

export default App;
