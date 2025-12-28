function findRecipe() {
  const input = document.getElementById("ingredients").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");

  if (input === "") {
    resultDiv.innerHTML = "<p>❌ Please enter ingredients</p>";
    return;
  }

  // Allowed ingredients list
  const validIngredients = [
    "carrot", "beans", "potato", "tomato", "onion",
    "apple", "banana", "mango", "spinach", "cabbage", "egg", "milk", "rice",
  ];

  const userIngredients = input.split(",").map(i => i.trim());

  // Check for invalid words
  const invalid = userIngredients.filter(i => !validIngredients.includes(i));

  if (invalid.length > 0) {
    resultDiv.innerHTML = `
      <p>❌ Invalid ingredient(s): <b>${invalid.join(", ")}</b></p>
      <p>Please enter valid vegetables or fruits.</p>
    `;
    return;
  }

  // Decide recipe type
  let recipeName = "Vegetable Stir Fry";
  let steps = `
    <li>Heat oil in a pan</li>
    <li>Add chopped vegetables</li>
    <li>Stir fry for 8–10 minutes</li>
    <li>Add salt and spices</li>
  `;

  if (userIngredients.includes("apple") || userIngredients.includes("banana") || userIngredients.includes("mango")) {
    recipeName = "Fruit Salad";
    steps = `
      <li>Wash and chop fruits</li>
      <li>Mix them in a bowl</li>
      <li>Add honey or lemon (optional)</li>
      <li>Serve fresh</li>
    `;
  }
  if (userIngredients.includes("rice") && userIngredients.includes("egg")) {
    recipeName = "Egg Fried Rice";
    steps = `
      <li>Heat oil in a pan</li>
      <li>Add beaten eggs and scramble</li>
      <li>Add cooked rice and mix</li>
      <li>Add soy sauce and seasonings</li>
    `;
  }

  resultDiv.innerHTML = `
    <div style="border:1px solid #ccc; padding:20px; width:320px; margin:auto;">
      <h3>🍽️ ${recipeName}</h3>

      <p><b>Ingredients used:</b></p>
      <ul>
        ${userIngredients.map(i => `<li>${i}</li>`).join("")}
      </ul>

      <p><b>Steps:</b></p>
      <ol>${steps}</ol>

      <p><b>Time:</b> 15 minutes</p>
    </div>
  `;
}
