import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
      <div className="App">
        <Nav />
        <Home />
        <Footer />
      </div>
  );
}

export default App;
