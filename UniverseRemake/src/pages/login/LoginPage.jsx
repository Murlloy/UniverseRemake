import { View, Image, StyleSheet, Text, Alert } from "react-native";
import { fetchUsers } from "../../../api";
import React, { useState, useEffect } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import BtnLogin from "../../components/BtnLogin";

export default function LoginPage({navigation}) {

    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [users, setUsers] = useState([]);

     useEffect(() => {
    const fetchData = async () => {
      const data = await getVeiculos();
      setVeiculos(data);
    };
    fetchData();
  }, []);

  const handleLogin = async () => {
      console.log("Botão clicado"); // Teste se a função é chamada
      try {
          const users = await fetchUsers();
          const user = users.find(
          (u) => u.username === username && u.password === password
          );
  
          if (user) {
          Alert.alert("Sucesso", `Bem-vindo, ${user.username}!`);

          // preciso armazenar o usuario logado em algum canto;
          // de preferencia aqui

          setUsername("");
          setPassword("");
          navigation.navigate("Menu");
          } else {
          Alert.alert("Erro", "Usuário ou senha incorretos");
          }
      } catch (error) {
          console.error(error);
      }
  };


    return(

        <View style={styles.body}>

            <Image source={require("../../assets/LoginEffect.png")} style={styles.efeito} />
            <Image source={require("../../assets/logoUniverse.png")} />

            <View style={styles.InputWrapper}>
                <Input label={"Nome de Usuario"} value={username} onChangeText={setUsername}/>
                <Input label={"Senha"} value={password} onChangeText={setPassword} secureTextEntry/>
                <Text style={{color: "#52A8FF", alignSelf: "flex-end"}}>Esqueceu a senha?</Text>
            </View>

            <BtnLogin label={"Entrar"} color={"#8A51FC"} onPress={handleLogin} />

            <Text style={styles.text}>Não tem uma conta? <Text style={{color: "#52A8FF"}} onPress={() => navigation.navigate('Register')}> Cadastre-se</Text></Text>

            <View style={styles.ButtonWrapper}>
                <Button label={"Entrar com o Google"} color={"black"} img={true} linkImage={require("../../assets/google.png")}/>
                <Button label={"Entrar com o X"} color={"black"} img={true} linkImage={require("../../assets/x.png")} />
            </View>

            <Text style={styles.text}>ou</Text>

            <Text style={{color: "#8A51FC", textDecorationLine: "underline"}} onPress={() => navigation.navigate('Menu')}>Continuar como convidado</Text>

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