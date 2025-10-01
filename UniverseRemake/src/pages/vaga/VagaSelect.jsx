import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import BtnLogin from "../../components/BtnLogin";
import { useState } from "react";
import { CadasterVeiculo, RegisterVeiculo } from "../../../api"

export default function VagaSelect({navigation, route}) {

    const { vaga } = route.params;

    const [username, setUsername] = useState("")
    const [placa, setPlaca] = useState("")
    const [tipo, setTIpo] = useState("")
    const [modelo, setModelo] = useState("")
    const [estado, setEstado] = useState("")

    let lote = "A", dt_entrada = "25-09-2022-7:00", dt_saida = "25-09-2022-7:00"
    
    
    const handleRegister = async () => {
            console.log("handleRegister iniciado");
    
            const user = await RegisterVeiculo( vaga, lote,  dt_entrada, dt_saida, modelo, placa, username, estado  );
            console.log("user retornado:", user);
    
            if (user) {
                Alert.alert("Sucesso", `Veiculo cadastrado!`);
                setUsername("");
                setPlaca("");
                setTIpo("");
                setModelo("");
                setEstado("");
                navigation.navigate("Menu")
            } else {
                Alert.alert("Erro", "Não foi possível cadastrar");
            }
        };

    return(

        <View style={styles.body}>

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnBack}>
                <Image source={require("../../assets/Up.png")}/>
            </TouchableOpacity>

            <Text style={{color: "white", fontSize: 29, fontWeight: "bold"}}>Vaga {vaga}</Text>
            <Image source={require("../../assets/carSolo.png")} />

            <View style={styles.inputWrapper}>
                <Input label={"Nome do Usuario"}/>
                <Input label={"Placa do Veiculo"}/>
                <Input label={"Tipo de Veiculo"}/>
                <Input label={"Modelo do Carro"}/>
                <Input label={"Estado"}/>
            </View>

            <BtnLogin color={"#8A51FC"} label={"Adicionar Veiculo"} style={styles.button} onPress={handleRegister}/>


        </View>

    )

}

const styles = StyleSheet.create({

    body: {
        backgroundColor: "black",
        flex: 1,
        width: "100%",
        alignItems: "center",
        paddingTop: 60,
        gap: 35
    },

    inputWrapper: {
        width: "80%",
        gap: 15
    },

    btnBack: {
        top: 50,
        position: "absolute",
        left: 25,
        transform: [{scaleX: -1}]
    }

})