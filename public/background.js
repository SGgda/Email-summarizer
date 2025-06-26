chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "summarizeEmail",
    title: "Summarize with AI",
    contexts: ["page", "selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "summarizeEmail") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["contentScript.js"] // ✅ Inject the script where `extractEmailContentAndSendToBackend` is defined
    });
  }
});
