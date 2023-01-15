import AuthPage from "../pages/auth";

import { createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: { AuthPage },
    children: {

    }
  },
]);

export default router