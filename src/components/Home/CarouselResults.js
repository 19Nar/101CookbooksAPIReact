import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import "./Home.css";

const items = [
  {
    src: "http://forkify-api.herokuapp.com/images/burger53be.jpg",
    caption: '101 Cookbooks',
    header: 'Best Pizza Dough Ever',
    key: '1'
  },
  {
    src: "http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg",
    caption: 'The Pioneer Woman',
    header: 'Deep Dish Fruit Pizza',
    key: '2'
  },
  {
    src: "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
    caption: 'Closet Cooking',
    header: 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)',
    key: '3'
  },
  {
    src: "http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg",
    caption: 'Closet Cooking',
    header: "Pizza Quesadillas (aka Pizzadillas)",
    key: '4'
  },
  {

    src: "http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg",
    caption: 'Bon Appetit',
    header: 'No-Knead Pizza Dough',
    key: '5'
  },
  {

    src: "http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg",
    caption: "Two Peas and Their Pod",
    header: 'Pizza Potato Skins',
    key: '6'
  },
];

const CarouselResults = () => <UncontrolledCarousel items={items} />

export default CarouselResults;

