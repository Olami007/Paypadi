import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
// import { items } from "./db";

const page = () => {
  return (
    <>
      <Navbar />

      <main>Main</main>

      <Footer />
    </>
    // <div>
    //   {items.applications.map((post) => (
    //     <div key={post.id}>
    //       <div>{post.title}</div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default page;
