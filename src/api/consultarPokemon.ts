import axios from "axios";
import {Pokemon} from "../utils/types/RetornoDetalhadoPokemon";

export type RetornoSimplesPokemon = {
    name: string;
    url: string;
};

export const consultarPokemon = async (): Promise<Pokemon> => {
    try{
        const resultado = await axios.get("https://pokeapi.co/api/v2/pokemon/1/");
        console.log(resultado.data)
        return resultado.data;
    } catch (error) {
        console.log("Erro na consulta de pókemon ====>", error);
        throw error;
    }
};