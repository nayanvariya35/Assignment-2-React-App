import "./App.css";
import Header from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Gallery from "./screens/Gallery/Gallery";
import Calculator from "./screens/calculator/Calculator"
import About from "./screens/About/about"
import Res from "./screens/Resources/res"

import Notes from "./screens/Notes/Note";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/cal" element={<Calculator />}></Route>
        <Route path="/note" element={<Notes />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/resources" element={<Res />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
