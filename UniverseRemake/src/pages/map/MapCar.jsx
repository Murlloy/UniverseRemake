import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import NavBar from "../../components/NavBar";
import CardCar from "../../components/CardCar";

export default function MapCar() {

    return(

        <View style={styles.body}>

             {/* header */}
            
             <View style={styles.header}>
                <Image source={require("../../assets/logoUniverse.png")} style={{width: 200, height: 50}} />
                <Image source={require("../../assets/user.png")} />
            </View>

            <View style={styles.cardList}>

                <View style={styles.cardHeader}>
                    <Text style={{color: "white", fontSize: 16, fontWeight: "bold"}}>Vagas</Text>
                    <TouchableOpacity>
                        <Image source={require("../../assets/Close.png")} />
                    </TouchableOpacity>
                </View>

                <View style={styles.lista}>

                    <CardCar ativo={true} vaga={"A1"}/>
                    <CardCar vaga={"A2"}/>
                    <CardCar ativo={true} vaga={"A3"}/>
                    <CardCar ativo={true}  vaga={"A4"}/>
                    <CardCar ativo={true} vaga={"A5"}/>
                    <CardCar vaga={"A6"}/>
                    <CardCar ativo={true} vaga={"A7"}/>
                    <CardCar ativo={true}  vaga={"A8"}/>
                    <CardCar ativo={true} vaga={"A9"}/>
                    <CardCar vaga={"A10"}/>

                </View>
                

            </View>

            <NavBar />

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
        gap: 25

    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingRight: 45,
        paddingLeft: 20

    },

    lista: {
        flexDirection: "row",
        gap: 15,
        flexWrap: "wrap",
        justifyContent: "center"
    },

    cardList: {
        backgroundColor: "#1B1B1B",
        height: "100%",
        marginTop: 50,
        width: "95%",
        borderRadius: 8
    },

    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 25,
        paddingBottom: 10
    }


})