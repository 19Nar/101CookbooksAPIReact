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

import "./Menu.css";

const MenuResults = ({ meals }) => {
  return (
        <Col xs='6'>
          <Card>
            <CardImg src={meals.image_url} alt="Card image cap" />
            <CardBody>
              <div className="card-img-overlay">
                <CardTitle>Title: {meals.title}</CardTitle>
                <CardText>Recipe ID: {meals.recipe_id}</CardText>
              </div>
              <CardLink href={meals.publisher_url}>Publisher</CardLink>
              <CardLink href={meals.source_url}>Source</CardLink>
            </CardBody>
          </Card>
          </Col>
  );
};

export default MenuResults;
