import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import MenuResults from "./MenuResults";

const Menu = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://forkify-api.herokuapp.com/api/search?q=salad`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMeals(response.recipes);
      });
  }, []);

  return (
    <Container>
      <Row>
        {meals &&
          meals.map((meal) => <MenuResults meals={meal} key={meal.id} />)}
      </Row>
    </Container>
  );
};

export default Menu;
