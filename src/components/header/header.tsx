import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/redux";
import "./header.css";

const Header: React.FC<{}> = () => {
  const token = useAppSelector((state) => state.token);
  return (
    <div className={"header"}>
      <h3 className={"title"}>
        <Link to="/">Events</Link>
      </h3>
      <ul>
        {!token ? (
          <>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/events">events</Link>
            </li>
            <li>
              <Link to="/create-event">create-event</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export { Header };
