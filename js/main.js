"use strict";

// Json Data Link------------------------
fetch("missionsdata.json")
  .then((response) => response.json())
  .then((data) => {
    const missionsContainer = document.getElementById("missions-container");

    data.forEach((mission) => {
      console.log(mission.launchDate);

      const card = document.createElement("div");
      card.classList.add("mission-card");

      // ✅ Utilisation des backticks ``
      card.innerHTML = `
        <img src="${mission.image}" alt="${mission.name}">
        <h2>${mission.name}</h2>
        <p>Agency: ${mission.agency}</p>
        <p>Objective: ${mission.objective}</p>
        <p>Launch Date: ${mission.launchDate}</p>
      `;

      missionsContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching missions:", error));
