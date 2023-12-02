var buttonClear = document.getElementById("buttonClear");
buttonClear.addEventListener("click", handleButtonClick);

function handleButtonClick(event) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {msg: "Clear all start"}, function(response) {
      console.log(response);
    });
  });
}