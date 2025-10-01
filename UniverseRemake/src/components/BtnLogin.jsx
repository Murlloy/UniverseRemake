import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BtnLogin({ label, onPress, color }) {
  return (
    <TouchableOpacity style={ [styles.button, {backgroundColor: color} ] } onPress={onPress}>
      <Text style={{color: "white", fontSize: 15, fontWeight: "bold", textAlign: "center"}}>{label}</Text>
    </TouchableOpacity>
  );
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