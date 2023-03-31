import "../styling/UserProfile.css";
import * as React from "react";
import UserCard from "./UserCard";
import RepoCard from "./RepoCard/RepoCards";
import UserLoading from "./UserLoading";
import { isEmpty } from "lodash";
import CircularProgress from "@mui/material/CircularProgress";

function UserData(props) {
  const { user, repos, isloading } = props;

  return (
    <>
      <div className="user_section ">
        {isloading.loadingUser && !isEmpty(user) ? (
          <UserLoading />
        ) : (
          <UserCard user={user} />
        )}

        {isloading.loadingRepo ? (
          <CircularProgress />
        ) : (
          <div className="cards_container">
            {repos.map((repo) => (
              <RepoCard repo={repo} key={repo.name} user={user} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default UserData;
