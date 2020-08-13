import React from "react";

import welcome from "./WELCOME.jpg";
import pic from "./pic.jpg";

import { Container, Row, Col } from "reactstrap";

import "./About.css";
const About = () => {
  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" md="12" lg="12" xl="12">
          <p className="profile">

            101 Cookbooks started in early 2020 when Heidi Swanson realized that
            she could help thousands of people to share their recipes and to
            explore their new talents. This site aimed to change the life of the
            ones who love to experiment. It does not matter whether each
            experiment is successful or not. What is important is that you keep
            experimenting. Edison experimented over 10,000 times before she
            invented the light bulb.
            <img src={welcome} alt="WELCOME" />
            <img src={pic} alt="Pic" />
            <h3>About Heidi</h3>
            You can visit her personal site here if you like. She tries to keep
            it updated with various projects she works on. Heidi is a San
            Francisco based cookbook author, occasional designer, shop owner –
            and creator of 101 Cookbooks. She likes to travel, takes pictures,
            makes books, cooks, and hangs out with friends. On a professional
            front, her writing and photographs have been featured in The
            Washington Post, Vegetarian Times, Whole Foods Markets, and on NPR.
            Projects (past and present) have been highlighted in many national
            and local publications including the Wall Street Journal, LIFE,
            Shape Magazine, Vegetarian Times, USA Today, Fast Company,
            Entertainment Weekly, Glamour, and the San Francisco Chronicle. And
            through some stroke of good fortune, this book was on the New York
            Times bestseller list for a while.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
