import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Services from "./pages/Services";
import "animate.css";
import ProductDetail from "./pages/ProductDetail/index";
import CreatePage from "./pages/CreatePage";
import ProductUpdate from "./pages/ProductUpdate/index";
import LoginPage from "./pages/LoginPage";
import ProductProvider from "./shared_components/utilities/productContext";
import Cart from "./pages/Cart/index";
import AuthProvider from "./shared_components/utilities/AuthProvider";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ProductProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/productDetail/:id" element={<ProductDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/article" element={<Article />} />
              <Route path="/about" element={<About />} />
              <Route path="/createPage" element={<CreatePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/productUpdate/:id" element={<ProductUpdate />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
