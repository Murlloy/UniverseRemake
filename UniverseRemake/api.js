import { Alert } from "react-native";

const API_URL = "https://68d74a9bc2a1754b426d0028.mockapi.io/estacionamento/api/usuarios";
const API_URL_VEICULOS = "https://68d74a9bc2a1754b426d0028.mockapi.io/estacionamento/api/veiculos";

export const showAlert = () => {
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

export const getUsuarios = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar usuarios:", error);
    return [];
  }
};



export const fetchUsers = async () => {
  try {
    const response = await fetch(
      "https://68d74a9bc2a1754b426d0028.mockapi.io/estacionamento/api/usuarios"
    );
    const data = await response.json();
    return data; // Retorna um array de usuários
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return [];
  }
};



// Cadastro de usuario
export const registerUser = async (fullName, email, phone, username, password) => {
  console.log("Tentando cadastrar:", { fullName, email, phone, username, password }); // ✅
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, phone, username, password }),
    });

    console.log("Status da resposta:", response.status); // ✅
    const data = await response.json();
    console.log("Resposta da API:", data); // ✅
    return data;
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    return null;
  }
};

//Cadastro de veiculo
export const RegisterVeiculo = async (username, placa, tipo, modelo, estado) => {

  console.log("Cadastrando veiculo")

  try {
    const response = await fetch(API_URL_VEICULOS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vaga, lote,  dt_entrada, dt_saida, modelo, placa, username, estado  }),
    });

    console.log("Status da resposta:", response.status); // ✅
    const data = await response.json();
    console.log("Resposta da API:", data); // ✅
    return data;
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    return null;
  }

}