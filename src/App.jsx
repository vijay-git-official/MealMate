
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    

    </div>
  )
}

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
          element: <About />
        },{ 
          path : '/restaurents/:resId',
          element : <RestaurentMenu/>
        }
      ],
      errorElement: <Error />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
