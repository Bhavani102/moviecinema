# MovieCinema

MovieCinema is a React Native app powered by TMDB's API, facilitating seamless movie exploration. Users can effortlessly browse trending, popular, and upcoming movies, access detailed information, and curate personalized watchlists. Its responsive design ensures an intuitive experience across Android and iOS platforms, demonstrating expertise in React Native development and API integration.

## Features
- Browse trending, popular, and upcoming movies
- Access detailed information about each movie
- Curate personalized watchlists
- Responsive design for both Android and iOS platforms

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/yourusername/moviecinema.git
    cd moviecinema
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Get TMDB API Key**:
    - Go to [TMDB](https://www.themoviedb.org) and create an account.
    - Get your API key.
    - Replace the placeholder in the `constants/index.js` file with your TMDB API key.

    ```javascript
    // constants/index.js
    export const API_KEY = 'your_tmdb_api_key';
    ```

### Running the App

1. **Run the app in development mode**:

    ```sh
    npm start
    ```

    This will start the development server. Open the Expo app on your phone to view it. The app will reload if you save edits to your files, and you will see build errors and logs in the terminal.

2. **Run on iOS** (requires macOS and iOS Simulator):

    ```sh
    npm run ios
    ```

    Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

3. **Run on Android** (requires Android build tools):

    ```sh
    npm run android
    ```

    Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see React Native docs for detailed setup).


