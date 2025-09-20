import { View, Image, StyleSheet, Text} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function LoginPage() {

    return(

        <View style={styles.body}>

            <Image source={require("../../assets/LoginEffect.png")} style={styles.efeito} />
            <Image source={require("../../assets/logoUniverse.png")} />

            <View style={styles.InputWrapper}>
                <Input label={"Nome de Usuario"}/>
                <Input label={"Senha"}/>
                <Text style={{color: "#52A8FF", alignSelf: "flex-end"}}>Esqueceu a senha?</Text>
            </View>

            <Button label={"Entrar"} color={"#8A51FC"}/>
            <Text style={styles.text}>Não tem uma conta? <Text style={{color: "#52A8FF"}}>Cadastre-se</Text></Text>

            <View style={styles.ButtonWrapper}>
                <Button label={"Entrar com o Google"} color={"black"} img={true} linkImage={require("../../assets/google.png")}/>
                <Button label={"Entrar com o X"} color={"black"} img={true} linkImage={require("../../assets/x.png")} />
            </View>

            <Text style={styles.text}>ou</Text>

            <Text style={{color: "#8A51FC", textDecorationLine: "underline"}}>Continuar como convidado</Text>

        </View>

    )

}

const styles = StyleSheet.create({

    body: {
        backgroundColor: "black",
        flex: 1,
        width: "100%",
        alignItems: "center",
        paddingTop: 100,
        gap: 25
    },

    efeito: {
        position: "absolute"
    },

    InputWrapper: {
        display: "flex",
        gap: 25,
        width: "80%"
    },
    ButtonWrapper: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 15
    },

    text: {
        color: "white"
    }

})