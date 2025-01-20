import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { consultarPokemon } from "../api/consultarPokemon";
import PreviaPokemon from "../components/PreviaPokemon";
import { useEffect, useState } from "react";
import { Pokemon } from "../utils/types/RetornoDetalhadoPokemon";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

export default function App() {
    const [pokemon, setPokemon] = useState<Pokemon>();

    const [fontsLoaded] = useFonts({
        'nomePokemonFont': require('../../assets/fonts/nomePokemon.ttf'),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
            consultarPokemon().then((pokemon) => setPokemon(pokemon));
        }
        prepare();
    }, []);

    if (!fontsLoaded) {
        return null;
    } else {
        SplashScreen.hideAsync();
    }

    return (
        <View style={styles.container}>
            <PreviaPokemon pokemon={pokemon} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
