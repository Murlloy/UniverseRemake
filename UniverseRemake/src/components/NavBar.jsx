import { View, Image, StyleSheet } from "react-native";


export default function NavBar() {

    return(

        <View style={styles.container}>
            <Image source={require("../assets/map.png")} />
            <Image source={require("../assets/home.png")} />
            <Image source={require("../assets/settings.png")} />
        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 50,
        paddingRight: 50,
        padding: 15,
        boxShadow: "0px 21px 114.3px 22px rgba(138, 81, 252, 0.71)",
        position: "absolute",
        bottom: 0,
        backgroundColor: "black"
    }

})


