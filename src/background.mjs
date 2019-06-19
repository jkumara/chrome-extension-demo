import contextMenuItems from "./contextMenuItems.mjs";

chrome.runtime.onInstalled.addListener(function() {
  // Show the extension's icon as active when these conditions are satisfied
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostSuffix: "example.com" }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });

  // Create the context menu
  const parentId = chrome.contextMenus.create({
    id: "main",
    title: "Demo Extension",
    contexts: ["page"],
    // Only show the context menu on these domains
    documentUrlPatterns: ["http://example.com/*", "https://example.com/*"]
  });

  contextMenuItems.forEach(({ id, title }) =>
    chrome.contextMenus.create({
      parentId,
      id,
      title
    })
  );
});

/**
 * Add listener for context menu clicks. This must be done outside the
 * onInstalled hook. Otherwise they will be registered only when the extension
 * or Chrome is updated.
 */
chrome.contextMenus.onClicked.addListener((info, tab) => {
  const item = contextMenuItems.find(item => item.id === info.menuItemId);

  if (!item) {
    throw new Error(`Item ${info.menuItemId} not found`);
  }

  if (!item.onClick) {
    throw new Error(`onClick handle not found for item ${info.menuItemId}`);
  }

  item.onClick(info, tab);
});
