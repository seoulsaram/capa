import "./app.css";
import Header from "./components/header/header";
import RequestBox from "./components/request_box/request_box";

function App({ requestInfo }) {
  return (
    <div className="App">
      <Header />
      <RequestBox />
    </div>
  );
}

export default App;
