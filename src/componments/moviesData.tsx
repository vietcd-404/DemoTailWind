import a1 from "../assets/batman_begins.jpg";
import a2 from "../assets/dune.jpg";
import a3 from "../assets/sing_2.jpg";
import a4 from "../assets/spider_man.jpg";
import a5 from "../assets/the_dark_knight.jpg";

export interface Movie {
  src: string;
  title: string;
  main: string;
  runtime: string;
}

export const moviesData: Movie[] = [
  {
    src: a1,
    title: "Batman Begins",
    main: "Brable Bale",
    runtime: "90 mintues",
  },
  {
    src: a2,
    title: "Spider-Man",
    main: "Brable Bale",
    runtime: "90 mintues",
  },
  {
    src: a3,
    title: "The Dark",
    main: "Brable Bale",
    runtime: "90 mintues",
  },
  {
    src: a4,
    title: "The kind",
    main: "Brable Bale",
    runtime: "90 mintues",
  },
  {
    src: a5,
    title: "Rose",
    main: "Brable Bale",
    runtime: "90 mintues",
  },
];
