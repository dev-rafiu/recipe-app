console.log(123);
async function getRecipe() {}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "38dd258aebmshec9cdf190c739c7p13ae03jsne258e0911332",
    "X-RapidAPI-Host": "recipesapi2.p.rapidapi.com",
  },
};

fetch(
  "https://recipesapi2.p.rapidapi.com/recipes/fried rice?maxRecipes=2",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
