const input = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");
const finalImage = document.getElementById("finalImage");
const sendBtn = document.getElementById("sendBtn");
const message = "nobody cares about your fullstack e-commerce project";
let index = 0;

input.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (index < message.length) {
    input.value += message[index];
    index++;
  }
  if (index === message.length) {
    setTimeout(() => {
      chatBox.style.opacity = "0";
      chatBox.style.transform = "scale(0.9)";
    }, 500);
    setTimeout(() => {
      chatBox.style.display = "none";
      finalImage.classList.add("show-image");
    }, 1000);
  }
});

sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
});

input.addEventListener("paste", (e) => e.preventDefault());
input.addEventListener("contextmenu", (e) => e.preventDefault());
