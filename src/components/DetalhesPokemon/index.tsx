import {Image, Modal, Pressable, Text, View} from "react-native";
import {Pokemon, PokemonType} from "../../utils/types/RetornoDetalhadoPokemon";
import {retornarCorDoCardDePokemonDeAcordoComOTipo} from "../../utils/cores";
import {formatarNomePokemon} from "../../utils/formatadores";
import {MaterialIcons} from "@expo/vector-icons";
import {styles} from "./style";
import {moderateScale} from "react-native-size-matters";

export type DetalhesPokemonProps = {
    exibirDetalhesPokemon: boolean;
    setExibirDetalhesPokemon: (valor: boolean) => void;
    pokemon?: Pokemon;
}

export default function DetalhesPokemon({
    exibirDetalhesPokemon,
    setExibirDetalhesPokemon,
    pokemon
}: DetalhesPokemonProps) {
    return pokemon?.sprites?.front_default && (
        <Modal
            animationType="fade"
            transparent={true}
            visible={exibirDetalhesPokemon}
            onRequestClose={() => setExibirDetalhesPokemon(false)}
        >
            <View style={styles.fundoModal}>
                <View style={styles.containerModal}>
                    <View
                        style={[styles.containerFotoETipoPokemon, {
                            backgroundColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corCard,
                            borderColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corTipos,
                        }]}
                    >
                        <View style={styles.containerFecharEFavoritar}>
                            <Pressable onPress={() => setExibirDetalhesPokemon(false)}>
                                <MaterialIcons
                                    name={"close"}
                                    size={moderateScale(35)}
                                    color={"white"}
                                />
                            </Pressable>
                            <MaterialIcons
                                name={"favorite"}
                                size={moderateScale(35)}
                                color={"white"}
                            />
                        </View>
                        <View>
                            <View style={styles.containerNomeESimbolo}>
                                <Text style={styles.nomePokemon}>{formatarNomePokemon(pokemon?.name)}</Text>
                                <View
                                    style={[ styles.fundoSimbolo,
                                        {borderColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corTipos}]}>
                                    <Image
                                        source={{uri: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).simbolo}}
                                        width={moderateScale(33)}
                                        height={moderateScale(33)}
                                    />
                                </View>
                            </View>
                            <View style={styles.containerTipospokemon}>
                                {pokemon?.types.map((type: PokemonType, index: number) => (
                                    <Text
                                        key={type.type.name || index}
                                        style={[styles.textoTipoPokemon,
                                        {backgroundColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corTipos}]}
                                    >{type.type.name.toUpperCase()}</Text>
                                ))}
                            </View>
                        </View>

                        <View style={{alignItems: "center"}}>
                            <Image
                                source={{uri: pokemon?.sprites?.front_default}}
                                width={moderateScale(300)}
                                height={moderateScale(300)}
                            />
                        </View>
                    </View>
                    <View style={styles.containerDetalhesDoPokemon}>
                        <Text style={styles.textoDetalhesDoPokemon}>POKEMON DETAILS</Text>

                        <View style={styles.containerDeAlinhamentoDeAtributos}>
                            <View style={styles.containerDeAtributosEValores}>
                                <Text style={styles.textoAtributosEValores}>HEIGHT</Text>
                                <Text style={styles.textoAtributosEValores}>WEIGHT</Text>
                                <Text style={styles.textoAtributosEValores}>HP</Text>
                                <Text style={styles.textoAtributosEValores}>ATTACK</Text>
                                <Text style={styles.textoAtributosEValores}>DEFENSE</Text>
                                <Text style={styles.textoAtributosEValores}>SPEED</Text>
                            </View>

                            <View style={styles.containerDeAtributosEValores}>
                                <Text style={styles.textoAtributosEValores}>{(Number(pokemon?.height)/10) + " METERS"}</Text>
                                <Text style={styles.textoAtributosEValores}>{(Number(pokemon?.weight)/10) + " KILOGRAMS"}</Text>
                                <Text style={styles.textoAtributosEValores}>{pokemon?.stats[0].base_stat}</Text>
                                <Text style={styles.textoAtributosEValores}>{pokemon?.stats[1].base_stat}</Text>
                                <Text style={styles.textoAtributosEValores}>{pokemon?.stats[2].base_stat}</Text>
                                <Text style={styles.textoAtributosEValores}>{pokemon?.stats[5].base_stat}</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
};