// **** Creating the script! ****
// Information needed from the extension is stored in a persistent state/variable 
// Set-up a lsitening event for runtime.onInstalled (this means once installed, the extension can start storing and reading data from a variable/state)
    // Once done, it will use the storage API to set a value because other components will/may need to use it
    // Chrome API: track and update user data 
    

let color = '#3aa757';

// Adding an event listener once installed on Chrome
chrome.runtime.onInstalled.addListener(() => {
    // Accessing Chrome's storage API here and setting a value for the colour 
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});