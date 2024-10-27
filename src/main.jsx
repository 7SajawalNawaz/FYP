import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./Context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <App />
      </AuthProvider>
  </BrowserRouter>
</StrictMode>
);