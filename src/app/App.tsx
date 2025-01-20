import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import PreviaPokemon from "../components/PreviaPokemon";
import { Pokemon } from "../utils/types/RetornoDetalhadoPokemon";
import { consultarPokemons } from "../api/consultarPokemon";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

export default function App() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [fontsLoaded] = useFonts({
        nomePokemonFont: require("../../assets/fonts/nomePokemon.ttf"),
        tiposPokemonFont: require("../../assets/fonts/tiposPokemon.ttf"),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();

            const ids = Array.from({ length: 151 }, (_, i) => i + 1); // Gera IDs de 1 a 151
            const pokemonData = await consultarPokemons(ids); // Consulta os 151 Pokémons
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
            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <PreviaPokemon pokemon={item} />}
                contentContainerStyle={{ padding: 50 }}
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
