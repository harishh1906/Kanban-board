# Kanban Board

A React-based Kanban board for organizing tasks across four workflow stages: **To Do**, **In Progress**, **Peer Review**, and **Done**. Tasks can be created, edited, removed, moved between columns with drag-and-drop, and filtered by title.

## Features

- Create, edit, and delete task cards.
- Move tasks between workflow columns using React DnD.
- Search tasks by title across the board.
- Persist board tasks in browser `localStorage`, so they remain after a page refresh in the same browser.
- Responsive layout for desktop and mobile screens.

## Technology

- React
- React DnD
- JavaScript and CSS
- Browser `localStorage`

## Project structure

The main UI is organized around these components:

- `App.js` — board layout and application state.
- `Column.js` — a workflow column.
- `Task.js` — an individual task card.
- `SearchBar.js` — task-title filtering.
- CSS files — component and responsive styling.

## Getting started

### Prerequisites

Install Node.js and npm.

### Install dependencies

Clone the repository and enter its directory:

```bash
git clone https://github.com/harishh1906/Kanban-board.git
cd Kanban-board
npm install
```

### Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Create a production build

```bash
npm run build
```

The production build is generated in the `build` directory when using the Create React App scripts.

## Data storage

This project stores task data in the browser's `localStorage`. It does not describe a server-side database or account-based synchronization, so data is specific to the browser profile where it was created. Clearing browser storage can remove saved board data.

## Contribution notes

Keep task movement, search, and persistence behavior consistent when changing board components. If a feature changes the user workflow or setup process, update this README alongside the implementation.
