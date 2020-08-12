import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
} from "reactstrap";

import LikeButton from "./LikeButton";

import "./Menu.css";

const MenuResults = ({ meals }, item) => (
  <React.Fragment key={item.id}>
    <Col className="col" xs="12" sm="12" md="4" lg="4" xl="4">
      <Card className="mycard">
        <CardImg src={meals.image_url} alt="Card image cap" />
        <CardBody>
          <CardText className="text">Recipe ID: {meals.recipe_id}</CardText>
          <CardLink href={meals.publisher_url}> Publisher</CardLink>
          <CardLink href={meals.source_url}> Source</CardLink>
          <LikeButton itemId={item.id} />
        </CardBody>
      </Card>
    </Col>
  </React.Fragment>
);

export default MenuResults;
