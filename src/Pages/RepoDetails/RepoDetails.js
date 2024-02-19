import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import UserCard from "../../components/UserCard";
import { useParams } from "react-router-dom";
import useUserHook from "../../hooks/useUserHook";
import RepoData from "../../components/RepoData/RepoData";
import { useLocation } from "react-router-dom";
import { MakeFlex } from "../../components/Common/SharedStyleComponents";
import { User_section } from "./RepoDataStyledComponent";

export default function RepoDetails() {
  const { username: searchTerm } = useParams();
  const user = useUserHook(searchTerm);

  const repoLangs = useLocation().state.repo.limbi;

  return (
    <>
      <Navbar />
      <MakeFlex>
        <User_section>
          <UserCard user={user.user} />
        </User_section>
        <RepoData userName={searchTerm} repoLangs={repoLangs} />
      </MakeFlex>
    </>
  );
}
