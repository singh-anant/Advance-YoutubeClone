import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import store from "./utils/store";
import SidePanel from "./components/SidePanel";
import WatchContainer from "./components/WatchContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="flex ">
          <SidePanel />
          <Outlet />
        </div>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "watch",
        element: <WatchContainer />,
      },
    ],
  },
]);

// Tell React that div is my root
const root = ReactDOM.createRoot(document.getElementById("root"));
// Putting heading inside root//passing a react element inside the root
root.render(<RouterProvider router={appRouter} />);
