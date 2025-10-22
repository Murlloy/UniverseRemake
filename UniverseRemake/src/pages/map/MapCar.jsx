
import { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";
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
      console.log("Vagas retornadas da API:", vagasRecebidas); // DEBUG
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
        <Image
          source={require("../../assets/logoUniverse.png")}
          style={{ width: 200, height: 50 }}
        />
        <Image source={require("../../assets/user.png")} />
      </View>

      <View style={styles.cardList}>
        <View style={styles.cardHeader}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Vagas
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../../assets/Close.png")} />
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 10, paddingBottom: 20, flex: 1 }}>
          {loading && <ActivityIndicator size="large" color="#8A51FC" />}
          {error && <Text style={{ color: "red" }}>{error}</Text>}

          <FlatList
            data={vagas.slice(0, 10)} // Pega apenas as 10 primeiras vagas
            keyExtractor={(item) => String(item.id)}
            numColumns={2} // duas colunas
            columnWrapperStyle={{
              justifyContent: "space-between", // espaça os cards nas colunas
              marginBottom: 15,                 // espaço entre as linhas
            }}
            renderItem={({ item }) => (
              <CardCar
                ativo={item.ocupado}
                vaga={item.vaga}
                style={{ flex: 1, marginHorizontal: 5 }} // margem entre colunas
                onPress={() =>
                  !item.ocupado
                    ? navigation.navigate("VagaSelect", { vaga: item.vaga })
                    : navigation.navigate("Exit", { vaga: item.vaga })
                }
              />
            )}
            ListEmptyComponent={
              !loading ? (
                <Text style={{ color: "white" }}>Nenhuma vaga encontrada.</Text>
              ) : null
            }
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
    gap: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingRight: 45,
    paddingLeft: 20,
  },
  cardList: {
    backgroundColor: "#1B1B1B",
    height: "100%",
    marginTop: 50,
    width: "95%",
    borderRadius: 8,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 25,
    paddingBottom: 10,
  },
});
