import React, { useState } from "react";
import axios from "axios";
import useAuth from "../../Shared/Hooks/Auth";

function Login({ setIsLoginVisible }) {
  const baseurl = import.meta.env.VITE_BACKEND_ROUTE + "login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   const history = useHistory()
  const { isAdmin, setIsAdmin } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(baseurl, { username, password })
      .then((res) => res.data.token)
      .then((res) => {
        localStorage.setItem("jwt", res);
        setIsAdmin();
        setIsLoginVisible(false);
        // history.go(0)
      });
  };

  return (
    <>
      <div
        onClick={() => setIsLoginVisible((prev) => !prev)}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 "
      ></div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md p-6 z-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            value={username}
            placeholder="Username"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            value={password}
            placeholder="Password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
