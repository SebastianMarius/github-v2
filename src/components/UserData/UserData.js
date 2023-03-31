import * as React from "react";
import UserCard from "../UserCard";
import RepoCard from "../RepoCard/RepoCards";
import UserLoading from "../UserLoading";
import { isEmpty } from "lodash";
import CircularProgress from "@mui/material/CircularProgress";
import { UserSection, CardsContainer } from "./UserDataStyledComponent";

function UserData(props) {
  const { user, repos, isloading } = props;

  return (
    <>
      <UserSection>
        {isloading.loadingUser && !isEmpty(user) ? (
          <UserLoading />
        ) : (
          <UserCard user={user} />
        )}

        {isloading.loadingRepo ? (
          <CircularProgress />
        ) : (
          <CardsContainer>
            {repos.map((repo) => (
              <RepoCard repo={repo} key={repo.name} user={user} />
            ))}
          </CardsContainer>
        )}
      </UserSection>
    </>
  );
}

export default UserData;
