import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";


export default function InfoVaga({navigation, vaga}) {

    return(

        <View style={styles.body}>
            
            {/* header */}
            
            <View style={styles.header}>
                <Image source={require("../../assets/logoUniverse.png")} style={{width: 200, height: 50}} />
                <Image source={require("../../assets/user.png")} />
            </View>

            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "80%"}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{transform: [{scaleX: -1}]}}>
                    <Image source={require("../../assets/Up.png")}/>
                </TouchableOpacity>
                <Text style={{fontSize: 18, color: "#D02D2D"}}>Pagamento Pendente</Text>
            </View>

            <View style={styles.card}>
                <Text style={{color: "white", fontSize: 16, fontWeight: "bold"}}>Detalhes da Vaga</Text>
                <Text style={{color: "rgba(255, 255, 255, 0.72)", fontSize: 13, fontWeight: "bold"}}>Lote A | Numero 12</Text>
            </View>

            {/* tempo restante */}

            <View style={styles.tempoRestante}>
                <Text style={{color: "white", fontSize: 16, fontWeight: "bold"}}>Tempo Restante</Text>
                <View style={styles.barra}>
                    <View style={styles.barraColorida}></View>
                </View>
            </View>

            {/* data */}

            <View style={styles.container}>

                <Text style={{color: "white", fontSize: 16, fontWeight: "bold"}}>Data: 19/09/2025</Text>

                <View style={styles.row}>

                    <View style={[styles.cell, styles.rightBorder]}>
                    <Text style={styles.headerTable}>Entrada</Text>
                    <Text style={styles.value}>14:00</Text>

                    </View>

                    <View style={styles.cell}>
                    <Text style={styles.headerTable}>Saida</Text>
                    <Text style={styles.value}>16:00</Text>

                    </View>
                </View>
            </View>

            {/* infoVeiculo */}

            <Text style={{color: "white", fontSize: 16, fontWeight: "bold", width: "80%"}}>Detalhes do Veiculo</Text>

            <View style={styles.infoCar}>
                <Text style={{color: "rgba(255, 255, 255, 0.72)", fontSize: 16, fontWeight: "bold", width: "80%"}}>Tipo: Sedã</Text>
                <Text style={{color: "rgba(255, 255, 255, 0.72)", fontSize: 16, fontWeight: "bold", width: "80%"}}>Dono: Galzinho</Text>
                <Text style={{color: "rgba(255, 255, 255, 0.72)", fontSize: 16, fontWeight: "bold", width: "80%"}}>Placa: NGK758M</Text>

                <Image source={require("../../assets/galCar.png")} style={styles.carro}/>
            </View>

            <Button label={"Pagar"} color={"#8A51FC"} />

            <NavBar navigation={navigation}/>

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
        gap: 25,
        justifyContent: "space-between",
        paddingBottom: 100
    },

     header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingRight: 45,
        paddingLeft: 20

    },

    card: {
        backgroundColor: "#1B1B1B",
        width: "80%",
        flexDirection: "row",
        height: 58,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        borderRadius: 8
    },

    tempoRestante: {
        width: '80%',
        gap: 10
    },

    barra: {
        width: "100%",
        height: 10,
        backgroundColor: "#262626",
        borderRadius: 8
    },

    barraColorida: {
        width: "65%",
        height: 10,
        backgroundColor: "#E28400",
        borderRadius: 8
    },

     container: {
        backgroundColor: "black",
        padding: 20,
        width: "80%",
        gap: 15
    },

    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#aaa", // cor da linha de baixo
    },
    
    cell: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 10,
    },

    rightBorder: {
        borderRightWidth: 1,
        borderRightColor: "#aaa", // cor da linha do meio
    },

    headerTable: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },

    value: {
        color: "white",
        fontSize: 18,
        marginTop: 5,
    },

    infoCar: {
        width: "80%",
        gap: 10,
        marginBottom: 20
    },

    carro: {
        position: "absolute",
        right: 0,
        width: 150,
        height: 100
    }


})