import React from "react";

export default function WelcomePage({user}) {
  return <h1>Welcome, {user.username}!</h1>;
}