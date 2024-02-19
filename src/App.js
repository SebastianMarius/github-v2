
import "./App.css";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Weather from "./Pages/Weather/Weather";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Weather />,
    },

    {
      path: "/weather",
      element: <Weather />,
    },
  ]);

  return (
    <>
      <Auth0Provider
        domain="dev-oadaql3s4hxo7q1r.us.auth0.com"
        clientId="gcTVheCLdhTGfFcRZkYppVxLUifYiV8E"
        authorizationParams={{
          redirect_uri: window.location.origin,
          // scope:
          //   "read:current_user update:current_user_metadata read:user_idp_tokens",
          // audience: "https://dev-oadaql3s4hxo7q1r.us.auth0.com/api/v2/",
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </>
  );
}

export default App;
