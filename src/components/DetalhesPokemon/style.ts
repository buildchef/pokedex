import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    fundoModal: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    containerModal: {
        backgroundColor: "white",
        width: 390,
        height: 750,
        borderRadius: 20
    },
    containerFotoETipoPokemon: {
        height: 370,
        paddingHorizontal: 15,
        paddingTop: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 5,
        borderLeftWidth: 5,
        borderRightWidth: 5,
    },
    containerFecharEFavoritar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    containerNomeESimbolo: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    nomePokemon: {
        fontFamily: "nomePokemonFont",
        fontSize: 30,
        color: "white",
    },
    fundoSimbolo: {
        backgroundColor: "white",
        borderRadius: 100,
        width: 48,
        paddingHorizontal: 15,
        paddingVertical: 5,
        alignItems: "center",
        borderWidth: 3,
    },
    containerTipospokemon: {
        flexDirection: "row",
        gap: 10
    },
    textoTipoPokemon: {
        borderRadius: 15,
        marginVertical: 8,
        paddingHorizontal: 15,
        paddingVertical: 4,
        fontFamily: "tiposPokemonFont",
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },
    containerDetalhesDoPokemon: {
        marginTop: 90,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    textoDetalhesDoPokemon: {
        fontFamily: "nomePokemonFont",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 15
    },
    containerDeAlinhamentoDeAtributos: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 30
    },
    containerDeAtributosEValores: {
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 12,
        marginTop: 5
    },
    textoAtributosEValores: {
        fontFamily: "tiposPokemon",
        fontSize: 15
    },
});