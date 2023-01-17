import {useEffect} from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import AuthPage from "./pages/auth";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<AuthPage />} />
        <Route
          path="home"
          element={<HomePage />}
        />
        <Route
          path="products"
          element={<ProductsPage/>}
        />
        <Route path="*" index element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

function Page404() {
  return <div>
    <h2>404 Page not found</h2>
  </div>;
}

export default App
