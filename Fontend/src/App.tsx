import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/header_logout"; 
// import Footer from "./components/footer";
import Home from "./pages/home"; 
import About from "./pages/about";
import Contact from "./pages/contact";
import News from "./pages/news";
import Product_list from "./pages/product_list";

function App() {
  return (
    <div>
      {/* <Header/> */}
      <BrowserRouter>
      {/* <Header/>  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/product_list" element={<Product_list />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
