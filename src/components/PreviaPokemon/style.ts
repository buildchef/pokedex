import {StyleSheet} from "react-native";
import {moderateScale} from "react-native-size-matters";

export const styles = StyleSheet.create({
    containerPreviaPokemon: {
        borderRadius: 20,
        borderWidth: moderateScale(4),
        padding: moderateScale(15),
        width: moderateScale(250),
        height: moderateScale(120),
        marginBottom: moderateScale(30)
    },
    nomePokemon: {
        fontFamily: "nomePokemonFont",
        fontSize: moderateScale(20),
        color: "white",
    },
    fundoTipoPokemon: {
        width: moderateScale(80),
        alignItems: "center",
        borderRadius: 15,
        padding: moderateScale(4),
        marginVertical: moderateScale(3)
    },
    textoTipoPokemon: {
        fontFamily: "tiposPokemonFont",
        color: "white",
        fontSize: moderateScale(15),
    },
    imagemPreviaPokemon: {
        marginLeft: moderateScale(40),
        marginTop: moderateScale(-55),
        marginBottom: moderateScale(-65),
    }
});