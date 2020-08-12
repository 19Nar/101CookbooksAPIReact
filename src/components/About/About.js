import React from "react";
import welcome from "./WELCOME.jpg";
import "./About.css";
const About = () => {
  return (
    <div>
      <hr></hr>
      <hr></hr>

      <img src={welcome} alt="Welcome" />
      <h5 className="mytext">
        101 Cookbooks started in early 2020 when I realized that I could help
        thousands of people to share their recipes and to explore their new
        talents. This site aimed to change the life of the ones who love to
        experiment. It does not matter whether each experiment is successful or
        not. What is important is that you keep experimenting. Edison
        experimented over 10,000 times before he invented the light bulb.
        <hr></hr>
        Life is a learning experience from the moment you are born. So we give
        you an opportunity to explore many wonderful vegetarian recipes, vegan
        recipes, WFPB recipes, and, of course, Instant Pot recipes. Many of the
        recipes are inspired by well-known cooks.
      </h5>
      <hr />
    </div>
  );
};

export default About;
