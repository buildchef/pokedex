import {Pokemon, PokemonType} from "../../utils/types/RetornoDetalhadoPokemon";
import {Image, Text, View} from "react-native";
import {formatarNomePokemon} from "../../utils/formatadores";
import {useEffect, useState} from "react";
import {objCoresDeCardPokemon, retornarCorDoCardDePokemonDeAcordoComOTipo} from "../../utils/cores";

type PreviaPokemonProps = {
    pokemon?: Pokemon;
};

export default function PreviaPokemon({
    pokemon
}: PreviaPokemonProps) {

    return (
        <View
            style={{
                backgroundColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corCard,
                borderRadius: 20,
                borderWidth: 4,
                borderColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corTipos,
                padding: 15,
                width: 250,
                height: 120,
                marginTop: 30
            }}
        >
            <View>
                <Text
                    style={{
                        fontFamily: "nomePokemonFont",
                        fontSize: 20,
                        color: "white",
                    }}
                >{formatarNomePokemon(pokemon?.name)}</Text>
            </View>

            <View style={{
                flexDirection: "row"
            }}>
                <View>
                    {pokemon?.types.map((type: PokemonType, index: number) => (
                        <View
                            style={{
                                backgroundColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corTipos,
                                width: 80,
                                alignItems: "center",
                                borderRadius: 15,
                                padding: 4,
                                marginVertical: 3
                            }}
                            key={type.type.name || index}
                        >
                            <Text
                                style={{
                                    fontFamily: "tiposPokemonFont",
                                    color: "white",
                                    fontSize: 15,
                                }}
                            >{type.type.name}</Text>
                        </View>
                    ))}
                </View>
                <View>
                    {pokemon && pokemon.sprites.front_default ? (
                        <Image
                            source={{ uri: pokemon.sprites.front_default }}
                            width={200}
                            height={200}
                            style={{
                                marginLeft:40,
                                marginTop:-55,
                                marginBottom:-65,
                            }}
                        />
                    ) : (
                        <Text>Imagem não disponível</Text>
                    )}
                </View>
            </View>
        </View>
    )
};