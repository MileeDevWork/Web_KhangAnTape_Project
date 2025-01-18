import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header_logout"; // Đảm bảo bạn đã import đúng Header
import Home from "./pages/home"; // Đảm bảo bạn đã import đúng trang Home
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
    </div>
  );
}

export default App;
