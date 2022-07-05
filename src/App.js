import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Commercial from "./pages/ProjectType/Commercial";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/commercial" element={<Commercial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
