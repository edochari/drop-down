import { DropDown } from "./dropdown";

function App() {
  const items=['yes','no','probablynot']
  return (
    <div className="App">
        <DropDown items={items}/>
    </div>
  );
}

export default App;
