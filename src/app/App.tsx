import { StatusBar } from "expo-status-bar";
import {StyleSheet, View, FlatList, Image, Text, Pressable} from "react-native";
import { useEffect, useState } from "react";
import PreviaPokemon from "../components/PreviaPokemon";
import { Pokemon } from "../utils/types/RetornoDetalhadoPokemon";
import { consultarPokemons } from "../api/consultarPokemon";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import MenuOpcoes from "../components/MenuOpcoes";

export default function App() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [exibirModalOpcoes, setExibirModalOpcoes] = useState<boolean>(false);
    const [fontsLoaded] = useFonts({
        nomePokemonFont: require("../../assets/fonts/nomePokemon.ttf"),
        tiposPokemonFont: require("../../assets/fonts/tiposPokemon.ttf"),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();

            const ids = Array.from({ length: 151 }, (_, i) => i + 1);
            const pokemonData = await consultarPokemons(ids);
            setPokemons(pokemonData);

            SplashScreen.hideAsync();
        }
        prepare();
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View
                style={{
                    backgroundColor: "#fa3e25",
                    height: 100,
                    width: "100%",
                    marginBottom: -40,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        color: "white",
                        fontFamily: "nomePokemonFont",
                        textAlign: "center"
                    }}
                >POKEDEX</Text>

                <Pressable
                    onPress={() => setExibirModalOpcoes(true)}
                >
                    <Image
                        source={{
                            uri: "https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-pokemon-game-symbol-pikachu-play-png-image_5289221.png"
                        }}
                        width={50}
                        height={50}
                        style={{
                            marginBottom: -60
                        }}
                    />
                </Pressable>

            </View>

            <MenuOpcoes
                exibirModalOpcoes={exibirModalOpcoes}
                setExibirModalOpcoes={setExibirModalOpcoes}
            />

            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <PreviaPokemon pokemon={item} />}
                contentContainerStyle={{ padding: 50}}
                showsVerticalScrollIndicator={false}
                style={{
                    marginTop: 50
                }}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start"
    },
});
