import { createRoot } from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster/>
    <RouterProvider router={router} />
  </Provider>
);
