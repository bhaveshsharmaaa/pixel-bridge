import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AlabayCampaign from "./components/AlabayCompaign.jsx";
import AlabayCampaign2 from "./components/AlabayCompaign2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dog",
    element: <AlabayCampaign />,
  },
  {
    path: "/dog2",
    element: <AlabayCampaign2 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
