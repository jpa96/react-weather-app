import './App.css';

import WeatherDisplay from "./WeatherDisplay.js";
import Footer from "./Footer.js"

function App() {
  return (
    <div className="App">
      <div className="container">
      <WeatherDisplay />
      <Footer />
      </div>
    </div>
  );
}

export default App;
