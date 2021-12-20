export interface PeliculasPaginatedResponse {
    count: number;
    next: string;
    previous: null;
    Search: SimplePelicula[];
}

export interface Result {
    Search: SimplePelicula;
}

export interface SimplePelicula {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface Pelicula {
    Imagen: string;
    Nombre: string;
    Rating: string;
    Descripción_larga: string;
    Director: string;
    Listado_actores: string[];
}

export interface PeliculaFull {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Plot: string;
    Director: string;
    Actors: string;
    imdbRating: string;
    Poster: string;
}