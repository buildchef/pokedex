import {Modal, Pressable, Text, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {icones} from "../../utils/icones";

export type MenuOpcoesProps = {
    exibirModalOpcoes: boolean;
    setExibirModalOpcoes: (valor: boolean) => void;
};

export default function MenuOpcoes({
    exibirModalOpcoes,
    setExibirModalOpcoes}: MenuOpcoesProps) {

    const renderizarOpcao = (texto: string, icone: string, acao: () => void) => {
        return (
            <Pressable
                onPress={acao}
                style={{
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    gap: 10
                }}
            >
                <MaterialIcons name={icone} style={{
                    fontSize: 30,
                }}/>
                <Text
                    style={{
                        fontSize: 30,
                        fontFamily: "tiposPokemonFont",
                        color: "black",
                    }}
                >{texto}</Text>
            </Pressable>
        )
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={exibirModalOpcoes}
            onRequestClose={() => setExibirModalOpcoes(false)}
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
                        paddingHorizontal: 25,
                        paddingBottom: 25,
                        borderRadius: 20,
                        borderWidth: 3,
                        borderColor: "black",
                        width: 280,
                        gap: 20
                    }}
                >
                    <Pressable
                        style={{
                            borderRadius: 50,
                            borderWidth: 2,
                            borderColor: "black",
                            backgroundColor: "red",
                            marginTop: -20,
                            marginBottom: -10,
                            marginLeft: -45,
                            width: 45,
                        }}
                        onPress={() => setExibirModalOpcoes(false)}
                    >
                        <MaterialIcons name={icones.Close} style={{
                            color: "white",
                            fontSize: 40,
                        }}/>
                    </Pressable>

                    {renderizarOpcao("SETTINGS", icones.Settings, () => console.log("oi"))}
                    {renderizarOpcao("ABOUT", icones.Info, () => console.log("oi"))}
                    {renderizarOpcao("FEEDBACK", icones.Mail, () => console.log("oi"))}

                </View>
            </View>
        </Modal>
    );
}