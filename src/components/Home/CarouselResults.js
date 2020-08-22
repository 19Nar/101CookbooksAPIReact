import React from "react";
import { UncontrolledCarousel } from "reactstrap";

import "./Home.css";

const items = [
  {
    src: "http://forkify-api.herokuapp.com/images/burger53be.jpg",
    caption: "101 Cookbooks",
    header: "Best Pizza Dough Ever",
    key: "1",
  },
  {
    src: "http://forkify-api.herokuapp.com/images/7403723994_a94a921dd6ef3f.jpg",
    caption: "The Pioneer Woman",
    header: "Cioppino",
    key: "2",
  },
  {
    src: "http://forkify-api.herokuapp.com/images/chickenmustarde587.jpg",
    caption: "Closet Cooking",
    header: "Chicken with Mustard Cream Sauce",
    key: "3",
  },
  {
    src:
      "http://forkify-api.herokuapp.com/images/pumpkinpancakes32a8.jpg",
    caption: "Closet Cooking",
    header: "Silver Dollar Pumpkin Pancakes",
    key: "4",
  },
  {
    src: "http://forkify-api.herokuapp.com/images/salad8c49.jpg",
    caption: "Bon Appetit",
    header: "Apple, Pecan, and Blue Cheese Salad with Dried Cherries",
    key: "5",
  },
  {
    src: "http://forkify-api.herokuapp.com/images/sparkle7fbe.jpg",
    caption: "Two Peas and Their Pod",
    header: "Strawberry Sparkle Cake",
    key: "6",
  },
];

const CarouselResults = () => <UncontrolledCarousel items={items} />;

export default CarouselResults;
