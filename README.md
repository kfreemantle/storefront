# Lab 36, 37 - Redux Storefront

## Project: Application State with Redux

### Author: Kyle Freemantle

### Problem Domain  

This is an application intended to mock a storefront, using Redux and Material UI for functionality/styling.  

### Links and Resources

- [Github PR](https://github.com/kfreemantle/storefront/pull/1)

- [Live Sandbox Deployment](https://codesandbox.io/p/github/kfreemantle/storefront/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clhzkdyb2000a2v6kv5oxpo21%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clhzkdyb2000c2v6ko85nknl1%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clhzkdyb2000a2v6kv5oxpo21%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clhzkdyb200092v6k2edquh62%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clhzkdyb2000a2v6kv5oxpo21%2522%252C%2522activeTabId%2522%253A%2522clhzkdyb200092v6k2edquh62%2522%257D%252C%2522clhzkdyb2000c2v6ko85nknl1%2522%253A%257B%2522id%2522%253A%2522clhzkdyb2000c2v6ko85nknl1%2522%252C%2522activeTabId%2522%253A%2522clhzkepey00c22v6kjadi12ek%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clhzkemvz00792v6kli1tx8la%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522clhzkepey00c22v6kjadi12ek%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D&workspaceId=216fda8a-8d62-444f-a078-a65ad2d4f213)

### Acknowledgements

- I referred intermittently to previous projects by Code Fellows student Steven Gant, as well as the Redux documentation and ChatGPT for assistance with syntax.

### Setup

- `npm install`

#### How to initialize/run your application (where applicable)

- `npm start`

#### Features

- Display a list of our product categories
- Display a listing of products for each category, when the category is selected
- Reset the view when reset is clicked.

#### Tests

- None for this phase


#### UML

![UML]('./public/lab36UML.png')
