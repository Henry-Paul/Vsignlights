let chatbotState = {
  type: null,
  width: null,
  height: null,
  estimate: null
};

function openChatbot() {
  document.getElementById("chatbot").style.display = "block";
}

function selectType(type) {
  chatbotState.type = type;
}

function generateEstimate() {
  const w = Number(document.getElementById("width").value);
  const h = Number(document.getElementById("height").value);

  const result = calculateEstimate(chatbotState.type, w, h);

  if (!result) {
    alert("Please enter valid details");
    return;
  }

  chatbotState.width = w;
  chatbotState.height = h;
  chatbotState.estimate = result;

  document.getElementById("result").innerText =
    `₹${result.min} – ₹${result.max}`;
}

function goWhatsApp() {
  if (!chatbotState.estimate) {
    alert("Please generate estimate first");
    return;
  }

  const msg = `
Hello V SIGN,

I need ${chatbotState.type.toUpperCase()} signage.
Size: ${chatbotState.width}ft × ${chatbotState.height}ft

Estimated budget:
₹${chatbotState.estimate.min} – ₹${chatbotState.estimate.max}

Please contact me to proceed.
`;

  window.open(
    "https://wa.me/91XXXXXXXXXX?text=" + encodeURIComponent(msg),
    "_blank"
  );
}
