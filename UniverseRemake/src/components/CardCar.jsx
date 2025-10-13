import { Text, TouchableOpacity, Image, StyleSheet, View, Alert } from "react-native";


export default function CardCar({vaga, ativo, navigation}) {

    const showAlert = () => {
    Alert.alert(
      "Título do Alerta",          // título
      "Mensagem do alerta",        // mensagem
      [
        { text: "Cancelar", style: "cancel" },
        { text: "OK", onPress: () => console.log("OK Pressionado") }
      ],
      { cancelable: true }         // permite fechar tocando fora
    );
  };

    return(
        

        <TouchableOpacity style={styles.card} 
            
                onPress={() => {

                    if(!ativo) {
                        navigation.navigate("VagaSelect", {vaga})
                    }else {
                        Alert.alert("Vaga " + vaga + " já Cadastrado... ")
                    }

                }}
            >
            
            <Image source={require("../assets/car.png")} style={{width: 70, height: 50}}/>

            <View style={styles.infoCar}>

                <Text style={{color: "white", fontWeight: "bold"}}>VAGA {vaga}</Text>

                {
                    !ativo ? (
                        <Text style={styles.ativo}>Liberado</Text>
                    ): (
                        <Text style={styles.desativado}>Ocupado</Text>
                    )
                }

            </View>


        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({

    ativo: {
        color: "#2AF018"
    },

    desativado: {
        color: "#D02D2D"
    },

    card: {
        backgroundColor: "#282828",
        padding: 10,
        width: 160,
        borderRadius: 8,
        height: 86,
        justifyContent: "center"
    },

    infoCar: {
        position: "absolute",
        right: 15,
        justifyContent: "space-between",
        height: "100%"
    }

})