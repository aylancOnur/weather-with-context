import Dropdown from "./components/Dropdown";
import WeatherContainer from "./components/WeatherContainer";
import { CityNameProvider } from "./context/CityContext";

function App() {
  return (
    <div>
      <CityNameProvider>
        <Dropdown />
        <WeatherContainer />
      </CityNameProvider>
    </div>
  );
}

export default App;
