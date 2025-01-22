import {Modal, Pressable, Text, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {icones} from "../../utils/icones";
import {styles} from "./style";

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
                style={styles.containerOpcao}
            >
                <MaterialIcons name={icone} style={{fontSize: 30}}/>
                <Text style={styles.textoOpcao}>{texto}</Text>
            </Pressable>
        );
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={exibirModalOpcoes}
            onRequestClose={() => setExibirModalOpcoes(false)}
        >
            <View style={styles.fundoModalOpcoes}>
                <View style={styles.containerModalOpcoes}>
                    <Pressable
                        style={styles.fundoBotaoFechar}
                        onPress={() => setExibirModalOpcoes(false)}
                    >
                        <MaterialIcons name={"close"} style={{
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