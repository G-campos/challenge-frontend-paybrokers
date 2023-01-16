import { createBrowserRouter} from "react-router-dom";

import AuthPage from "../pages/auth";
import HomePage from "../pages/home";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },

]);

export default routes