import './App.css';

import Header from "./Header.js";
import WeatherDisplay from "./WeatherDisplay.js";
import Footer from "./Footer.js"

function App() {
  return (
    <div className="App">
      <div className="container">
      <Header />
      <WeatherDisplay />
      <Footer />
      </div>
    </div>
  );
}

export default App;
