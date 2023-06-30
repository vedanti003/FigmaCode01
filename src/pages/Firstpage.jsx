import React from "react";
import "./firstpage.css";

const Firstpage = () => {
  return (
    <div>
      <div className="container1">
        <div className="left-part">
          <h2 style={{margin: "20px", fontSize: "3rem"}}>Learn how to launch a successful product</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            inventore fugit nesciunt dicta voluptatem. Officiis illo sit non.
            Architecto cum accusantium recusandae ullam, odio amet perferendis
            corrupti tenetur voluptas dolor?
          </p>
          <button style={{fontSize: "1.2rem", padding:"10px"}}>Sign up Now</button>
        </div>
        <div className="right-part">
          <div className="overlay-container">
            <img src="https://cdn.pixabay.com/photo/2023/06/18/04/57/silver-throated-tanager-8071234_1280.jpg" alt="Image 1" className="image" />
            <img src="https://cdn.pixabay.com/photo/2023/05/29/16/48/horses-8026521_1280.jpg" alt="Image 2" className="image overlay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
