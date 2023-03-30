import Navbar from "../../components/Navbar";
import { TextField, Box } from "@mui/material";
// import "../styling/HomePage.css";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState, useCallback } from "react";
import { ShieldTwoTone } from "@mui/icons-material";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";
import { useAuth0 } from "@auth0/auth0-react";
import { CenteredDiv } from "../../components/Common/SharedStyleComponents";

import {
  HomePageContainer,
  AutocompleteContainer,
  UserOption,
} from "./HomeStyledComponents";

function RenderNotAuthDiv() {
  const navigate = useNavigate();
  return (
    <CenteredDiv givenHeightVh={90}>
      <div>You need to auth</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to auth
      </button>
    </CenteredDiv>
  );
}

export default function HomePage(props) {
  const [userInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  const handleKeyDown = (e, shit) => {
    setSearchInput(shit);
  };
  const handleSelectUser = (e, user) => {
    navigate(`/profile/${user?.label}`);
  };

  const changeHandler = () => {
    console.log("prima linie");
    const fetchingUsers = async () => {
      const fetchUsersResp = await fetch(
        `https://api.github.com/search/users?q=` +
          userInput +
          `in%3Alogin&type=Users?&per_page=10`
      );
      const users = await fetchUsersResp.json();

      setUsers(
        users?.items?.map((item) => {
          return { label: item?.login, img: item?.avatar_url };
        })
      );
    };

    fetchingUsers();
  };

  const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), [
    userInput,
  ]);

  useEffect(() => {
    if (userInput.length > 2) {
      debouncedChangeHandler();
    }
  }, [userInput]);

  return (
    <>
      {isAuthenticated ? (
        <>
          <Navbar />
          <HomePageContainer>
            <AutocompleteContainer>
              <Autocomplete
                value={userInput}
                open={userInput.length > 2}
                id="free-solo-demo"
                options={users}
                renderInput={(params) => (
                  <TextField {...params} label="Your name goes here " />
                )}
                freeSolo
                onInputChange={handleKeyDown}
                onChange={handleSelectUser}
                renderOption={(props, option) => (
                  <UserOption component="li" {...props}>
                    <img
                      width="20"
                      src={option.img}
                      srcSet={option.img}
                      alt=""
                    />
                    {option.label}
                  </UserOption>
                )}
              />
            </AutocompleteContainer>
          </HomePageContainer>
        </>
      ) : (
        <RenderNotAuthDiv />
      )}
    </>
  );
}
