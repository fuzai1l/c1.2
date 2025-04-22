
  // Get the saved station values from localStorage
  const start = localStorage.getItem("startStation");
  const end = localStorage.getItem("endStation");

  // Target the route-detail div
  const routeDiv = document.querySelector(".route-detail");

  // Display message or error
  if (!start || !end) {
    routeDiv.innerHTML = `
      <p style="color:red;">⚠️ Please go back and select both stations first!</p>
    `;
  } else {
    // Show selected stations & placeholder for route
    routeDiv.innerHTML = `
      <h2>🚇 Your Route</h2>
      <p><strong>Start Station:</strong> ${start}</p>
      <p><strong>End Station:</strong> ${end}</p>
      <p><strong>Shortest Route:</strong> Route from <em>${start}</em> to <em>${end}</em> will be shown here.</p>
    `;
  }