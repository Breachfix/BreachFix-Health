window.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
  
    // Simulate event alert popup after 3 seconds
    setTimeout(() => {
      popup.classList.remove("hidden");
  
      // Hide after 8 seconds
      setTimeout(() => {
        popup.classList.add("hidden");
      }, 8000);
    }, 3000);
  });