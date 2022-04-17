import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import "../Styles/styles.css";
// import {
//   loginLoading,
//   loginSuccess,
//   loginFailure,
// } from "../Redux/Login/action";
import { login } from "../Redux/Login/action";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);

  const handleSubmit = () => {
    const payload = {
      username,
      password,
    };
    if (username == "" || password == "") {
      alert("Please fill all details");
    } else {
      dispatch(login(payload));
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className="login-form">
      <label>Username: </label>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <label>Password: </label>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};
