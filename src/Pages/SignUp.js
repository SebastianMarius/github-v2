import github from "../assets/Github.png";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import { redirect } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SignUp() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <Navbar />
      {isAuthenticated ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <div className="center_div">
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              loginWithRedirect({
                authorizationParams: {
                  redirect_uri: "http://localhost:3000/homepage",
                },
              });
            }}
          >
            {" "}
            Logheaza ma pls{" "}
          </Button>
        </div>
      )}
    </>
  );
}
