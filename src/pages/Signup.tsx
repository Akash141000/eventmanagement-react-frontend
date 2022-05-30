import styles from "./Signup.module.scss";
import imgBackgound from "../assets/imgSignup.jpg";
import { SignUpForm } from "../components/auth/SignUpForm";

const SignUp: React.FC<{}> = (props) => {

  return (
    <div className={styles["main"]}>
      {/* <div className={styles["chartImg_container"]}>
        <img src={imgBackgound} />
        <div className={styles[ "description"]}>
          <div className={styles[ "title"]}>Choose a date range</div>
          <div className={styles[ "subtitle"]}>
            Upcoming Events
          </div>
        </div>
      </div> */}
      {/* <div className={styles["form_container"]}> */}
        <SignUpForm />
      {/* </div> */}
    </div>
  );
};
export { SignUp };