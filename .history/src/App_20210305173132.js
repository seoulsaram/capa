import "./app.css";
import Header from "./components/header/header";
import ItemContainer from "./components/item_container/item_container";
import RequestBox from "./components/request_box/request_box";

function App({ requestInfo }) {
  return (
    <div>
      <Header />
      <ItemContainer requestInfo={requestInfo} />
    </div>
  );
}

export default App;
