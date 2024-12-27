import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart"



const Offers = lazy(() => import("./components/Offers"))



const AppLayout = () => {
  return (
    <Provider store={appStore} >
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />,
        }, {
          path: "/offer",
          element: <Suspense fallback={<h1>Loading</h1>}> <Offers />  </Suspense>
        }
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
