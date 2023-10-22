import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { router } from "./router";

import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const Root = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <GlobalStyles />
    </Provider>
  );
};

root.render(<Root />);
