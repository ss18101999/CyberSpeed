# CyberSpeed React Native App

CyberSpeed is a cross-platform mobile application developed using React Native and TypeScript. It allows users to search for movies in an open API movie database, view detailed information about each movie, and explore actors and reviews.

## SDK Used for getting movies
We have used SDK/npm npm module named [React-Native-movies-sdk](https://www.npmjs.com/package/react-native-movies-sdk) developed specifcally for this project, details for the same can be found at the npm page.

## Assumptions

- We have to make certain assumptions while making this application, as the first hurdle was to get the movies API to get the data, we managed to get one, but in that API, we were only getting movie name, type, poster, year only. So, in certain screens we have to use static data to show the functionality like in the movie detail screen we have used static data for reviews, rating & description.

- The SDK, which we are using only have the api end point that provides, movies data based on title or keyword, it's doesn't provide an endpoint to get random movies, so instead for the homepage currently we are displaying movies recommendation based on a specific movie search which is "Jawan" in this case.
## Features

- **Home Screen**: Displays 10 random movies and includes a search bar for searching movies.
- **Search Functionality**: Enables users to search for movies based on title or keywords.
- **Movie Detail Screen**: Shows detailed information about each movie, including title, description, poster, actors, and reviews.
- **Cross-Platform Compatibility**: Runs smoothly on both iOS and Android devices.
- **Business Logic SDK**: Utilizes the `react-native-movies-sdk`, a network business logic SDK developed in TypeScript for fetching movie data from the API. Includes functions for fetching random movies, searching for movies, and retrieving movie details.
- **State Management**: Integrates Redux for managing the application's state, including movie data, search results, and selected movie details, with Redux Saga for handling asynchronous actions.

## Bonus Features

- **Optimized SDK Usage in CyberSpeed**: Implements optimized usage of the `react-native-movies-sdk` within the CyberSpeed app, ensuring efficient performance and minimal resource consumption.
- **State Manager Optimization**: Implements optimizations in Redux to further improve performance and efficiency for the CyberSpeed app.

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/ss18101999/CyberSpeed.git
```
2. Install Dependencies:
```bash
cd CyberSpeed
npm install
```
3. Run the application
```bash
npx react-native run-android   # For Android
npx react-native run-ios       # For iOS
```
## Project Struture
```bash
CyberSpeed/
├── src/
│   ├── resources/             # Resources
│   ├── navigation/            # Navigation setup
│   ├── screens/               # Screen components
│   ├── store/                 # Redux store setup
│   │   ├── actions/           # Redux actions
│   │   ├── reducers/          # Redux reducers
│   │   └── sagas/             # Redux Saga middleware
│   ├── sdk/                   # Network business logic SDK
│   └── ...
└── ...
```

## Previews

![gif-20240421-142354](https://github.com/ss18101999/CyberSpeed/assets/49299771/bf02bafc-e7fd-48d2-b558-c5c4403167ab) 

![gif-20240421-142254](https://github.com/ss18101999/CyberSpeed/assets/49299771/cec6d55d-c214-4d60-9b3e-1fc0a79c3cb7)




