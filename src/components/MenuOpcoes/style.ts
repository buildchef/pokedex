import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    containerOpcao: {
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: 10
    },
    textoOpcao: {
        fontSize: 30,
        fontFamily: "tiposPokemonFont",
        color: "black",
    },
    fundoModalOpcoes: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    containerModalOpcoes: {
        backgroundColor: "white",
        paddingHorizontal: 25,
        paddingBottom: 25,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "black",
        width: 280,
        gap: 20
    },
    fundoBotaoFechar: {
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "red",
        marginTop: -20,
        marginBottom: -10,
        marginLeft: -45,
        width: 45,
    }
});