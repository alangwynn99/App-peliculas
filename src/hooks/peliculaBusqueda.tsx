import { useEffect, useState } from "react";
import { peliculasApi } from "../api/peliculasApi";
import { PeliculaFull } from "../models/peliculasModels";

export const peliculaBusqueda = (name: string, year?: string) => {
    const [isLoading, setIsLoading] = useState(true);
    const [peliculaFull, setPelicula] = useState<PeliculaFull>({} as PeliculaFull);

    const searchPelicula = async() => {
        const resp = await peliculasApi.get<PeliculaFull>(`http://www.omdbapi.com/?t=${name}&y=${year}&plot=full&apikey=d713e8aa`)
        setPelicula(resp.data)

        setIsLoading(false);
    }

    useEffect(() => {
        searchPelicula();
    }, [])

    return {
        isLoading,
        peliculaFull,
    }

}
