export type TGenre = {
  name: string;
};

export type TMovie = {
  id: number;
  title: string;
  original_title: string;
  name: string;

  backdrop_path: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: string;
  genres: TGenre[];
};

export type TCast = {
  id: number;
  profile_path: string;
  original_name: string;
  character: string;
};

export type TReview = {
  id: number;
  author: string;
  content: string;
};
