
  let players = {};
  const progressMap = JSON.parse(localStorage.getItem("videoProgress")) || {};
  const storageKey = "videoProgress";

  // When API is ready
  function onYouTubeIframeAPIReady() {
    document.querySelectorAll("iframe[id^='player']").forEach((iframe) => {
      const playerId = iframe.id;
      const lessonEl = iframe.closest(".lesson");
      const progressBar = lessonEl.querySelector("progress");

      // Restore saved progress if any
      if (progressMap[playerId]) {
        progressBar.value = progressMap[playerId];
      }

      // Create YouTube player instance
      players[playerId] = new YT.Player(playerId, {
        events: {
          onReady: (event) => {
            setInterval(() => {
              const duration = event.target.getDuration();
              const currentTime = event.target.getCurrentTime();
              if (duration > 0) {
                const percent = Math.round((currentTime / duration) * 100);
                progressBar.value = percent;

                // Save progress
                progressMap[playerId] = percent;
                localStorage.setItem(storageKey, JSON.stringify(progressMap));
              }
            }, 1000); // Check every second
          },
        },
      });
    });
  }

  // DOMContentLoaded for other lesson logic
  document.addEventListener("DOMContentLoaded", function () {
    const lessons = document.querySelectorAll(".lesson");

    lessons.forEach((lesson, index) => {
      const input = lesson.querySelector("input[type='text']");
      const button = lesson.querySelector("button");

      button.addEventListener("click", () => {
        const answer = input.value.trim().toLowerCase();
        if (!answer) {
          alert("Please type your answer first!");
          return;
        }
        button.disabled = true;
        button.innerText = "Submitted ✅";

        // Scroll to next lesson
        if (lessons[index + 1]) {
          setTimeout(() => {
            lessons[index + 1].scrollIntoView({ behavior: "smooth" });
          }, 800);
        }
      });
    });

    // Responsive video iframe
    document.querySelectorAll(".video-container").forEach((container) => {
      const iframe = container.querySelector("iframe");
      container.style.position = "relative";
      container.style.paddingBottom = "56.25%";
      container.style.height = "0";
      iframe.style.position = "absolute";
      iframe.style.top = "0";
      iframe.style.left = "0";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
    });
  });
  const answersKey = "lessonAnswers";
const answersMap = JSON.parse(localStorage.getItem(answersKey)) || {};

button.addEventListener("click", () => {
  const answer = input.value.trim().toLowerCase();
  if (!answer) {
    alert("Please type your answer first!");
    return;
  }

  // Save the answer to localStorage
  const lessonId = lesson.getAttribute("data-lesson");
  answersMap[lessonId] = answer;
  localStorage.setItem(answersKey, JSON.stringify(answersMap));

  button.disabled = true;
  button.innerText = "Submitted ✅";

  if (lessons[index + 1]) {
    setTimeout(() => {
      lessons[index + 1].scrollIntoView({ behavior: "smooth" });
    }, 800);
  }
});
const allAnswers = JSON.parse(localStorage.getItem("lessonAnswers"));
console.log(allAnswers);