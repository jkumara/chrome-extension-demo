(() => {
  const greet = greeting => alert(greeting);

  // Register message listener
  chrome.runtime.onMessage.addListener(function receiveMessage(request) {
    if (request.type == "example") {
      greet(request.greeting);

      // Remove the listener
      chrome.runtime.onMessage.removeListener(receiveMessage);
    }
  });
})();
