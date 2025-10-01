import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import NavBar from "../../components/NavBar";


export default function MenuPage({navigation}) {

    return(

        <View style={styles.body}>
            
            {/* header */}

            <View style={styles.header}>
                <Image source={require("../../assets/logoUniverse.png")} style={{width: 200, height: 50}} />
                <Image source={require("../../assets/user.png")} />
            </View>

            {/* vaga */}

            <View style={styles.vaga}>
                <Text style={{color: "white", fontSize: 16, fontWeight: "bold"}}>Vagas Disponiveis:</Text>
                <Text style={{color: "white", fontSize: 16, fontWeight: "bold"}}>20</Text>
            </View>

            {/* mapa das vagas */}

            <TouchableOpacity onPress={() => {navigation.navigate("Mapa")}} style={styles.btnMap}> 
                <View style={styles.mapCar}>
                    <Image source={require("../../assets/map.png")} />
                    <Text style={{color: "white", fontSize: 16, fontWeight: "bold"}}>Mapa de Vagas</Text>
                </View>
                <View style={styles.cars}>
                    <Image source={require("../../assets/car.png")} />
                    <Image source={require("../../assets/car.png")} />
                    <Image source={require("../../assets/car.png")} />
                    <Image source={require("../../assets/car.png")} />
                </View>
            </TouchableOpacity>

            {/* btn Wrapper */}

            <View style={styles.btnWrapper}>

                <TouchableOpacity style={styles.vaga}>
                    <Image source={require("../../assets/car.png")} />
                    <Text style={{color: "white", fontSize: 16, fontWeight: "bold"}}
                        onPress={() => {navigation.navigate("Info")}}
                    >Informações da Vaga</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.vaga}>
                    <Image source={require("../../assets/grafico.png")} />
                    <Text style={{color: "white", fontSize: 16, fontWeight: "bold"}}
                        onPress={() => {navigation.navigate("Info")}}
                    
                    >Carros Estacionados</Text>
                </TouchableOpacity>

            </View>

            {/* atualizações */}

            <Text style={{color: "white", fontSize: 16, fontWeight: "bold", alignSelf: "start", marginLeft: "10%"}}>Ofertas e Atualizações</Text>

            <Image source={require("../../assets/anuncio.png")}/>


            

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

    cars: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    mapCar: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    vaga: {
        backgroundColor: "#1B1B1B",
        width: "80%",
        flexDirection: "row",
        height: 58,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        borderRadius: 8
    },

    btnWrapper: {
        gap: 15,
        marginTop: 40
    },

    btnMap: {
        backgroundColor: "#1B1B1B",
        padding: "20",
        width: "80%",
        gap: 40,
        borderRadius: 8
    }

})