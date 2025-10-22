import { Alert } from "react-native";

const API_URL = "https://68d74a9bc2a1754b426d0028.mockapi.io/estacionamento/api/usuarios";
const API_URL_VAGAS = "https://68d74a9bc2a1754b426d0028.mockapi.io/estacionamento/api/vagas";

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

export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar usuarios:", error);
    return [];
  }
};

export const getVagas = async () => {

  try {

    const response = await fetch(API_URL_VAGAS);
    const data = await response.json();

    console.log(data)

    return data;



  } catch (error) {
    console.error(error)
    return []
  }

}



// Cadastro de usuario
export const registerUser = async (full_name, email, phone, username, password) => {
  console.log("Tentando cadastrar:", { full_name, email, phone, username, password }); // ✅
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ full_name, email, phone, username, password }),
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

// Cadastro de veículo / ocupar vaga
export const RegisterVeiculo = async (vagaNumero, modelo, placa, username, estado, dt_entrada, lote) => {
  try {
    console.log("Registrando veículo na vaga:", vagaNumero);

    // Buscar vagas
    const vagas = await getVagas();

    // Encontrar a vaga correta
    const vagaEncontrada = vagas.find((v) => v.vaga == vagaNumero );

    if (!vagaEncontrada) {
      console.error("Vaga não encontrada!");
      return null;
    }

    // Atualiza a vaga com os dados do veículo
    const response = await fetch(`${API_URL_VAGAS}/${vagaEncontrada.id}`, {
      method: "PATCH", // PATCH só atualiza campos sem apagar os outros
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ocupado: true,
        modelo,
        placa,
        dono: username,
        estado,
        vaga: vagaNumero,
        lote,
        dt_entrada
      }),
    });

    if (!response.ok) {
      console.error("Erro ao atualizar vaga:", response.status);
      return null;
    }

    const data = await response.json();
    console.log("Vaga atualizada com sucesso:", data);
    return data;

  } catch (error) {
    console.error("Erro ao cadastrar veículo:", error);
    return null;
  }
};



// funfando
export const SaidaVeiculo = async (placa, vagaNumero) => {

  try {

    const veiculos = await getVagas()
    const veiculo = veiculos.find((v) => v.placa == placa && v.vaga == vagaNumero)

    if (veiculo) {

      const response = await fetch(`${API_URL_VAGAS}/${veiculo.id}`, {
        method: "PATCH", // PATCH só atualiza campos sem apagar os outros
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ocupado: false,
          modelo: "",
          placa: "",
          dono: "",
          estado: "",
          vaga: veiculo.vaga,
        }),
      });

    Alert.alert("Sucesso!", "Veiculo Retirado com sucesso")

  }else {

    Alert.alert("Erro", "Placa não encontrada")
  }


}catch (error) {

  console.error("Erro ao Deletar do banco, erro: " + error)

}

}