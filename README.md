# CyberSpeed React Native App

CyberSpeed is a cross-platform mobile application developed using React Native and TypeScript. It allows users to search for movies in an open API movie database, view detailed information about each movie, and explore actors and reviews.

## Features

- **Home Screen**: Displays 10 random movies and includes a search bar for searching movies.
- **Search Functionality**: Enables users to search for movies based on title or keywords.
- **Movie Detail Screen**: Shows detailed information about each movie, including title, description, poster, actors, and reviews.
- **Cross-Platform Compatibility**: Runs smoothly on both iOS and Android devices.
- **Business Logic SDK**: Utilizes the `react-native-movies-sdk`, a network business logic SDK in TypeScript for fetching movie data from the API. Includes functions for fetching random movies, searching for movies, and retrieving movie details.
- **State Management**: Integrates Redux for managing the application's state, including movie data, search results, and selected movie details, with Redux Saga for handling asynchronous actions.

## Bonus Features

- **Optimized SDK Usage in CyberSpeed**: Implements optimized usage of the `react-native-movies-sdk` within the CyberSpeed app, ensuring efficient performance and minimal resource consumption.
- **State Manager Optimization**: Implements optimizations in Redux to further improve performance and efficiency for the CyberSpeed app.

## Setup Instructions

1. Clone the repository:

```bash
git clone <repository_url>

2. Install Dependencies:

cd CyberSpeed
npm install

3. Run the application

npx react-native run-android   # For Android
npx react-native run-ios       # For iOS

## Project Struture

CyberSpeed/
├── src/
│   ├── components/            # Reusable components
│   ├── navigation/            # Navigation setup
│   ├── screens/               # Screen components
│   ├── store/                 # Redux store setup
│   │   ├── actions/           # Redux actions
│   │   ├── reducers/          # Redux reducers
│   │   └── sagas/             # Redux Saga middleware
│   ├── sdk/                   # Network business logic SDK
│   └── ...
└── ...




