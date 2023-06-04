import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import AllCharacters from "./pages/allCharacters";
import Detail from "./pages/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <AllCharacters />
      },
      {
        path: "characters/:id",
        element: <Detail />
      }
    ]
  }
]);

export default router;
