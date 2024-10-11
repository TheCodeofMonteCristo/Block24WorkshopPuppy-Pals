
/*Overall Pseudocode explaining how this code functions: 

Key Details Explained:
Imports:

The necessary dependencies are imported at the top: 
useState from React for state management, the puppyList data 
from a local file, and the associated CSS for styling.


Functional Component:

The App function defines a functional component, 
which is a core feature of React. This component will manage 
the application state and UI rendering.


State Management:

Two state variables are created using the useState hook:
puppies holds the list of puppies, initialized with the puppyList 
imported from data.js.
featPupId keeps track of the ID of the currently selected puppy. 
It starts as null, indicating no puppy is selected.


Finding the Featured Puppy:

The featuredPup variable uses the Array.find() method to locate a 
puppy whose ID matches featPupId. This makes it easy to retrieve the 
detailed information of the currently selected puppy.


JSX Structure:

The return statement contains the JSX structure for the component, 
which defines what will be rendered on the screen:

A main div with the class name "App" serves as the container.
A nested div with the class "puppy-list" maps over the puppies array, 
rendering each puppy's name inside a p tag. An onClick event is 
added to set the featured puppy ID when a name is clicked.


Conditional Rendering:

The section that displays the featured puppy's details is wrapped in a conditional statement 
that checks if featPupId and featuredPup are both truthy (not null). 
This prevents any errors from trying to access properties of undefined.


Featured Puppy Details:

If a puppy is selected, a div with the class "featured-puppy" 
renders the selected puppy’s name and details in an unordered list format.


Exporting the Component:

The App component is exported as the default export, allowing it to be imported
 and used in other parts of the application (e.g., index.js).


 Commented Out Code:

The commented-out section contains an earlier implementation of the App component 
with example state management (a simple counter). 
This code demonstrates how the structure can change as development progresses.

*/









































/*Commented Out, to be Replaced by Other Code:



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


*/



import { useState } from 'react';
import { puppyList } from './data.js';
import './App.css';

function App() {
  // Setting up state for puppies and the featured puppy ID
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // Find the featured puppy based on the selected ID
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {/* Mapping over the list of puppies to display their names */}
      <div className="puppy-list">
        {puppies.map((puppy) => (
          <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        ))}
      </div>

      {/* Conditionally rendering the featured puppy's details */}
      {featPupId && featuredPup && (
        <div className="featured-puppy">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;