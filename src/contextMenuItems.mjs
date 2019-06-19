/**
 * Exports a list of items that appear in the context menu.
 *
 * The context menu is created (and these items are registered) in
 * background.js. onClick-callback is fired when the context menu item is
 * clicked. The callback can be used to execute content scripts on the browser's
 * active tab.
 *
 * For further documentation see:
 * https://developer.chrome.com/apps/contextMenus
 * https://developer.chrome.com/extensions/content_scripts
 */
export default [
  // Execute content script from a string
  {
    id: "helloWorld",
    title: "Show 'Hello world'",
    onClick: () => {
      chrome.tabs.executeScript(null, {
        code: "(() => alert('Hello, world!'))()"
      });
    }
  },
  // Execute content script from a file
  {
    id: "changePageTitle",
    title: "Change page title",
    onClick: () => {
      chrome.tabs.executeScript(null, {
        file: "src/contentScripts/changePageTitle.js"
      });
    }
  },
  // Execute content script from a file and send it a message
  {
    id: "messagingDemo",
    title: "Messaging demo",
    onClick: () => {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        const activeTab = tabs[0];

        const sendMessageToActiveTab = () =>
          chrome.tabs.sendMessage(activeTab.id, {
            type: "example",
            greeting: "hi dude!!!"
          });

        chrome.tabs.executeScript(
          activeTab.id,
          {
            file: "src/contentScripts/messagingDemo.js"
          },
          sendMessageToActiveTab
        );
      });
    }
  }
];
