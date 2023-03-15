import React from "react";
import notfound from "../assets/notfound.jpg";

export default function UserNotFound() {
  return (
    <>
      <div className="user_not_found_section">
        <div className="img_text_container">
          <img src={notfound} className="not_found_image"></img>
          <p>Couldn't find the user you are looking for, tru</p>
        </div>
      </div>
    </>
  );
}
