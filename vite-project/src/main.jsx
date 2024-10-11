/* Overall Pseudocode of how this Code Functions:

"Key Details Explained:
React and ReactDOM:

React is the core library that provides functionalities for creating components
 and managing state.
ReactDOM is used for rendering React components into the DOM. 
It connects React to the browser's actual HTML page.


App Component:

The App component (imported from App.jsx) is the main container for all components. 
This component holds all the logic, state management, and other child components.
All your React logic starts from this App component, w
hich is why it’s rendered inside the root element in the HTML.


Global Styles:

index.css is a global stylesheet. This file typically includes 
CSS that applies site-wide, such as resets or base typography. 
It’s imported here so the styles are applied throughout the entire app.


ReactDOM.createRoot():

This method creates a React root where your React app 
will live inside the existing HTML structure. 
The root is typically a div in the public/index.html file.
This is the modern way of rendering React apps with React 18+.


React.StrictMode:

It’s a development tool that helps identify potential issues 
in your code. It activates additional checks and warnings, 
but it doesn’t affect production builds or the visible UI.
In summary, this code sets up the core infrastructure of your React application 
by rendering the App component inside the root div in the DOM and 
applying global CSS styling. 
It also enables strict mode to help ensure 
good coding practices during development."

*/











/*First try, didn't add comments:
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // This can hold global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



*/



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // This can hold global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*Commented Out, to be Replaced by Other Code:

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


*/