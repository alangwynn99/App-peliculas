import { useEffect, useRef, useState } from "react";
import { peliculasApi } from "../api/peliculasApi";
import { Pelicula, PeliculasPaginatedResponse, Result, SimplePelicula } from "../models/peliculasModels";

export const peliculasPaginated = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [peliculasList, setpeliculasList] = useState<SimplePelicula[]>([])
    const nextPageUrl = useRef('http://www.omdbapi.com/?s=Tar&apikey=d713e8aa&type=movie')
    
    const loadPeliculas = async() => {

        setIsLoading(true);
        const resp = await peliculasApi.get<PeliculasPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;

        setpeliculasList([...peliculasList, ...resp.data.Search])
        setIsLoading(false);

    }

    useEffect(() => {
        loadPeliculas();
    }, [])

    return {
        isLoading,
        peliculasList, 
        loadPeliculas
    }

}
