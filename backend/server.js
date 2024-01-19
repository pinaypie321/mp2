const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(express.json());
app.use(cors());

const port = 3001;

// import datas
const r = require("./data");
const recipes = r.recipes;

// Get all recipes
app.get("/api/recipes", (req, res) => {
  res.send(recipes);
});

// Get single recipe with details
app.get("/api/recipes/:id", (req, res) => {
  let recipe = false;
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].id == Number(req.params.id)) {
      recipe = recipes[i];
      break;
    }
  }

  if (recipe) {
    res.send(recipe);
  } else {
    let err = "Recipe not found!";
    restart.status(404);
    res.send(err);
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Server started using port ${port}`);
});
