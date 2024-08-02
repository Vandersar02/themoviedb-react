# MovieExplorer

MovieExplorer is a React application built with TypeScript that allows users to explore movies using The Movie Database (TMDB) API. It provides features like searching for movies, viewing details, and discovering popular and top-rated films.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Technologies](#technologies)

## Demo

Check out the live demo of MovieExplorer [here](#).

## Features

- Search for movies by title
- View detailed information about each movie
- Discover popular, top-rated, and upcoming movies
- Responsive design for all devices

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Vandersar02/themoviedb-react.git
   cd themoviedb-react
   ```

````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file:**

   Create a `.env` file in the root directory of the project and add your TMDB API key:

   ```plaintext
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual TMDB API key. You can obtain it by creating an account on [TMDB](https://www.themoviedb.org/) and generating an API key from the developer section.

4. **Start the development server:**

   ```bash
   npm start
   ```

   The app will be running at `http://localhost:3000`.


## Usage

- Enter a movie title in the search bar to find movies.
- Click on a movie to view more details, including the synopsis, release date, and ratings.
- Explore different categories like popular, top-rated, and upcoming movies.

## API Reference

This project uses The Movie Database (TMDB) API. For more details, refer to the [official TMDB API documentation](https://developers.themoviedb.org/3/getting-started/introduction).

## Technologies

- **React** - A JavaScript library for building user interfaces
- **TypeScript** - A superset of JavaScript that adds static typing
- **TMDB API** - An API to access movie data
- **Axios** - A promise-based HTTP client for making requests
- **React Router** - A library for routing in React applications
- **Styled Components** - A library for styling React components
````
