import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header_logout"; 
import Footer from "./components/footer";
import Home from "./pages/home"; 
import About from "./pages/about";

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
