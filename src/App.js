// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Information from "./Components/Information";
import Home from "./Components/Home";


function App() {

 

  return (
    <div>
      <Router>
      <h1 className="text-center font-serif text-3xl">農家の移動記録アプリ</h1>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/information" element={<Information />} />
       </Routes>
      </Router>
      
    </div>
  );
}

export default App;
