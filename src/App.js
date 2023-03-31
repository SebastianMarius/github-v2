import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import UserData from "./components/UserData/UserData";
import { useState } from "react";
import HomePage from "./Pages/Home/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserInfo from "./Pages/UserInfo";
import RepoDetails from "./Pages/RepoDetails/RepoDetails";
import SignUp from "./Pages/SignUp/SignUp";
import { Auth0Provider } from "@auth0/auth0-react";
import Wordle from "./Pages/Wordle/Wordle";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/homePage",
      element: <HomePage />,
    },
    {
      path: "/searchforuser",
      element: <HomePage />,
    },

    {
      path: "/profile/:username",
      element: <UserInfo />,
    },
    {
      path: "/profile/:username/:repoName",
      element: <RepoDetails />,
    },
    {
      path: "/wordle",
      element: <Wordle />,
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
