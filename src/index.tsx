import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { router } from "./router";
import { Fragment } from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Root = () => {
  return (
    <Fragment>
      <RouterProvider router={router} />
      <GlobalStyles />
    </Fragment>
  );
};

root.render(<Root />);
