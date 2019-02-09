chrome.runtime.sendMessage({message: "hi"}, (response) => {
  console.log(response.message);
});