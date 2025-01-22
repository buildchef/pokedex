import {StyleSheet} from "react-native";
import {moderateScale} from "react-native-size-matters";

export const styles = StyleSheet.create({
    containerOpcao: {
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: moderateScale(10)
    },
    textoOpcao: {
        fontSize: moderateScale(30),
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
        paddingHorizontal: moderateScale(25),
        paddingBottom: moderateScale(25),
        borderRadius: 20,
        borderWidth: moderateScale(3),
        borderColor: "black",
        width: moderateScale(280),
        gap: moderateScale(20)
    },
    fundoBotaoFechar: {
        borderRadius: 50,
        borderWidth: moderateScale(2),
        borderColor: "black",
        backgroundColor: "red",
        marginTop: moderateScale(-20),
        marginBottom: moderateScale(-10),
        marginLeft: moderateScale(-45),
        width: moderateScale(45),
    }
});