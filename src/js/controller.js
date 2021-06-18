import * as model from "./model";
import recipeView from "./views/recipeView";

import "core-js/stable";
import "regenerator-runtime/runtime";

const recipeContainer = document.querySelector(".recipe");

const controlRecipes = async function () {
  try {
    //const hash = window.location.hash.slice(1);
    //if (!hash) return;
    recipeView.renderSpinner(recipeContainer);

    // 1. Loading Recipe
    const has = "5ed6604591c37cdc054bc886";
    await model.loadRecipe(has);

    // 2. Loading recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    alert(error);
  }
};

controlRecipes();

["hashchange", "load"].forEach((ev) =>
  window.addEventListener(ev, controlRecipes)
);
