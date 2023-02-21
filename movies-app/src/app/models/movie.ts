export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue:number;
  runtime:number;
  genres:Genre[];
  status:string;
}

export interface MovieDto{
  page:number,
  results:Movie[],
  totol_results:number,
  total_pages:number
}

export interface Genre{
  int:number;
  name:string;
}

export interface MovieVideoDto{
  id:number;
  results:MovieVideo[];
}

export interface MovieVideo{
  site:string;
  key:string;
}
