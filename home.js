
  document.getElementById("findRouteBtn").addEventListener("click", function () {
    const start = document.getElementById("startStation").value;
    const end = document.getElementById("endStation").value;

    if (!start || !end) {
      alert("Please select both stations.");
      return;
    }

    // Save user input to localStorage
    localStorage.setItem("startStation", start);
    localStorage.setItem("endStation", end);

    // Go to the route page
    window.location.href = "route.html";
  });

