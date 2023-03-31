import React from "react";
import Navbar from "../components/Navbar";
import UserData from "../components/UserData/UserData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import UserNotFound from "../components/UserNotFound/UserNotFound";
import useUserHook from "../hooks/useUserHook";

export default function UserInfo() {
  const { username: searchTerm } = useParams();
  const userData = useUserHook(searchTerm);

  return (
    <>
      <Navbar></Navbar>
      {/* {JSON.stringify(UserData)} */}
      <UserData
        user={userData.user}
        repos={userData.repos}
        isloading={userData.isLoading}
      />
    </>
  );
}
