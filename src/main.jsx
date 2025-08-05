import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Error from "./components/Error/Error.jsx";
import Main from "./components/Main/Main.jsx";
import Cart from "./components/Cart/Cart.jsx";
import RestaurantMenu from "./components/Restaurant Menu/RestaurantMenu.jsx";
// import Grocery from "./components/Grocery.jsx";

// lazy loading
const Grocery = lazy(() => import("./components/Grocery.jsx") )

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading......</h1>} > <Grocery /> </Suspense>
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={approuter} />
  </StrictMode>
);
