import { Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Signin from "./pages/Login/Signin";
import Signout from "./pages/Login/Signout";
import Signup from "./pages/Login/Signup";
import "./app.scss";

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Products/:id",
        element: <Products />,
      },
      {
        path: "/Product/:id",
        element: <Product />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signout",
        element: <Signout />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

const loadingMarkup = (
  <div className='py-4 text-center'>
    <h3>Loading..</h3>
  </div>
);

function App() {
  return (
    <div>
      <Suspense fallback={loadingMarkup}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
