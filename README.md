# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Libraries Used

### React JS

Used as framework for the webapp. Also uses create-react-app script to bootstrap project

### React-Redux

Used as global storage framework which stores ui states and temporary in memory playlist. Also used as
storage for Spotify search results and configured Spotify client

### MUI For React

React based UI library built around materials UI. Used for UI components.

### Spotify Web API

Spotify API client wrapper

### React DnD

Drag and Drop library for react.

### Eslint

Code formatter.

## Dev Notes

1. Spotify API requires authentiction which is achieved by implicit OAuth. After clicking "Login" button, you will be taken 
to Spotify login page. Implicit Oauth flow is initiated, and you will be redirected back to localhost:3000 with access token 
in the URL query. With access token in the URL query, the search and save page is shown.
2. Search for artist, music, or album names in the search bar and click "Search" to get results. A button is used to initiate
search rather than search as you type to reduce complexity with implementation and remove the need to optimize performance.
3. Drag song to the list on the right and drop it to save it in memory. Clicking "Save" will save it to browser local storage.
This is again done to simplify implementation and remove the need to optimize performance.
4. Clicking "Clear" will clear songs from local storage.
5. Persisting, retrieving, and clearing playlist is encapsulated so that storage can be changed to different medium is necessary.

## Next Steps

This project can be further improved with the following steps:
1. At css transitions to drag and drop action to make the UI feel more fluid and natural.
2. Show user avatar and add logout dropdown menu on the top right user avatar placeholder
3. Add ability to remove single song from the saved playlist
4. Add unit tests to ensure maintainability
5. Optimize code by factoring out components that are being reused
6. CSS fixes that will help ensure consistency such as fonts and font sizes.

## Gotchas

1. When running into an error message with a text like "Pleas login again", go to localhost:3000 (removing all URL query parameters).
Access token is expired and oauth flow needs to be reinitiated.
