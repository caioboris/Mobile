import { Alert, Text, TextInput, View } from 'react-native'
import { Button, Switch } from 'react-native-web';
import { useState } from 'react';

const estilos = {
  input: {
    backgroundColor: "lighcyan",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 15
  }
}


function App() {

  const [concluido, setConcluido] = useState(true);

  function mudarValor(){
    setConcluido(false);
  }

  function mostrarTexto(txt){
    alert("Texto: "+ txt);
  }
  
  return (
    <View style= {{ flex: 1, padding: 30}}>
      <Text style={{ fontSize: 28 }}>Gestor de Tarefas</Text>
      <Text>Tarefa:</Text>
      <TextInput value={"asdaeada"}
                 style={estilos.input}
                 onChangeText={mostrarTexto(this.value)} />
      <Text>Tarefa:</Text>
      <TextInput style={estilos.input} />
      <Text>Tarefa:</Text>
      <TextInput style={estilos.input} />
      <View style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between'
      }}>
        <Text>Concluido</Text>
        <Switch value={concluido} onValueChange = {mudarValor} />
      </View>
      <Button title='Salvar' />
    </View>
  );
}

export default App;