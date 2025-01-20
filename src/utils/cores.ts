import {TiposDePokemonEnum} from "./enums/TiposDePokemonEnum";

export type objCoresDeCardPokemon = {
    corCard: string,
    corTipos: string
};

export const retornarCorDoCardDePokemonDeAcordoComOTipo = (tipo?: string): objCoresDeCardPokemon => {
    const objCoresDeCard = {
        [TiposDePokemonEnum.BUG] : {
            corCard: "#42f560",
            corTipos: "#7cfc7c"
        },
        [TiposDePokemonEnum.DRAGON] : {
            corCard: "#4942ff",
            corTipos: "#7873fa"
        },
        [TiposDePokemonEnum.ELECTRIC] : {
            corCard: "#edea28",
            corTipos: "#e3e152"
        },
        [TiposDePokemonEnum.DARK] : {
            corCard: "#424242",
            corTipos: "#6b6b6b"
        },
        [TiposDePokemonEnum.FAIRY] : {
            corCard: "#f73efa",
            corTipos: "#fa68fc"
        },
        [TiposDePokemonEnum.FIGHTING] : {
            corCard: "#fc3d3d",
            corTipos: "#ff6363"
        },
        [TiposDePokemonEnum.FIRE] : {
            corCard: "#fa802f",
            corTipos: "#fc9551"
        },
        [TiposDePokemonEnum.FLYING] : {
            corCard: "#67a3db",
            corTipos: "#9fcffc"
        },
        [TiposDePokemonEnum.GHOST] : {
            corCard: "#5631f7",
            corTipos: "#7254f7"
        },
        [TiposDePokemonEnum.GRASS] : {
            corCard: "#42f5b3",
            corTipos: "#7cfccd"
        },
        [TiposDePokemonEnum.GROUND] : {
            corCard: "#694f2d",
            corTipos: "#856a48"
        },
        [TiposDePokemonEnum.ICE] : {
            corCard: "#2af5d6",
            corTipos: "#6efae5"
        },
        [TiposDePokemonEnum.NORMAL] : {
            corCard: "#8a8a8a",
            corTipos: "#b3b5b5"
        },
        [TiposDePokemonEnum.POISON] : {
            corCard: "#ba31f5",
            corTipos: "#cd64fa"
        },
        [TiposDePokemonEnum.PSYCHIC] : {
            corCard: "#fc9ab6",
            corTipos: "#c97f94"
        },
        [TiposDePokemonEnum.ROCK] : {
            corCard: "#8a8671",
            corTipos: "#a6a188"
        },
        [TiposDePokemonEnum.STEEL] : {
            corCard: "#88a3b3",
            corTipos: "#5d6970"
        },
        [TiposDePokemonEnum.WATER] : {
            corCard: "#3aadf0",
            corTipos: "#6cc3f5"
        },
    }

    // @ts-ignore
    return objCoresDeCard[tipo] || {
        corCard: "",
        corTipos: ""};
}