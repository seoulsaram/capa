import "./app.css";
import Header from "./components/header/header";
import ItemContainer from "./components/item_container/item_container";
import "@fortawesome/fontawesome-free/js/all.js";

function App({ requestInfo }) {
  return (
    <div>
      <Header />
      <ItemContainer requestInfo={requestInfo} />
    </div>
  );
}

export default App;
