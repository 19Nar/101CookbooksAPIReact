import React from "react";
import Iframe from "react-iframe";

import facebook from "../../components/icons/facebook.jpg";
import youtube from "../../components/icons/youtube.jpg";
import insta from "../../components/icons/insta.jpg";
import { Container, Row, Col } from "reactstrap";

import "./Map.css";
const Map = () => {
  return (
    <Container>
      <Row>
        <Col xs="6" sm="6" md="6" lg="6" xl="6">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.359087048634!2d4.230127915269631!3d50.731828479515116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c8522d7c8013%3A0xbccf2b0f0514f35!2sBio-Planet%20Halle!5e0!3m2!1sen!2sbe!4v1594337286536!5m2!1sen!2sbe"
            width="450"
            height="250"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></Iframe>
        </Col>

        <Col className="social" xs="6" sm="6" md="6" lg="6" xl="6">
        <p>
            101 Cookbooks is a California food blog by Heidi Swanson,
            focused on healthy recipes for everyday. It features over 700
            vegetarian recipes, whole foods recipes, and vegan recipes, plus the
            occasional sweet treat.
            <hr></hr>
            For more information:
          </p>

          <a href="https://www.facebook.com/101cookbooks">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCPyfGHoefipxv7Arp2sboJg">
            <img src={youtube} alt="" />
          </a>
          <a href="https://www.instagram.com/heidijswanson/">
            <img src={insta} alt="" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Map;
