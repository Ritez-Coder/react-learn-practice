import ConditionalRendering from "./quick_concept/ConditionalRendering";
import DisplayData from "./quick_concept/DisplayData";
import EventResponding from "./quick_concept/EventResponding";
import ListRendering from "./quick_concept/ListRendering";
import UpdatingScreen from "./quick_concept/UpdatingScreen";
import SharingDataBetweenComponents from "./quick_concept/SharingDataBetweenComponents";
function App() {
  return (
    <div className="App">
      < DisplayData />
      <hr />
      < ConditionalRendering/>
      <hr />
      < ListRendering/>
      <hr />
      < EventResponding />
      <hr />
      < UpdatingScreen />
      <hr />
      < UpdatingScreen />
      <hr />
       < SharingDataBetweenComponents />
       <hr />
    </div>
  );
}

export default App;
