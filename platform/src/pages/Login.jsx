//  -----> Imports <-----
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState } from "react";

import FormTextBox from "@/lore_components/FormTextBox";
import fakeUser from "../assets/fakeuser.json";
import PasswordRest from "./PasswordReset";
import Button from "@/lore_components/Button";

//  -----> Actual Component <-----
const Login = () => {
  // 🕹️ The Programming Logic
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const settingUsername = (event) => {
    setUsername(event.target.value);
  };
  const settingPassword = (event) => {
    setPassword(event.target.value);
  };

  // 🌳 When the user enters the "Enter" key on their keyboard when on the textboxes will log them in
  const getLoggedIn = (event) => {
    if (event.key === "Enter") {
      const { username: storedUsername, password: storedPassword } =
        fakeUser.user;

      if (username === storedUsername && password === storedPassword) {
        navigate("/logged-in");
      } else {
        console.log("Login failed");
      }
    }
  };

  // 🌳 When the user clicks the "Enter" button on the screen, it will log them in
  const buttonLogin = () => {
    const { username: storedUsername, password: storedPassword } =
      fakeUser.user;

    if (username === storedUsername && password === storedPassword) {
      navigate("/logged-in");
    } else {
      console.log("Login failed");
    }
  };

  // HTML part of the component
  return (
    <>
      {location.pathname === "/login" ? (
        <div>
          <h1 className="text-xl mb-5 text-center">Login</h1>
          <div className="flex flex-col lorebg-n800 rounded-2xl justify-center px-6 py-5 w-96">
            <div className="flex flex-col gap-y-4 items-center w-full">
              <FormTextBox
                type="text"
                labelText="Username"
                id="usernameId"
                name="username_text"
                value={username}
                onChange={settingUsername}
                onKeyDown={getLoggedIn}
              />
              <FormTextBox
                type="password"
                labelText="Password"
                id="passwordId"
                name="password_text"
                value={password}
                onChange={settingPassword}
                onKeyDown={getLoggedIn}
              />
              <Link
                to={"password-reset"}
                className="text-xs font-normal hover:underline"
              >
                Forgot your password?
              </Link>
              <Button
                title="Enter"
                className="w-4/6 hover:font-normal lorebg-n600 text-white hover:lore-text-n800 hover:bg-white transition duration-300"
                onClick={buttonLogin}
              />
            </div>
          </div>
        </div>
      ) : (
        <PasswordRest />
      )}
    </>
  );
};

export default Login;
