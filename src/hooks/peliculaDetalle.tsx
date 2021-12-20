import { useEffect, useState } from "react";
import { peliculasApi } from "../api/peliculasApi";
import { PeliculaFull } from "../models/peliculasModels";

export const peliculaDetalle = (imdbID: string) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [peliculaFull, setPelicula] = useState<PeliculaFull>({} as PeliculaFull);

    const loadPelicula = async() => {
        const resp = await peliculasApi.get<PeliculaFull>(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=d713e8aa`)
        setPelicula(resp.data)
        setIsLoading(false);
    }

    useEffect(() => {
        loadPelicula();
    }, [])


    return {
        isLoading,
        peliculaFull
    }

}
