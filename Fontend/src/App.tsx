import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header_logout"; 
import Footer from "./components/footer";
import Home from "./pages/home"; 
import About from "./pages/about";

function App() {
  return (
    <div>
      {/* <Header/> */}
      <BrowserRouter>
      {/* <Header/>  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
