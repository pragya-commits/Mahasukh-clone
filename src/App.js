import "./App.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Qualities from "./components/Qualities";
import Ourjourney from "./components/Ourjourney";
import Teagrades from "./components/Teagrades";
import Distributor from "./components/Distributor";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <Qualities></Qualities>
      <Ourjourney></Ourjourney>
      <Teagrades></Teagrades>
    //  <Distributor></Distributor>
    </>
  );
}

export default App;
