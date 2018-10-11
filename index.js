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
