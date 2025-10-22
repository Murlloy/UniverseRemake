import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import BtnLogin from "../../components/BtnLogin";
import { useState } from "react";
import { CadasterVeiculo, RegisterVeiculo, SaidaVeiculo } from "../../../api"
import { Alert } from "react-native";

export default function VagaSelect({navigation, route}) {

    const { vaga } = route.params;

    const [username, setUsername] = useState("")
    const [placa, setPlaca] = useState("")
    
    
    const handleRegister = async () => {
            console.log("handleRegister iniciado");
    
            const user = await RegisterVeiculo( vaga, modelo, placa, username, estado  );
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

    const handleSaida = async () => {

        if(!username || !placa) {

            Alert.alert("Aviso", "Preencha todos os campos")
            return;

        }

        SaidaVeiculo(placa, username)
        setPlaca("")
    }

    return(

        <View style={styles.body}>

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnBack}>
                <Image source={require("../../assets/Up.png")}/>
            </TouchableOpacity>

            <Text style={{color: "white", fontSize: 29, fontWeight: "bold"}}> Saida Vaga {vaga}</Text>
            <Image source={require("../../assets/carSolo.png")} />

            <View style={styles.inputWrapper}>
                <Input label={"Username do Dono"} value={username} onChangeText={setUsername}/>
                <Input label={"Confirme a Placa"} value={placa} onChangeText={setPlaca}/>
            </View>

            <BtnLogin color={"#8A51FC"} label={"Retirar Veiculo"} style={styles.button} onPress={handleSaida}/>


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
    },

    

})