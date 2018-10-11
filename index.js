function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString(this.name)
  });


  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipeDetailsPartial").innerHTML)
  function renderDetailsPartial() {
    let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    let html = template({description: this.description, ingredients: this.ingredients});
    return html;
  }

  // Handlebars.registerPartial('recipeFormPartial', function() {
  //
  // });


}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
