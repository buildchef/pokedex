import {Pokemon, PokemonType} from "../../utils/types/RetornoDetalhadoPokemon";
import {Image, Text, View} from "react-native";
import {formatarNomePokemon} from "../../utils/formatadores";

type PreviaPokemonProps = {
    pokemon?: Pokemon;
};

export default function PreviaPokemon({
    pokemon
}: PreviaPokemonProps) {
    return (
        <View
            style={{
                backgroundColor: "#42f5b3",
                borderRadius: 10,
            }}
        >
            <View>
                <Text
                    style={{
                        fontFamily: "nomePokemonFont",
                        fontSize: 20,
                        color: "white"
                    }}
                >{formatarNomePokemon(pokemon?.name)}</Text>
            </View>

            <View>
                <View>
                    {pokemon?.types.map((type: PokemonType) => (
                        <Text>{type.type.name}</Text>
                    ))}
                </View>

                <View>
                    {pokemon && pokemon.sprites.front_default ? (
                        <Image
                            source={{ uri: pokemon.sprites.front_default }}
                            width={200}
                            height={200}
                        />
                    ) : (
                        <Text>Imagem não disponível</Text>
                    )}
                </View>
            </View>
        </View>
    )
};