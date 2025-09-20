import { StyleSheet, View, Text, Image } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Register() {

    return(

        <View style={styles.body}>

            <Image source={require("../assets/effectRegister.png")} style={styles.efeito} />
            <Image source={require("../assets/logoUniverse.png")} />

            <View style={styles.InputWrapper}>
                <Input label={"Primeiro Nome"}/>
                <Input label={"Sobrenome"}/>
                <Input label={"Email"}/>
                <Input label={"Telefone"}/>
                <Input label={"Nome de Usuario"}/>
                <Input label={"Senha"}/>
            </View>

            <Button color={"#8A51FC"} label={"Cadastrar"}/>

        </View>

    )

}

const styles = StyleSheet.create({

    body: {
        backgroundColor: "black",
        flex: 1,
        width: "100%",
        alignItems: "center",
        paddingTop: 80,
        gap: 25
    },

    InputWrapper: {
        width: '80%',
        gap: 15
    },

    efeito: {
        position: "absolute"
    }

})