import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import Preloader from "./component/Preloader.jsx";
// import SpinnerLoader from "./component/SpinnerLoader.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <>
    {/* <SpinnerLoader /> */}

    <StrictMode>
      <Preloader />
      <App />
    </StrictMode>
  </>
);
