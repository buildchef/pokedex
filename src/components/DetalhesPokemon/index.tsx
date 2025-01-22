import {Image, Modal, Pressable, Text, View} from "react-native";
import {Ability, Pokemon, PokemonType} from "../../utils/types/RetornoDetalhadoPokemon";
import {retornarCorDoCardDePokemonDeAcordoComOTipo} from "../../utils/cores";
import {formatarNomePokemon} from "../../utils/formatadores";
import {MaterialIcons} from "@expo/vector-icons";
import {icones} from "../../utils/icones";

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
    return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={exibirDetalhesPokemon}
        onRequestClose={() => setExibirDetalhesPokemon(false)}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        backgroundColor: "white",
                        width: 390,
                        height: 750,
                        borderRadius: 20
                    }}
                >
                    <View
                        style={{
                            backgroundColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corCard,
                            height: 370,
                            paddingHorizontal: 15,
                            paddingTop: 30,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            borderTopWidth: 5,
                            borderLeftWidth: 5,
                            borderRightWidth: 5,
                            borderColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corTipos,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 20
                            }}
                        >
                            <Pressable
                                onPress={() => setExibirDetalhesPokemon(false)}
                            >
                                <MaterialIcons
                                    name={icones.Close}
                                    size={35}
                                    color={"white"}
                                />
                            </Pressable>
                            <MaterialIcons
                                name={"favorite"}
                                size={35}
                                color={"white"}
                            />
                        </View>
                        <View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "nomePokemonFont",
                                        fontSize: 30,
                                        color: "white",
                                    }}
                                >{formatarNomePokemon(pokemon?.name)}</Text>
                                <View
                                    style={{
                                        backgroundColor: "white",
                                        borderRadius: 100,
                                        width: 48,
                                        paddingHorizontal: 15,
                                        paddingVertical: 5,
                                        alignItems: "center",
                                        borderWidth: 3,
                                        borderColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corTipos
                                    }}
                                >
                                    <Image
                                        source={{uri: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).simbolo}}
                                        width={33}
                                        height={33}
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    gap: 10
                                }}
                            >
                                {pokemon?.types.map((type: PokemonType, index: number) => (
                                        <Text
                                            key={type.type.name || index}
                                            style={{
                                                fontFamily: "tiposPokemonFont",
                                                color: "white",
                                                fontSize: 20,
                                                textAlign: "center",
                                                backgroundColor: retornarCorDoCardDePokemonDeAcordoComOTipo(pokemon?.types[0].type.name).corTipos,
                                                borderRadius: 15,
                                                marginVertical: 8,
                                                paddingHorizontal: 15,
                                                paddingVertical: 4
                                            }}
                                        >{type.type.name.toUpperCase()}</Text>
                                ))}
                            </View>
                        </View>

                            <View
                                style={{
                                    alignItems: "center"
                                }}
                            >
                                <Image
                                    source={{uri: pokemon?.sprites?.front_default}}
                                    width={300}
                                    height={300}
                                />
                            </View>
                    </View>
                    <View
                        style={{
                            marginTop: 90,
                            paddingHorizontal: 20,
                            marginBottom: 20
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "nomePokemonFont",
                                fontSize: 18,
                                textAlign: "center",
                                marginBottom: 15
                            }}
                        >POKEMON DETAILS</Text>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                gap: 30
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    gap: 12,
                                    marginTop: 5
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "tiposPokemon",
                                        fontSize: 15
                                    }}
                                >HEIGHT</Text>
                                <Text
                                    style={{
                                        fontFamily: "tiposPokemon",
                                        fontSize: 15
                                    }}
                                >WEIGHT</Text>
                                <Text
                                    style={{
                                        fontFamily: "tiposPokemon",
                                        fontSize: 15
                                    }}
                                >HP</Text>

                                <Text
                                    style={{
                                        fontFamily: "tiposPokemon",
                                        fontSize: 15
                                    }}
                                >ATTACK</Text>

                                <Text
                                    style={{
                                        fontFamily: "tiposPokemon",
                                        fontSize: 15
                                    }}
                                >DEFENSE</Text>

                                <Text
                                    style={{
                                        fontFamily: "tiposPokemon",
                                        fontSize: 15
                                    }}
                                >SPEED</Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    gap: 12,
                                    marginTop: 5
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "tiposPokemon",
                                        fontSize: 15
                                    }}
                                >{(Number(pokemon?.height)/10) + " METERS"}</Text>
                                <Text
                                    style={{
                                        fontFamily: "tiposPokemon",
                                        fontSize: 15
                                    }}
                                >{(Number(pokemon?.weight)/10) + " KILOGRAMS"}</Text>
                                <Text
                                    style={{
                                        fontFamily: "tiposPokemon",
                                        fontSize: 15
                                    }}
                                >{pokemon?.stats[0].base_stat}</Text>

                                <Text
                                    style={{
                                        fontFamily: "tiposPokemon",
                                        fontSize: 15
                                    }}
                                >{pokemon?.stats[1].base_stat}</Text>

                                <Text
                                    style={{
                                        fontFamily: "tiposPokemon",
                                        fontSize: 15
                                    }}
                                >{pokemon?.stats[2].base_stat}</Text>

                                <Text
                                    style={{
                                        fontFamily: "tiposPokemon",
                                        fontSize: 15
                                    }}
                                >{pokemon?.stats[5].base_stat}</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        </Modal>
        );
};