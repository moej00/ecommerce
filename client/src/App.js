import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to={"/"} /> : <Register />}
        />
        <Route path="/product/:id" element={<Product />} />

        <Route path="/prducts/category" element={<ProductList />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
