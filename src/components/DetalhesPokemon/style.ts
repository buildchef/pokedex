import {StyleSheet} from "react-native";
import {moderateScale} from "react-native-size-matters";

export const styles = StyleSheet.create({
    fundoModal: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    containerModal: {
        backgroundColor: "white",
        width: moderateScale(390),
        height: moderateScale(750),
        borderRadius: 20
    },
    containerFotoETipoPokemon: {
        height: moderateScale(370),
        paddingHorizontal: moderateScale(15),
        paddingTop: moderateScale(30),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: moderateScale(5),
        borderLeftWidth: moderateScale(5),
        borderRightWidth: moderateScale(5),
    },
    containerFecharEFavoritar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: moderateScale(20)
    },
    containerNomeESimbolo: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    nomePokemon: {
        fontFamily: "nomePokemonFont",
        fontSize: moderateScale(30),
        color: "white",
    },
    fundoSimbolo: {
        backgroundColor: "white",
        borderRadius: 100,
        width: moderateScale(48),
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(5),
        alignItems: "center",
        borderWidth: moderateScale(3),
    },
    containerTipospokemon: {
        flexDirection: "row",
        gap: moderateScale(10)
    },
    textoTipoPokemon: {
        borderRadius: 15,
        marginVertical: moderateScale(8),
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(4),
        fontFamily: "tiposPokemonFont",
        color: "white",
        fontSize: moderateScale(20),
        textAlign: "center",
    },
    containerDetalhesDoPokemon: {
        marginTop: moderateScale(90),
        paddingHorizontal: moderateScale(20),
        marginBottom: moderateScale(20)
    },
    textoDetalhesDoPokemon: {
        fontFamily: "nomePokemonFont",
        fontSize: moderateScale(18),
        textAlign: "center",
        marginBottom: moderateScale(15)
    },
    containerDeAlinhamentoDeAtributos: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: moderateScale(30)
    },
    containerDeAtributosEValores: {
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: moderateScale(12),
        marginTop: moderateScale(5)
    },
    textoAtributosEValores: {
        fontFamily: "tiposPokemon",
        fontSize: moderateScale(15)
    },
});