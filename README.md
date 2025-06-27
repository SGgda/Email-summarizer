 ✉️ AI Email Summarizer Chrome Extension

A smart Chrome Extension that summarizes your Gmail emails using a backend-powered AI model — right inside your inbox!

 🚀 Features

- 🧠 One-click AI-powered summaries of Gmail emails
- 🔍 Works directly on Gmail using a right-click menu
- 📤 Extracts email content and sends it to a custom backend
- 🖱️ Clean popup UI to display the summary (draggable & resizable)

 🛠️ Tech Stack

- **Frontend**: JavaScript (Chrome Extension APIs)
- **Backend**: Node.js + Express
- **AI**: LLM model via OpenRouter or another API provider
- **Deployment**: Render.com

 🖼️ Demo

![Demo Screenshot]-https://drive.google.com/file/d/1Is8E-elxK7iJK1NRjzuGN9ZTVGQpVKwU/view?usp=sharing



⚙️ How to Install

1. **Download** the ZIP from [Google Drive] —> https://drive.google.com/drive/folders/1OwPWu9x4pQLfr8F0A6MQwcDgyCJRWrNR?usp=drive_link
2. **Unzip** the folder
3. Open Chrome and go to `chrome://extensions`
4. Enable **Developer Mode**
5. Click **"Load unpacked"** and select the unzipped folder
6. Open Gmail, right-click → **Summarize with AI**

 🌐 Backend

The backend is hosted at:  
🔗 [https://email-summarizer-9v5h.onrender.com](https://email-summarizer-9v5h.onrender.com)

> You can test the backend by sending a POST request to `/summarize` with a JSON body:
```json
{
  "text": "Your raw email content here"
}
