import { StyleSheet, View, Image, Text } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function VagaSelect() {

    return(

        <View style={styles.body}>

            <Text style={{color: "white", fontSize: 29, fontWeight: "bold"}}>Vaga A1</Text>
            <Image source={require("../../assets/carSolo.png")} />

            <View style={styles.inputWrapper}>
                <Input label={"Nome do Usuario"}/>
                <Input label={"Placa do Veiculo"}/>
                <Input label={"Tipo de Veiculo"}/>
                <Input label={"Modelo do Carro"}/>
                <Input label={"Estado"}/>
            </View>

            <Button color={"#8A51FC"} label={"Adicionar Veiculo"} style={styles.button}/>

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

})