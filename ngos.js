function findNGO() {
  const loc = document.getElementById("location").value;

  if (loc === "") {
    alert("Enter location");
    return;
  }

  document.getElementById("ngoList").innerHTML =
    `<p>🤝 NGOs near <b>${loc}</b>:</p>
     <p>Helping Hands Foundation</p>
     <p>Food For All Trust</p>`;
}
