const ex = require("express");
const rs = require("./recipes");
const cors = require("cors");

const app = ex();
const r = rs.recipes;

app.use(ex.json());
app.use(cors());

app.get("/api/recipes", (req, res) => {
  res.send(r);
});

app.get("/api/recipes/:id", (req, res) => {
  let recipe = false;
  for (let i = 0; i < r.length; i++) {
    if (r[i].id == Number(req.params.id)) {
      recipe = r[i];
      break;
    }
  }

  if (recipe) {
    res.send(recipe);
    console.log(recipe);
  } else {
    let err = "recipe not found!";
    res.status(404);
    res.send(err);
    console.error(err);
  }
});

let port = 4000;
app.listen(port);
console.log("Starting server at port " + port + "...");
