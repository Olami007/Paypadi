import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/user", { method: "GET" });

  const response = await res.json();
  return (
    <>
      <div>{response}</div>
    </>
  );
};

export default page;
