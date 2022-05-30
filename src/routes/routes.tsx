import { Route, Routes } from "react-router-dom";
import { CreateEvent } from "../pages/CreateEvent";
import { Events } from "../pages/Events";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/Signup";
import { useAppSelector } from "../store/redux";

const AppRoutes = () => {
  const { token, user } = useAppSelector((state) => state);
  return (
    <Routes>
      {!user ? (
        <>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </>
      ) : (
        <>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/create-event" element={<CreateEvent />}></Route>
          <Route path="/get-tickets"></Route>
        </>
      )}
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
};

export { AppRoutes };
