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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Kanban Board

This is a **Kanban Board** application built using **ReactJS**. The app allows users to manage tasks across different stages: **To Do**, **In Progress**, **Peer Review**, and **Done**. Users can add new tasks, move tasks between columns using **drag-and-drop** functionality, and filter tasks using a **search bar**.

## Technologies Used:
- **ReactJS**: Frontend framework to build the user interface.
- **React DnD**: For drag-and-drop functionality between columns.
- **Local Storage**: To persist tasks and user data locally on the browser.
- **CSS**: To style the application and make it responsive.

## Features:
- **Task Management**: Users can add, edit, and remove tasks.
- **Drag-and-Drop**: Tasks can be moved between columns (To Do, In Progress, Peer Review, Done).
- **Search Bar**: Users can filter tasks by title across all columns.
- **Responsive Design**: The layout adjusts for mobile and desktop views.
- **Persistent Data**: Tasks are stored in **localStorage** to persist even after refreshing the page.

## Project Layout:
The project is organized into several components:
1. **App.js** - The main component where the Kanban board layout and logic are handled.
2. **Column.js** - Component representing each column of the Kanban board (To Do, In Progress, Peer Review, Done).
3. **Task.js** - Component that displays each task card.
4. **SearchBar.js** - Component to search/filter tasks by title.
5. **CSS Files** - For styling the components.

## Getting Started

### Prerequisites:
Before you start, make sure you have **Node.js** and **npm** installed on your system. You can download them from [Node.js website](https://nodejs.org/).

### Installation:

1. **Clone the repository** to your local machine:
   ```bash
   git clone <repo-url>
