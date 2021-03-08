import "./app.css";
import Header from "./components/header/header";
import ItemContainer from "./components/item_container/item_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App({ requestInfo }) {
  return (
    <div>
      <Header />
      <ItemContainer requestInfo={requestInfo} />
    </div>
  );
}

export default App;
