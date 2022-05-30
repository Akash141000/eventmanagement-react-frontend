import "./Login.scss";
import { useState } from "react";
import { LoginForm } from "../components/auth/LoginForm";

const Login: React.FC<{}> = (props) => {

  return (
    <div className={"main"}>
      {/* <div className={"chartImg_container"}> */}
        {/* <img src={imgBackgound} /> */}
        {/* <div className={"description"}>
          <div className={"title"}>Choose a date range</div>
          <div className={"subtitle"}>
            Upcoming Events
          </div>
        </div> */}
      {/* </div> */}
      <div className={"form_container"}>
        <LoginForm />
      </div>
    </div>
  );
};
export { Login};