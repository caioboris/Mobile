import { Text, View, ScrollView, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Constants from 'expo-constants';

import { useState } from 'react';

const estilos = StyleSheet.create({
  input: {
    backgroundColor: "lightcyan",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  }
});

const { Navigator, Screen } = createBottomTabNavigator();

const Listagem = ({ lista }) => {
  
  const listaVisual = lista.map((item, idx) => {
    return (
      <View
        style={{
          margin: 5,
          borderColor: "orange",
          borderWidth: 2,
          borderRadius: 20,
          paddingHorizontal: 10,
          paddingVertical5,
          shadowColor: "black",
          shadowOffset: { width: 3, height: 3 }
        }}
        key={"obj-" + idx}>
        <Text> Listagem </Text>
        <Text>{item.nome}</Text>
        <Text>{item.telefone}</Text>
        <Text>{item.email}</Text>
      </View>

    )});

    return (
      <ScrollView style={{flex: 1}}>
        <Text> Listagem </Text>
        {listaVisual}
      </ScrollView>
    )
};

const Formulario = ({onGravar, navigation}) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={{flex: 1}}>
      <Text> Formulario </Text>
      <TextInput style={estilos.input} placeholder="Digite o nome" 
                  value={nome} onChangeText={setNome}/>

      <TextInput style={estilos.input} placeholder="Digite o telefone" 
                  value={telefone} onChangeText={setTelefone}/>

      <TextInput style={estilos.input} placeholder="Digite o email" 
                  value={email} onChangeText={setEmail}/>
      <Button title="Salvar" onPress={()=>{
        const obj = {nome, telefone, email}
        onGravar( obj );
        setNome("");
        setEmail("");
        setTelefone("");
        navigation.navigate("Lista")
      }}/>
    </View>
  )
};

export default function App() {
  const [lista, setLista] = useState([
    { nome: "João Silva", telefone: "(11) 1111-1111", email: "joao@gmail.com" }
  ]);

  const gravar = (obj)=>{
    setLista([...lista, obj])
  }


  return (
    <SafeAreaView style={{
      flex: 1,
      marginTop: Constants.statusBarHeight
    }}>
      <Text style={{ fontSize: 32 }}>Agenda de Contatos 2</Text>
      <NavigationContainer>
        <Navigator>
          <Screen name="Form">
          {(navProps)=> <Formulario {...navProps} onGravar={gravar}/>}
          </Screen>
          <Screen name="Lista">
          {(navProps)=><Listagem {...navProps} corFundo="yellow" lista={lista} />}
          </Screen>
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


