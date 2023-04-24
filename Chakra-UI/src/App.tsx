import "./App.css";
import { Header } from "./components/Header";
import { Pricing } from "./components/Pricing";
import { Features } from "./components/Features";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Features></Features>

      <Pricing></Pricing>
    </div>
  );
}

export default App;
