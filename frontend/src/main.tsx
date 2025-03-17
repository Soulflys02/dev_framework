import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="lv-dev.eu.auth0.com"
    clientId="1sdGOk9bGLd9mtjIzrwKdMs91xDY9L0T"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
