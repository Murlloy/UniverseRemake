import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default function Button({link, label, color, img, linkImage}) {

    return (

        <TouchableOpacity style={ [styles.button, {backgroundColor: color} ] } >    

            {
                img ? (
                    <Image source={linkImage} />
                ) : (
                    <Image source={linkImage} hidden style={{display: "none"}}/>
                )

            }      

            <Text style={{color: "white", fontSize: 15, fontWeight: "bold", textAlign: "center"}}>{label}</Text>

        </TouchableOpacity>

    ) 

}

const styles = StyleSheet.create({

    button: {
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 8,
        borderColor: "#8A51FC",
        borderWidth: 1,
        flexDirection: "row",
        gap: 10
    }


})