


/*Overall PseudoCode Explaining how the Code below functions:



Key Details Explained:
Exporting the Puppy List:

The export keyword allows this constant to be imported into other files, 
making the puppyList available for use in the application. 
This modular approach helps keep data organized and accessible.


Data Structure:

The puppyList is an array that contains multiple objects, 
each representing a puppy. This structure is useful for 
easily iterating over the list, such as when displaying 
puppy names or details in the UI.


Properties of Each Puppy Object:

id: A unique identifier for each puppy. 
This is crucial for tracking and rendering specific puppies in a list, 
especially in React where keys are required for list items.

name: The name of the puppy, which will be displayed to users.

email: Typically represents the owner's email address, 
allowing for potential communication or owner identification.

isCute: A boolean value that can be used for conditional rendering 
(e.g., showing different styles or components based on this property).


age: Represents the age of the puppy, which may be 
relevant for displaying age-related information.

ownerId: A reference to the owner of the puppy. 
This helps in linking the puppy to its owner, which is useful for relational data management.

tricks: An array that holds the tricks the puppy can perform. 
Each trick is an object with its own id and title, allowing for easy iteration and display of each puppy's skills.

Use of Arrays for Tricks:

The tricks property is an array, allowing for multiple tricks 
to be associated with a single puppy. This design facilitates scalability, 
as a puppy can learn new tricks over time without needing to change the overall structure.


Consistency in Object Structure:

All puppy objects maintain a consistent structure, 
making it easier to manage, manipulate, and display data. 
This uniformity is important for ensuring predictable behavior 
when processing the data in the application.
*/










export const puppyList = [
    {
      id: 1,
      name: "Sir Waggington",
      email: "sir-wag@email.com",
      isCute: true,
      age: 5,
      ownerId: 1,
      tricks: [
        { id: 2, title: "Lay Down" },
        { id: 3, title: "Jump through flaming hoop" },
      ],
    },
    {
      id: 2,
      name: "Fiona Penny Pickles",
      email: "pick-your-pennies@email.com",
      isCute: true,
      age: 6,
      ownerId: 1,
      tricks: [],
    },
    {
      id: 3,
      name: "Professor Wagglesworth",
      email: "waggie@email.com",
      isCute: true,
      age: 6,
      ownerId: 2,
      tricks: [{ id: 1, title: "Sit" }],
    },
    {
      id: 4,
      name: "Sergeant Barkowitz",
      email: "the-sarge@email.com",
      isCute: true,
      age: 4,
      ownerId: 2,
      tricks: [{ id: 2, title: "Lay Down" }],
    },
    {
      id: 5,
      name: "Captain Sniffer",
      email: "capn-sniff@email.com",
      isCute: true,
      age: 7,
      ownerId: 3,
      tricks: [],
    },
    {
      id: 6,
      name: "Miss Furbulous",
      email: "miss-furby@email.com",
      isCute: true,
      age: 1,
      ownerId: 3,
      tricks: [],
    },
    {
      id: 7,
      name: "Alfred von Wigglebottom",
      email: "alfie@email.com",
      isCute: true,
      age: 2,
      ownerId: 3,
      tricks: [],
    },
  ];








