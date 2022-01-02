import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function ShowRecipe() {
  let { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/recipes/${recipeId}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${Cookies.get("session")}`,
          Accept: "application/json",
        },
      })
      .then(function (response) {
        // handle success
        setRecipe(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div
      style={{
        margin: "0px 15px 0px 15px",
        padding: "10px",
      }}
    >
      <Card
        className="bg-dark text-white"
        style={{
          width: "500px",
          padding: "40px",
        }}
      >
        <Card.Img
          variant="top"
          src="/salted-caramel-apple-pie.jpeg"
          style={{ height: "250px" }}
        />
        <Card.Title style={{fontSize: "30px"}}>{recipe.title}</Card.Title>
      </Card>

      <div style={{ color: "black" }}>
        <CardGroup className="grid space-around">
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Header style={{ fontSize: "25px" }}>Ingredients</Card.Header>
            <Card.Body>
              <Card.Text>
                <li>{recipe.content}</li>

                <li>
                  homemade pie crust (recipe makes 2 crusts; 1 for bottom and 1
                  for lattice top)
                </li>
                <li>homemade salted caramel</li>
                <li>
                  6–7 large apples, cored, peeled, and thinly sliced
                  (approximately 10–12 cups total – use a variety for better
                  flavor, such as Pink Lady, Granny Smith, or Honey Crisp)
                </li>
                <li>1/2 cup (100g) granulated sugar</li>
                <li>2 Tablespoons (30ml) fresh lemon juice</li>
                <li>1/4 cup (31g) all-purpose flour (spoon & leveled)</li>
                <li>1/4 teaspoon ground cloves</li>
                <li>1/4 teaspoon ground nutmeg</li>
                <li>1 and 1/2 teaspoons ground cinnamon</li>
                <li>
                  egg wash: 1 large egg beaten with 1 Tablespoon (15ml) milk
                </li>
                <li>optional: coarse sugar for sprinkling on crust</li>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border="secondary" style={{ width: "30rem" }}>
            <Card.Header style={{ fontSize: "25px" }}>Instructions</Card.Header>
            <Card.Body>
              <Card.Text>
                The crust: Prepare pie crust recipe through step 5. Make the
                salted caramel. You can do this as you wait for the pie dough to
                chill. Next, make the apple filling as the dough is still
                chilling: Place apple slices into a very large bowl. Add sugar,
                lemon juice, flour, cloves, nutmeg, and cinnamon. Gently toss to
                combine. Set aside. Roll out the chilled pie dough: On a floured
                work surface, roll out one of the discs of chilled dough (keep
                the other one in the refrigerator). Turn the dough about a
                quarter turn after every few rolls until you have a circle 12
                inches in diameter. Carefully place the dough into a 9×2 inch
                pie dish. Tuck it in with your fingers, making sure it is
                smooth. With a small and sharp knife, trim the extra overhang of
                crust and discard. Fill the pie crust with the apples. There are
                a lot of apples, but pile them tightly and very high. Drizzle
                with 1/2 cup of the salted caramel, reserving the rest for
                topping. Preheat oven to 400°F (204°C). Make the lattice crust:
                Remove the other disc of chilled pie dough from the
                refrigerator. Roll the dough out, 12 inches diameter. Using a
                pastry wheel, sharp knife, or pizza cutter, cut 16 strips 1/2
                inch wide. We always use a clean measuring tape or ruler as a
                guide to assure the lines are straight. Carefully thread the
                strips over and under one another, pulling back strips as
                necessary to weave. Using a small and sharp knife, trim the
                extra overhang. Crimp the edges of the dough with a fork or your
                fingers. Lightly brush the lattice top with the egg wash.
                Sprinkle with coarse sugar. Place the pie onto a large baking
                sheet and bake for 20 minutes. Keeping the pie in the oven, turn
                the temperature down to 375°F (190°C) and bake for an additional
                40-50 minutes. If the top of your pie is getting too brown,
                cover loosely with aluminum foil. The pie will be done when the
                caramel begins to bubble up. A small knife inserted inside
                should come out relatively clean. Cool pie for 4 hours before
                serving. Drizzle the pie with the extra caramel sauce to serve.
                This apple pie is best served on the same day, but it can be
                covered tightly and stored in the refrigerator for up to 3 days.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}
