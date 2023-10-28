import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home/> */}
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
