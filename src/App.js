import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
