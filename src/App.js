import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <>
    <Router>
    <div className="App">
      
        <Header />
        <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/about" element={<About />} />
          
        </Routes>
        <Footer />
     
    </div>
    </Router>
    </>
    
  );
}

export default App;
