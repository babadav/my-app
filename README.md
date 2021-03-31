 The engine behind this web app assessment is React.js. There are five different components that put the application together. At the very top of the page is just a simple ‘Welcome’ component with static copy. Next is the ‘ActiveVehicles’ component. This component gathers data that it receives as ‘props’, and sets up a grid via Flexbox with it. The purpose of this component is to show the administrator all vehicles that are currently on the road and what their battery charge level currently is. Lastly, all of the map functionality used comes from a library called MapBox. -I recently heard about this library and thought we could try it out for this demonstration. All of the logic and functionality for the map is done in the ‘App.js’ file. It’s set up this way because I make a call to an API and need to pass this data down to my children components. Currently, the app is set up to  set random points on the map. Additionally, the user can click on to one of the cars on the map, and see that cars name and battery level. There is a separate component for this functionality called ‘PopUp’. The current coordinates are set to Denver CO. The user can zoom in and out via controls on the map to see the cars more clearly. All data on the page is being dynamically populated via a mockAPI file called FetchFakeData. It is in this file where all data is being set for use on the map and the grid above it. BEM was implemented for the JSX and CSS structure.  

## Available Scripts

In the project directory, you can run:


Please run NPM install and make sure your node version is > 11.

Then Run 

### `npm start`

