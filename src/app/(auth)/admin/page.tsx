import React from "react";
import LoginPage from "../admin-components/Login";
import { authToken } from "../common/tokens";

const Admin = async () => {
  const token = await authToken();

  return (
    <>
      <h1 className="text-3xl text-black pb-6">Welcome to Toji Admin</h1>
      {token ? (
        <h2>You can able to access the admin section now...</h2>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default Admin;
