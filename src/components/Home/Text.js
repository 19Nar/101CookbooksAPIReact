import React, { useState } from "react";

import ReactCardFlip from "react-card-flip";
import { Container, Row, Col } from "reactstrap";

import next from "../icons/next.jpg";
import prev from "../icons/prev.jpg";
import vegan from "../icons/vegan.jpg";
import tomato from "../icons/tomato.jpg";
import pudding from "../icons/pudding.jpg";
import biscotti from "../icons/biscotti.jpg";
import dip from "../icons/dip.jpg";
import mango from "../icons/mango.jpg";

import "./Card.css";

const Text = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <Container>
      <Row>
        <Col className="mnv" xs="12" sm="12" md="12" lg="6" xl="6">
          <h4>Super Natural Vegan Sushi</h4>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="vegan">
              <img src={vegan} alt="vegan" />
              <button className="next" onClick={handleClick}>
                <img src={next} alt="next" />
              </button>
            </div>

            <div className="vegan">
              <hr></hr>
              <p>
                Combine the white sushi rice and whole grain rices in a bowl and
                mix well. Set aside. To make the tofu, whisk together the soy
                sauce, sesame-chili oil, and 3 tablespoons of water in a wide,
                shallow bowl. Cut the tofu into four slabs (see photo), and
                place in the bowl. Flip once or twice to coat. If you have time
                allow it to marinate for an hour or so. Cook the first side
                until golden, then flip and cook the second side. Remove from
                the pan and slice into matchsticks. <hr />
                <a href="https://www.101cookbooks.com/vegan-sushi/">
                  Read more
                </a>
              </p>
              <button className="prev" onClick={handleClick}>
                <img src={prev} alt="prev" />
              </button>
            </div>
          </ReactCardFlip>
        </Col>
        <Col className="mnv" xs="12" sm="12" md="12" lg="6" xl="6">
          <h4>Mango Breakfast Chia Pudding</h4>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="mango">
              <img src={mango} alt="mango" />
              <button className="next" onClick={handleClick}>
                <img src={next} alt="next" />
              </button>
            </div>

            <div className="mango">
              <hr></hr>
              <p>
                Combine the chia seeds with the mango puree, and stir well. Add
                the almond milk and stir well. Allow to sit for 15 - 30 minutes,
                stirring occasionally, or until the chia seeds completely bloom
                and soften. You can also do this step a night ahead, which makes
                for a great overnight breakfast. Just before serving, top with
                any of your chosen toppings. o make the mango puree, process a
                bag of frozen mango in a blender, or with a hand-blender. I like
                to do a big batch at a time, and portion it out into baggies.
                <hr />
                <a href="https://www.101cookbooks.com/chia-pudding/">
                  Read more
                </a>
              </p>
              <button className="prev" onClick={handleClick}>
                <img src={prev} alt="prev" />
              </button>
            </div>
          </ReactCardFlip>
        </Col>
        <Col className="mnv" xs="12" sm="12" md="12" lg="6" xl="6">
          <h4>Chocolate Fudge & Tahini Cake</h4>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="pudding">
              <img src={pudding} alt="pudding" />
              <button className="next" onClick={handleClick}>
                <img src={next} alt="next" />
              </button>
            </div>

            <div className="pudding">
              <hr></hr>
              <p>
                Preheat the oven to 350°F / 180°C with a rack in the center.
                Butter and flour a 9-inch / 8-cup bundt pan, or equivalent*. See
                head note. Make the cake batter: Sift together the flour, sugar,
                cocoa powder, baking powder, baking soda, and salt in a large
                bowl. In a medium bowl whisk together the eggs, milk, and
                vanilla extract. Mix in the melted butter. Pour the wet mixture
                over the dry ingredients and stir until uniform. Add the coffee
                and stir until the batter is smooth. Pour the batter into your
                prepared pan and bake for 45-50 minutes, or until a cake tester
                comes out clean. <hr />
                <a href="https://www.101cookbooks.com/chocolate-fudge-tahini-cake/">
                  Read more
                </a>
              </p>
              <button className="prev" onClick={handleClick}>
                <img src={prev} alt="prev" />
              </button>
            </div>
          </ReactCardFlip>
        </Col>
        <Col className="mnv" xs="12" sm="12" md="12" lg="6" xl="6">
          <h4>Biscotti</h4>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="biscotti">
              <img src={biscotti} alt="biscotti" />
              <button className="next" onClick={handleClick}>
                <img src={next} alt="next" />
              </button>
            </div>

            <div className="biscotti">
              <hr></hr>
              <p>
                Preheat the oven to 350F / 180C. Line a baking sheet with
                parchment paper. Whisk one of the eggs in a small bowl and set
                aside. Use a mixer with paddle attachment to cream the butter
                and sugar together until light and fluffy. You can also do this
                by hand. Add the remaining egg and the extract, and mix until
                uniform. Combine the flours, cornmeal, baking powder, salt,
                fennel seeds, and chamomile in a medium bowl. Add this dry
                mixture to the wet ingredients. Stir until the dough comes
                together into a soft dough. Stir in the sesame seeds. <hr />
                <a href="https://www.101cookbooks.com/biscotti-recipe/">
                  Read more
                </a>
              </p>
              <button className="prev" onClick={handleClick}>
                <img src={prev} alt="prev" />
              </button>
            </div>
          </ReactCardFlip>
        </Col>
        <Col className="mnv" xs="12" sm="12" md="12" lg="6" xl="6">
          <h4>Peace, Love & Energy Dip</h4>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="dip">
              <img src={dip} alt="dip" />
              <button className="next" onClick={handleClick}>
                <img src={next} alt="next" />
              </button>
            </div>

            <div className="dip">
              <hr></hr>
              <p>
                This is a hardworking dip. It’s great with baked pita chips,
                tortilla chips, crackers, etc. It can also play a supporting
                role in many other ways. It’s a versatile sandwich spread. And I
                love it slathered across garlic-rubbed grilled flatbreads. It’s
                A+ inside burritos, or on top of quesadillas. Combine all the
                ingredients in a high-speed blender and blend until silky
                smooth. You might need to scrape down the sides a couple of
                times along the way. If you need to add another tablespoon or so
                of water to get the thickness you like, go for it. <hr />
                <a href="https://www.101cookbooks.com/peace-love-dip/">
                  Read more
                </a>
              </p>
              <button className="prev" onClick={handleClick}>
                <img src={prev} alt="prev" />
              </button>
            </div>
          </ReactCardFlip>
        </Col>
        <Col className="mnv" xs="12" sm="12" md="12" lg="6" xl="6">
          <h4>Roasted Tomato & Sourdough Soup</h4>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="tomato">
              <img src={tomato} alt="service" />
              <button className="next" onClick={handleClick}>
                <img src={next} alt="next" />
              </button>
            </div>

            <div className="tomato">
              <hr></hr>
              <p>
                Preheat oven to 425F. With a rack in the center. Ideally, you’ll
                want two baking sheets here. Arrange the tomatoes and garlic in
                a single layer across one. And then arrange the onion across the
                other. Sprinkle the salt across both and drizzle with the olive
                oil. Toss well, and place in the oven to roast for 35-45
                minutes, or until the onions are golden, and the tomatoes have
                released their liquids and concentrated a bit. You’re done with
                the hand blender, so you can put it away. If there's a place
                where summer eating meets comfort food, this is it.
                <hr />
                <a href="https://www.101cookbooks.com/roasted-tomato-sourdough-soup/">
                  Read more
                </a>
              </p>
              <button className="prev" onClick={handleClick}>
                <img src={prev} alt="prev" />
              </button>
            </div>
          </ReactCardFlip>
        </Col>
        µ{" "}
      </Row>
    </Container>
  );
};

export default Text;
