import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View} from 'react-native';
import {consultarPokemon} from "../api/consultarPokemon";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Pressable
          style={{
            backgroundColor: "blue"
          }}
          onPress={consultarPokemon}
      >
        <Text
          style={{
            color: "white",
            fontSize: 25
          }}
        >
          Clique aqui para pesquisar um pokemon
        </Text>
      </Pressable>
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
