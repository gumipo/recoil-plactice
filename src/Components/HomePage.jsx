import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/users">Go to users page</Link>
    </div>
  );
};

export default HomePage;
