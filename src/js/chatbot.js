const chatIcon = document.getElementById("chat-icon");
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");
const chatMessages = document.getElementById("chat-messages");

// Simple Q&A database
const faqs = {
  "event": "You can view upcoming events on the 'Events' page.",
  "course": "We offer several health courses. Visit the 'Courses' tab!",
  "buy": "You can buy courses or health products using our secure checkout.",
  "help": "I'm here to help! Try asking about events or courses.",
  "login": "Use the login page at the top to access your account.",
  "register": "Click on 'Sign Up' in the navigation bar to register."
};

chatIcon.addEventListener("click", () => {
  chatBox.classList.toggle("hidden");
});

chatSend.addEventListener("click", () => {
  const userMsg = chatInput.value.trim();
  if (!userMsg) return;

  appendMessage("You", userMsg);
  respond(userMsg.toLowerCase());
  chatInput.value = "";
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function respond(userMsg) {
  let found = false;

  for (const keyword in faqs) {
    if (userMsg.includes(keyword)) {
      appendMessage("Assistant", faqs[keyword]);
      found = true;
      break;
    }
  }

  if (!found) {
    appendMessage("Assistant", "Sorry, I didn't understand that. Try asking about events, courses, or help.");
  }
}
