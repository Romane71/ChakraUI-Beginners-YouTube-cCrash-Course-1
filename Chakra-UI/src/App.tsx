import "./App.css";
import { Header } from "./components/Header";
import { Pricing } from "./components/Pricing";
import { CheckIcon } from "./Icons/Icon";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CheckIcon></CheckIcon>

      <Pricing></Pricing>
    </div>
  );
}

export default App;
