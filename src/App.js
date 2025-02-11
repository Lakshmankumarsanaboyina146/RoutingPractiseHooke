import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import BlogItemDetails from "./components/BlogItemDetails";

import "./App.css";

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<NotFound />} />
          <Route path="/blogs/:id" element={<BlogItemDetails />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
