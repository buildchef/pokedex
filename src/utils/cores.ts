import {TiposDePokemonEnum} from "./enums/TiposDePokemonEnum";

export type objCoresDeCardPokemon = {
    corCard: string;
    corTipos: string;
    simbolo: string;
};

export const retornarCorDoCardDePokemonDeAcordoComOTipo = (tipo?: string): objCoresDeCardPokemon => {
    const objCoresDeCard = {
        [TiposDePokemonEnum.BUG] : {
            corCard: "#42f560",
            corTipos: "#7cfc7c",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png/revision/latest/scale-to-width-down/35?cb=20161013132753"
        },
        [TiposDePokemonEnum.DRAGON] : {
            corCard: "#4942ff",
            corTipos: "#7873fa",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/c/c7/Dragon.png/revision/latest/scale-to-width-down/35?cb=20161013132807"
        },
        [TiposDePokemonEnum.ELECTRIC] : {
            corCard: "#edea28",
            corTipos: "#e3e152",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Electric.png/revision/latest/scale-to-width-down/35?cb=20161013132813"
        },
        [TiposDePokemonEnum.DARK] : {
            corCard: "#424242",
            corTipos: "#6b6b6b",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/0/0e/Dark.png/revision/latest/scale-to-width-down/35?cb=20161013132800"
        },
        [TiposDePokemonEnum.FAIRY] : {
            corCard: "#f73efa",
            corTipos: "#fa68fc",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/4/43/Fairy.png/revision/latest/scale-to-width-down/35?cb=20161013132820"
        },
        [TiposDePokemonEnum.FIGHTING] : {
            corCard: "#fc3d3d",
            corTipos: "#ff6363",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png/revision/latest/scale-to-width-down/35?cb=20161013132827"
        },
        [TiposDePokemonEnum.FIRE] : {
            corCard: "#fa802f",
            corTipos: "#fc9551",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png/revision/latest/scale-to-width-down/35?cb=20161013132833"
        },
        [TiposDePokemonEnum.FLYING] : {
            corCard: "#67a3db",
            corTipos: "#9fcffc",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png/revision/latest/scale-to-width-down/35?cb=20161013132839"
        },
        [TiposDePokemonEnum.GHOST] : {
            corCard: "#5631f7",
            corTipos: "#7254f7",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/a/ab/Ghost.png/revision/latest/scale-to-width-down/35?cb=20161013132847"
        },
        [TiposDePokemonEnum.GRASS] : {
            corCard: "#42f5b3",
            corTipos: "#7cfccd",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png/revision/latest/scale-to-width-down/35?cb=20161013132855"
        },
        [TiposDePokemonEnum.GROUND] : {
            corCard: "#694f2d",
            corTipos: "#856a48",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png/revision/latest/scale-to-width-down/35?cb=20161013132902"
        },
        [TiposDePokemonEnum.ICE] : {
            corCard: "#2af5d6",
            corTipos: "#6efae5",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/7/77/Ice.png/revision/latest/scale-to-width-down/35?cb=20161013132908"
        },
        [TiposDePokemonEnum.NORMAL] : {
            corCard: "#8a8a8a",
            corTipos: "#b3b5b5",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png/revision/latest/scale-to-width-down/35?cb=20161013132914"
        },
        [TiposDePokemonEnum.POISON] : {
            corCard: "#ba31f5",
            corTipos: "#cd64fa",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png/revision/latest/scale-to-width-down/35?cb=20161013133014"
        },
        [TiposDePokemonEnum.PSYCHIC] : {
            corCard: "#fc9ab6",
            corTipos: "#c97f94",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png/revision/latest/scale-to-width-down/35?cb=20161013133006"
        },
        [TiposDePokemonEnum.ROCK] : {
            corCard: "#8a8671",
            corTipos: "#a6a188",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png/revision/latest/scale-to-width-down/35?cb=20161013133022"
        },
        [TiposDePokemonEnum.STEEL] : {
            corCard: "#88a3b3",
            corTipos: "#5d6970",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/c/c9/Steel.png/revision/latest/scale-to-width-down/35?cb=20161013133029"
        },
        [TiposDePokemonEnum.WATER] : {
            corCard: "#3aadf0",
            corTipos: "#6cc3f5",
            simbolo: "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png/revision/latest/scale-to-width-down/35?cb=20161013133222"
        },
    }

    // @ts-ignore
    return objCoresDeCard[tipo] || {
        corCard: "",
        corTipos: "",
        simbolo: ""
    };
}