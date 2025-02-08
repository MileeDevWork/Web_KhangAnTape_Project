import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import News from "./pages/news";
import Product_list from "./pages/product_list";
import MasterLayout from "./components/masterLayout";
function App() {
  return (
    <div>
      <BrowserRouter>
      <MasterLayout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/product_list" element={<Product_list />} />
        </Routes>
      </MasterLayout>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
