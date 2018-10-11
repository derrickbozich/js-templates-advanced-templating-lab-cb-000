function createRecipe(){
  let recipe = getRecipeValues();
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let html = template(recipe)

  document.getElementById('main')[0].innerHTML = html;
}

function getRecipeValues(){
  let ingredientNodes = document.getElementsByName("ingredients");
  let ingredients = [];
  for (let i = 0; i < ingredientNodes.length; i++){
    if (ingredientNodes[i].value != '') {
      ingredients.push(ingredientNodes[i].value)
    }
  }

  let name = document.getElementsByName("name").value;
  let description = document.getElementsByName("description").value;
  let recipe = {name, description, ingredients};

  return recipe;

}

function handlebarsSetup(){
  //handlebars registrations are here
  Handlebars.registerHelper("displayIngredient", function(ingredient){
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  });
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial("recipeFormPartial", document.getElementById('recipe-form-partial').innerHTML);

}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
