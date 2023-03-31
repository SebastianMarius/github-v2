import React from "react";
import notfound from "../../assets/notfound.jpg";
import {
  UserNotFoundSection,
  NotFoundImg,
} from "./UserNotFoundStyledComponent";

export default function UserNotFound() {
  return (
    <>
      <UserNotFoundSection>
        <div>
          <NotFoundImg src={notfound}></NotFoundImg>
          <p>Couldn't find the user you are looking for, tru</p>
        </div>
      </UserNotFoundSection>
    </>
  );
}
