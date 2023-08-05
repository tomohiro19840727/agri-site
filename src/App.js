// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Information from "./Components/Information";
import Home from "./Components/Home";
import MenuBar from "./Components/MenuBar";
import About from "./Components/About";
import Work from "./Components/Work";
import Manegement from "./Components/Manegement";
import Table from "./Components/Table";


function App() {

 

  return (
    <div>
      <Router>
      <MenuBar />
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/information" element={<Information />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/manegement" element={<Manegement />} />
      <Route path="/table" element={<Table />} />
       </Routes>
      </Router>
      
    </div>
  );
}

export default App;
