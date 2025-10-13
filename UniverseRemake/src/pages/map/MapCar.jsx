import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text, ActivityIndicator, FlatList } from "react-native";
import NavBar from "../../components/NavBar";
import CardCar from "../../components/CardCar";
import { getVagas } from "../../../api";

export default function MapCar({ navigation }) {
  const [vagas, setVagas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchVagas = async () => {
    try {
      setLoading(true);
      setError(null);
      const vagasRecebidas = await getVagas();
      setVagas(vagasRecebidas || []);
    } catch (err) {
      console.error("Erro ao buscar vagas:", err);
      setError("Não foi possível carregar as vagas.");
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    try {
      setRefreshing(true);
      const vagasRecebidas = await getVagas();
      setVagas(vagasRecebidas || []);
    } catch (err) {
      console.error("Erro no refresh:", err);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchVagas();
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Image source={require("../../assets/logoUniverse.png")} style={{ width: 200, height: 50 }} />
        <Image source={require("../../assets/user.png")} />
      </View>

      <View style={styles.cardList}>
        <View style={styles.cardHeader}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Vagas</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/Close.png")} />
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 10, paddingBottom: 20, flex: 1 }}>

          {loading && <ActivityIndicator size="large" />}

          {error && <Text style={{ color: "red" }}>{error}</Text>}

          <FlatList
            data={vagas}
            keyExtractor={(item) => String(item.id)}
            numColumns={4}
            columnWrapperStyle={{ justifyContent: "center", gap: 15, marginBottom: 15, flexWrap: 'wrap' }}
            renderItem={({ item }) => (
              <CardCar ativo={item.ocupado} vaga={item.vaga} navigation={navigation} />
            )}
            ListEmptyComponent={!loading ? <Text style={{ color: "white" }}>Nenhuma vaga encontrada.</Text> : null}
            refreshing={refreshing}
            onRefresh={onRefresh}
            contentContainerStyle={{ paddingTop: 10 }}
          />
        </View>
      </View>

      <NavBar navigation={navigation} />
    </View>
  );
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
});
