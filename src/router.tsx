import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { User, Analytics, Report, Login } from "./Pages";
import { NotFound } from "./Pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <User />
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/report/:id",
    element: <Report />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
