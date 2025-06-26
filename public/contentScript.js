function showSummaryPopup(summary){
  const oldPopup = document.getElementById("gemini-summary-popup");
  if (oldPopup) oldPopup.remove();

  const popup = document.createElement("div");
  popup.id = "gemini-summary-popup";
  popup.style = `
    position: fixed;
    top: 100px;
    left: 100px;
    width: 400px;
    height: 300px;
    background: #fff;
    border: 2px solid #444;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    resize: both;
    overflow: auto;
    z-index: 9999;
    padding: 16px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    cursor: move;
  `;

  popup.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <strong>AI Summary</strong>
      <button id="close-summary-popup" style="border:none; background:#f44336; color:#fff; padding:4px 8px; border-radius:4px; cursor:pointer;">X</button>
    </div>
    <hr />
    <div style="margin-top: 8px;">${summary.replace(/\n/g, "<br>")}</div>
  `;

  document.body.appendChild(popup);

  // Close logic
  document.getElementById("close-summary-popup").onclick = () => popup.remove();

  // Drag logic
  let isDragging = false;
  let offsetX, offsetY;

  popup.addEventListener("mousedown", (e) => {
    if (e.target.tagName === "BUTTON") return; // Ignore drag when clicking the close button
    isDragging = true;
    offsetX = e.clientX - popup.getBoundingClientRect().left;
    offsetY = e.clientY - popup.getBoundingClientRect().top;
    popup.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      popup.style.left = `${e.clientX - offsetX}px`;
      popup.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    popup.style.cursor = "move";
  });
}

function extractEmailContentAndSendToBackend() {
  const emailContent = document.querySelector("div.ii.gt");

  if (!emailContent) {
    alert("❌ Couldn't find email content. Please open a Gmail message.");
    return;
  }

  const text = emailContent.innerText || emailContent.textContent;

  fetch("https://email-summarizer-9v5h.onrender.com/summarize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.summary) {
        showSummaryPopup(data.summary);
      } else {
        const message="Gemini didn't give any summary to your mail";
        showSummaryPopup(message);
      }
    })
    .catch((err) => {
      console.error("❌ Backend error:", err);
      alert("❌ Failed to fetch summary from backend.");
    });
}

extractEmailContentAndSendToBackend(); 