import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardLink,
} from "reactstrap";

import LikeButton from "./LikeButton";

import "./Menu.css";

const MenuResults = ({ meals }) => {
  return (
    
    <Col className="col" xs="12" sm="12" md="6" lg="6" xl="6">
      <hr></hr>
      <Card className="mycard">
        <CardImg src={meals.image_url} alt="Card image cap" />
        <CardBody>
          <div className="card-img-overlay">
            <CardTitle>Title: {meals.title}</CardTitle>
            <CardText className="text">Recipe ID: {meals.recipe_id}</CardText>
            <p>See more</p>
            <CardLink href={meals.publisher_url}> Publisher</CardLink>
            <CardLink href={meals.source_url}> Source</CardLink>
            </div>
            <LikeButton />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MenuResults;
