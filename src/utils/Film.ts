export interface Film {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  rating: number;
  genres: string[];
  image: string;
  url: string;
}

export const films: Film[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseDate: "14 October 1994",
    rating: 9.2,
    genres: ["Crime", "Drama"],
    image: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    url: "https://www.themoviedb.org/movie/251",
  },
  {
    id: 3,
    title: "The Dark Knight",
    description:
      "When Batman, Gordon and Harvey Dent launch an assault on the mob, they let the clown out of the box.",
    releaseDate: "2008",
    rating: 9.0,
    genres: ["Action", "Crime", "Drama"],
    image: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    url: "https://www.themoviedb.org/movie/37",
  },
];

export default films;
