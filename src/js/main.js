// Display a random health tip on button click
function showRandomTip() {
    const tips = [
      "Start your day with a glass of water to hydrate and energize your body.",
      "A 20-minute walk daily can significantly improve your cardiovascular health.",
      "Take a moment to breathe deeply, relax your mind, and reduce stress levels.",
      "Add more fruits and vegetables to your meals for a nutrient-packed diet.",
      "Get at least 7-8 hours of sleep for optimal health and well-being."
    ];
  
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("health-tip").textContent = randomTip;
  }
  
  // Display the current date in the health tips section
  function displayCurrentDate() {
    const today = new Date();
    const dateString = today.toLocaleDateString('en-CA', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    document.getElementById("today-date").textContent = `Today: ${dateString}`;
  }
  
  // Toggle visibility of the popup on the homepage
  function togglePopup() {
    const popup = document.getElementById('popup');
    setTimeout(() => {
      popup.classList.toggle('hidden');
    }, 5000); // Popup will appear after 5 seconds
  }
  
  // Chat widget toggle function
  function toggleChatWidget() {
    const chatBox = document.getElementById("chat-box");
    chatBox.classList.toggle("hidden");
  }
  
  // Send chat message
  document.getElementById("chat-send").addEventListener("click", function () {
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");
  
    if (chatInput.value.trim() !== "") {
      const newMessage = document.createElement("div");
      newMessage.classList.add("chat-message");
      newMessage.textContent = chatInput.value;
      chatMessages.appendChild(newMessage);
      chatInput.value = ""; // Clear the input field
    }
  });
  
  // Show the chat widget when the icon is clicked
  document.getElementById("chat-icon").addEventListener("click", toggleChatWidget);
  
  // Initialize page features
  window.onload = () => {
    displayCurrentDate();
    showRandomTip();
    togglePopup();
  };