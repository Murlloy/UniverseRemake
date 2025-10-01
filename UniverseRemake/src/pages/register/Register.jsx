import { StyleSheet, View, Text, Image, Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import React, { useState, useEffect } from "react";
import BtnLogin from "../../components/BtnLogin";

import { registerUser } from "../../../api";

export default function Register({navigation}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let fullName = firstName + " " + lastName

    const handleRegister = async () => {
        console.log("handleRegister iniciado");
        console.log("Dados:", { firstName, lastName, email, phone, username, password });

        const fullName = firstName + " " + lastName;
        console.log("fullName:", fullName);

        const user = await registerUser(fullName, email, phone, username, password);
        console.log("user retornado:", user);

        if (user) {
            Alert.alert("Sucesso", `Usuário ${user.username} cadastrado!`);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setUsername("");
            setPassword("");
        } else {
            Alert.alert("Erro", "Não foi possível cadastrar");
        }
    };



    return(

        <View style={styles.body}>

            <Image source={require("../../assets/effectRegister.png")} style={styles.efeito} />
            <Image source={require("../../assets/logoUniverse.png")} />

            <View style={styles.InputWrapper}>
                <Input label={"Primeiro Nome"} value={firstName} onChangeText={setFirstName}/>
                <Input label={"Sobrenome"} value={lastName} onChangeText={setLastName}/>
                <Input label={"Email"} value={email} onChangeText={setEmail}/>
                <Input label={"Telefone"} value={phone} onChangeText={setPhone}/>
                <Input label={"Nome de Usuario"} value={username} onChangeText={setUsername}/>
                <Input label={"Senha"} value={password} onChangeText={setPassword}/>
            </View>

            <BtnLogin color={"#8A51FC"} label={"Cadastrar"} onPress={handleRegister}/>

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