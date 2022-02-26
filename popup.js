// Selecting our button with the id changeColor
let changeColour = document.getElementById("changeColour");

// Accessing the storage API to set the colour of the background to the colour retrieved from storage
chrome.storage.sync.get("color", ({ color }) => {
    changeColour.style.backgroundColor = color;
});

// Once the changeColour button has been clicked, there is an event listener listening to the event.
// A async function is the callback function which retrieves the current page in the window (queries tabs to store current tab in tab). A script is then run on the chosen tab to then invoke the setPageBackgroundColor function. 

// This function will retrieve the colour from the storage API and set it as the background colour 
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    });
}

changeColour.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // The below is programmatically injected content script.
    // This means that the script is run only upon response to an event or specific occassion (user invoked)
    // Access is granted to the current tab if permissions is updated correctly in our manifest
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});
