import axios from "axios";

export const consultarPokemon = async () => {
    try{
        const resultado = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
        console.log(resultado.data.results);
        return resultado.data;
    } catch (error) {
        console.log("Erro na consulta de pókemon ====>", error);
    }
};