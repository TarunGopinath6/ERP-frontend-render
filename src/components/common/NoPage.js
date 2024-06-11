import React from "react";

const NoPage = ({text}) => {
  return <div>
    <h1>Forbidden</h1>
    <p>{text}</p>
    <button onClick={() => window.location.href="/login"}>Go to Login</button>
    </div>;
};

export default NoPage;
