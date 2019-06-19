# Chrome Extension Demo

This is a simple Chrome extension demo. It adds an icon in the extension icon area, and a context menu to pages under https://example.com/. When a menu item is clicked, a content script is executed on the active tab.

Use repository as a reference, or as a starting point for your own extensions.

## Installation

1. Clone this repo (or download as a zip and unpack to a folder)
2. Open Google Chrome
3. Go to [chrome://extensions](chrome://extensions)
4. From the upper right corner, turn on "Developer mode"
5. Click "Load unpacked" and navigate to this repo (or folder you unpacked)

That's all. You can manage the options for the extension by clicking on "Details". If you want to, you can close developer mode after the installation.

## Updating

Updating after making changes / pulling new version is also simple:

1. Open Google Chrome
2. Go to [chrome://extensions](chrome://extensions)
3. Click on the refresh-icon in the lower right corner of the extension card

That's it. As long as the path to the extension stays the same in your filesystem. If the path changes, you must remove and reload the extension.

## Links

https://developer.chrome.com/extensions/samples
https://developer.chrome.com/extensions/api_index
https://developer.chrome.com/extensions/declare_permissions
https://developer.chrome.com/extensions/devguide
