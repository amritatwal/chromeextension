<!-- Notes -->
## Getting started

- Extension components can consist of HTML, CSS & JS
- TODO: aim? change the background colour of a page
- Extensions start with a manifest (manifest.json)
  - Manifests are required in every extension
  - They provide metadata? or important information
- I've learnt that you can unpack an extension if you just have the manifest.json file 
  

## Functionality
- In this state the extension cannot execute any logic or do anything 
- A background script is a component and must be registered in the manifest
- Once done, it can tell the manifest what file(s) it should reference and how that file will behave
- When new scripts are added, Chrome will scan for them for any instructions it needs to perform functionality
- APIs must be included in the permissions field in the manifest in order to grant access

## User Interface

- Extensions can have user interfaces. The UI should be simple and non-distracting. They should enhance the UX.
- In this extension, there will be a popup (popup.html)
- The HTML file will reference button.css
- Toolbar icons now placed in the directory and manifest needs to be updated in order for it to know where they are located 
- Clicking the pinned extension icon will open up the popup that displays a button showing its default colour
- Able to give users options to choose the colour themselves (options.html - ensure included in manifest)