import {Pokemon, PokemonType} from "../../utils/types/RetornoDetalhadoPokemon";
import {Image, Pressable, Text, View} from "react-native";
import {formatarNomePokemon} from "../../utils/formatadores";
import {retornarCorDoCardDePokemonDeAcordoComOTipo} from "../../utils/cores";
import {styles} from "./style";

type PreviaPokemonProps = {
    setExibirDetalhesPokemon: (valor: boolean) => void;
    setPokemonParaDetalhar: (pokemon: Pokemon) => void;
    pokemon?: Pokemon;
};

export default function PreviaPokemon({
    setExibirDetalhesPokemon, setPokemonParaDetalhar, pokemon
}: PreviaPokemonProps) {

    return pokemon && pokemon.sprites.front_default && (
        <Pressable
            style={[styles.containerPreviaPokemon, {
                backgroundColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corCard,
                borderColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corTipos,
            }]}
            onPress={() => {
                setPokemonParaDetalhar(pokemon);
                setExibirDetalhesPokemon(true);
            }}
        >
            <Text style={styles.nomePokemon}>{formatarNomePokemon(pokemon?.name)}</Text>

            <View style={{flexDirection: "row"}}>
                <View>
                    {pokemon?.types.map((type: PokemonType, index: number) => (
                        <View
                            style={[styles.fundoTipoPokemon, {
                                backgroundColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corTipos,
                            }]}
                            key={type.type.name || index}
                        >
                            <Text style={styles.textoTipoPokemon}>{type.type.name}</Text>
                        </View>
                    ))}
                </View>
                <Image
                    source={{ uri: pokemon.sprites.front_default }}
                    width={200}
                    height={200}
                    style={styles.imagemPreviaPokemon}
                />
            </View>
        </Pressable>
    )
};