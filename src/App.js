// import InsertDataView from "./ui/views/InsertData/index";
import Navbar from "./ui/views/Navbar";
import InsertRunData from "./ui/views/InsertData/index";
function App() {
  return (
    <>
      <div className="columns is-mobile">
        <div className="column has-background-light"></div>
        <div className="column is-four-fifths ">
          <Navbar />
          <InsertRunData />
        </div>
        <div className="column has-background-light"></div>
      </div>
    </>
  );
}

export default App;
