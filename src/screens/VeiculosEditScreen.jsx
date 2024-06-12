import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import styles from "../config/styles";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export default function VeiculosEditScreen({ navigation, route }) {
  const [idVeiculo, setIdVeiculo] = useState("");
  const [placa, setPlaca] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");
  const [idCondominio, setIdCondominio] = useState("");
  const [situacao, setSituacao] = useState("");
  
  const cadastrarVeiculo = async () => {
    console.log("Salvo");
    // Cria uma nova referência de documento com um ID gerado automaticamente
    // primeiro pegamos o objeto de coleção
    const docRef = doc(
      // depois passamos a referência do banco de dados
      collection(db, "veiculos")
    );
    // e então setamos o documento
    await setDoc(docRef, {
      idVeiculo: idVeiculo,
      placa: placa,
      marca: marca,
      modelo: modelo,
      ano: ano,
      cor: cor,
      idCondominio: idCondominio,
      situacao: situacao,
    });
  };

  useEffect(() => {
    console.log(item);
    console.log("estamos procurando a UID da coleção", item);

    setIdVeiculo(item.idVeiculo);
    setPlaca(item.placa);
    setMarca(item.marca);
    setModelo(item.modelo);
    setAno(item.ano);
    setCor(item.cor);
    setIdCondominio(item.idCondominio);
    setSituacao(item.situacao);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text variant="headlineLarge" style={styles.selfCenter}>
          Cadastro de Veículo
        </Text>
        <Text variant="bodySmall" style={styles.selfCenter}>
          Insira as informações
        </Text>

        <TextInput
          label="ID"
          mode="outlined"
          keyboardType="id"
          value={idVeiculo}
          onChangeText={setIdVeiculo}
        />
        <TextInput
          label="Placa"
          mode="outlined"
          keyboardType="tag"
          value={placa}
          onChangeText={setPlaca}
        />
        <TextInput
          label="Marca"
          mode="outlined"
          keyboardType="tag"
          value={marca}
          onChangeText={setMarca}
        />
        <TextInput
          label="Modelo"
          mode="outlined"
          keyboardType="tag"
          value={modelo}
          onChangeText={setModelo}
        />
        <TextInput
          label="Ano"
          mode="outlined"
          keyboardType="tag"
          value={ano}
          onChangeText={setAno}
        />
        <TextInput
          label="Cor"
          mode="outlined"
          keyboardType="tag"
          value={cor}
          onChangeText={setCor}
        />
        <TextInput
          label="ID Condomínio"
          mode="outlined"
          keyboardType="tag"
          value={idCondominio}
          onChangeText={setIdCondominio}
        />
        <TextInput
          label="Situação"
          mode="outlined"
          keyboardType="tag"
          value={situacao}
          onChangeText={setSituacao}
        />
        <Button
          textColor="black"
          mode="outlined"
          // style="margin-top: 10px;" html
          style={{
            // em react-native
            marginTop: 10,
            maxWidth: 260,
            alignSelf: "flex-end",
          }}
          onPress={cadastrarVeiculo}
        >
          Salvar
        </Button>
      </View>
    </View>
  );
}
