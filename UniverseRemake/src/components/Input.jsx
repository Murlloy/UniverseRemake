import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Input({label}) {

    return (


        <View style={styles.container}>

            <Text style={{color: "white", fontWeight: "bold"}}>{label}</Text>

            <TextInput style={styles.input} />

        </View>
        

    )

}

const styles = StyleSheet.create({

    input: {
        width:"100%",
        height: 50,
        borderColor: "#8A51FC",
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15

    } ,

    container: {
        width: "100%",
        display: "flex",
        alignSelf: 'center',
        gap: 5
    }


})