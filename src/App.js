import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Commercial from "./pages/ProjectType/Commercial";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactForm from "./components/ContactForm";
import SingleProject from "./components/Project/SingleProject";
import Residential from "./pages/ProjectType/Residential";
import Healthcare from "./pages/ProjectType/Healthcare";
import Interior from "./pages/ProjectType/Interior";
import Team from "./pages/Team";
import ScopeOfWork from "./pages/ScopeOfWork";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/scope-of-work" element={<ScopeOfWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-form" element={<ContactForm />} />
          <Route path="/project/:id" element={<SingleProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
