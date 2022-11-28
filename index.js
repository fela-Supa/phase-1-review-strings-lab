// Write your code in this file!
const currentUser= "Mark Mbugua Wanjau";
const welcomeMessage= `Welcome to Flatbook, ${currentUser}!`;
console.log(currentUser);
console.log(welcomeMessage);

const upperCaseCurrentUser= currentUser.toUpperCase();
const excitedWelcomeMessage= `WELCOME TO FLATBOOK, ${upperCaseCurrentUser}!`;
console.log(upperCaseCurrentUser);
console.log(excitedWelcomeMessage);

const shortGreeting= `Welcome, ${currentUser.slice(0, 1)}!`;
console.log(shortGreeting)