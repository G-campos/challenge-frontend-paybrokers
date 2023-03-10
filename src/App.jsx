import {useEffect} from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import AuthPage from "./pages/auth";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import ProfilePage from "./pages/profile/index.jsx";
import SettingsPage from "./pages/settings/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<AuthPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="products" element={<ProductsPage/>} />
        <Route path="profile" element={<ProfilePage/>} />
        <Route path="settings" element={<SettingsPage/>} />
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
