function showTips(category) {
  let tips = "";

  if (category === "vegetables") {
    tips = `
      <p>🥦 Vegetables</p>
      <ul>
        <li>Store in breathable bags</li>
        <li>Keep in fridge crisper drawer</li>
        <li>Do not wash before storing</li>
      </ul>
    `;
  } 
  else if (category === "cooked") {
    tips = `
      <p>🍚 Cooked Food</p>
      <ul>
        <li>Store in airtight containers</li>
        <li>Consume within 24 hours</li>
        <li>Reheat only once</li>
      </ul>
    `;
  } 
  else if (category === "dairy") {
    tips = `
      <p>🥛 Dairy Products</p>
      <ul>
        <li>Keep below 4°C</li>
        <li>Do not store in fridge door</li>
        <li>Check expiry regularly</li>
      </ul>
    `;
  }

  document.getElementById("storageTips").innerHTML = tips;
}
