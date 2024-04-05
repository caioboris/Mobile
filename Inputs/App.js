import { useState } from 'react';
import { TextInput, Text, View, Button } from 'react-native';

export default function App() {

  const [nome, setNome] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [preco, setPreco] = useState("");
  const [lista, setLista] = useState([]);

  const listaVisual = lista.map((obj) =>{
    return(
      <View>
        <Text>Produto: {obj.nome} | Fabricante: {obj.fabricante} | Preco: {obj.preco}</Text>
      </View>
    )
  });
  return (
    <View>
      <Text>Cadastro de Produtos</Text>
      <Text>Nome: </Text>
      <TextInput value={nome} onChangeText={setNome}/>
      <Text>Fabricante:</Text>
      <TextInput value={fabricante} onChangeText={setFabricante}/>
      <Text>Preco:</Text>
      <TextInput value={preco} onChangeText={setPreco}/>

      <Button title="Salvar" onPress={() =>{
        const produto = {
            nome: nome,
            fabricante: fabricante,
            preco: preco
          };
        setLista([...lista, produto]);
      }}/>
      {listaVisual}
    </View>
  );
}
