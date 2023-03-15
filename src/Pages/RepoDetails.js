import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserCard from "../components/UserCard";
import { useParams } from "react-router-dom";
import useUserHook from "../hooks/useUserHook";
import RepoData from "../components/RepoData";
import { useLocation } from "react-router-dom";

export default function RepoDetails() {
  const { username: searchTerm } = useParams();
  const user = useUserHook(searchTerm);

  const repoLangs = useLocation().state.repo.limbi;

  return (
    <>
      <Navbar />
      <div className="user_and_repo_data">
        <div className="user_section testamaici">
          <UserCard user={user.user} />
        </div>
        <RepoData userName={searchTerm} repoLangs={repoLangs} />
      </div>
    </>
  );
}
