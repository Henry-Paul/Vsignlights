let chatData = {};

function openChatbot() {
  document.getElementById("chatbot").style.display = "block";
}

function selectType(type) {
  chatData.type = type;
}

function generateEstimate() {
  const w = document.getElementById("width").value;
  const h = document.getElementById("height").value;
  const result = calculateEstimate(chatData.type, w, h);

  chatData.message =
`Hello V SIGN,
I need ${chatData.type.toUpperCase()} signage.
Size: ${w}ft x ${h}ft
Estimated Budget: ₹${result.min} – ₹${result.max}`;

  document.getElementById("result").innerText =
`₹${result.min} – ₹${result.max}`;
}

function goWhatsApp() {
  window.open(
    "https://wa.me/91XXXXXXXXXX?text=" +
    encodeURIComponent(chatData.message),
    "_blank"
  );
}
