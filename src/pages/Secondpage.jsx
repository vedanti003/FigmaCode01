import React from "react";
import CardComponent from "./../components/Card";
import "./secondpage.css";

const Secondpage = () => {
  return (
    <div className="container2">
      <div className="left-part2">
        <div className="first-seperate">
          <CardComponent title="Interactive features" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. " />
          <CardComponent title="Interactive features" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. " />
        </div>
        <div className="second-seperate">
          <CardComponent title="Interactive features" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "/>
          <CardComponent title="Interactive features" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "/>
        </div>
      </div>
      <div className="right-part2">
        <h1>About the couse</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam quis, consectetur numquam illum non voluptatem sint! Repellat quod sunt facilis corrupti, quia quasi blanditiis ipsum vero, officia doloribus exercitationem?</p>
        <button>Explore Now</button>
      </div>
    </div>
  );
};

export default Secondpage;
