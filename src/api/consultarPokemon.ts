import axios from "axios";
import { Pokemon } from "../utils/types/RetornoDetalhadoPokemon";

export const consultarPokemons = async (ids: number[]): Promise<Pokemon[]> => {
    try {
        const resultados = await Promise.all(
            ids.map(id =>
                axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(res => res.data)
            )
        );
        return resultados;
    } catch (error) {
        console.log("Erro na consulta de Pokémons ====>", error);
        throw error;
    }
};
