import films from "../utils/Film";

export const getFilms = () => {
  // const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b8a15fc57f6b4c47a2e86a0e5c55a36c&language=en-US&page=1&sort_by=popularity.desc");
  // const data = await response.json();

  // console.log(data);

  return films;
};

export default getFilms;
