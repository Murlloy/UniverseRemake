import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";


export default function Entry({indice}) {

    return(

        <View style={styles.body}>
            <Text style={styles.skip}>Skip</Text>

            <Image source={require("../../assets/parking.png")} style={{marginBottom: 52}}/>

            <View style={styles.Infos}>

                <Text style={styles.title}> Encontre sua vaga com facilidade</Text>
                <Text style={styles.subtitle}>Com uma visão em tempo real do estacionamento, você vê quais vagas estão livres, próximas da entrada ou em locais com sombra ou cobertura            — tudo para escolher a melhor para você.</Text>

            </View>

             <View style={styles.footer}>

                <View style={styles.BolinhaWrapper}>
                    <View style={styles.bolinhaAtiva}></View>
                    <View style={styles.bolinhaNormal}></View>
                    <View style={styles.bolinhaNormal}></View>
                </View>

                <TouchableOpacity style={styles.btnProximo}>
                    <Image source={require("../../assets/Up.png")}/>
                </TouchableOpacity>

             </View>

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
        gap: 55,
        justifyContent: "space-between",
        paddingBottom: 120
    },  

    bolinhaAtiva: {
        height: 9,
        width: 36,
        backgroundColor: "#8A51FC",
        borderRadius: 8
    },

    bolinhaNormal: {
        width: 9,
        height: 9,
        borderRadius: "50%",
        backgroundColor: "#797979"
    },

    BolinhaWrapper: {
        flexDirection: "row",
        gap: 10
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        fontAlign: "center",
        color: "white",
        maxWidth: "80%",
        textAlign: "center"
    },

    subtitle: {
        fontSize: 13,
        color: "#CBCBCB",
        fontWeight: "bold",
        maxWidth: "80%",
        textAlign: "center"
    },

    skip: {
        color: "#52A8FF",
        marginRight: 35,
        alignSelf: "flex-end",
        fontSize: 20
    },

    btnProximo: {
        width: 65,
        height: 65,
        borderRadius: "50%",
        backgroundColor: "#8A51FC",
        alignItems: "center",
        justifyContent: "center"
    },

    footer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "flex-end",
        width: "80%"
    },

    Infos: {
        gap: 20
    }

})