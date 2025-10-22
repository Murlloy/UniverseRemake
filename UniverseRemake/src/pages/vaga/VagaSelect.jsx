import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import BtnLogin from "../../components/BtnLogin";
import { useState } from "react";
import { CadasterVeiculo, RegisterVeiculo, SaidaVeiculo } from "../../../api"
import { Alert } from "react-native";

export default function VagaSelect({navigation, route}) {


    const [username, setUsername] = useState("")
    const [placa, setPlaca] = useState("")
    const [tipo, setTIpo] = useState("")
    const [modelo, setModelo] = useState("")
    const [estado, setEstado] = useState("")

    let lote = "A", dt_entrada = "25-09-2022-7:00", dt_saida = "25-09-2022-7:00"
    
    const { vaga } = route.params;
    
    const handleRegister = async () => {
            console.log("handleRegister iniciado");

            if(!placa || !estado || !modelo) {

                Alert.alert("Erro", "Preencha todos os Campos!!")
                return


            }

    
            const user = await RegisterVeiculo( vaga, modelo, placa, username, estado, dt_entrada, lote  );
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

    const teste = async () => {
        SaidaVeiculo(placa)
        setPlaca("")
    }

    return(

        <View style={styles.body}>

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnBack}>
                <Image source={require("../../assets/Up.png")}/>
            </TouchableOpacity>

            <Text style={{color: "white", fontSize: 29, fontWeight: "bold"}}>{vaga}</Text>
            <Image source={require("../../assets/carSolo.png")} />

            <View style={styles.inputWrapper}>
                {/* <Input label={"Nome do Usuario"}/> */}
                <Input label={"Placa do Veiculo"} value={placa} onChangeText={setPlaca}/>
                <Input label={"Veiculo"} value={modelo} onChangeText={setModelo}/>
                {/* <Input label={"Modelo do Carro"}/> */}
                <Input label={"Estado"} value={estado} onChangeText={setEstado}/>
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
    },

    

})