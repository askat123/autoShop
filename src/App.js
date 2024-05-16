import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import PartDetail from "./pages/Home/Products/partDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/partDetail/:partId",
    element: <PartDetail />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
