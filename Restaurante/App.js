import { View,Text, SafeAreaView, StyleSheet, ImageBackground, TextInput, Button } from 'react-native';
import { useState } from 'react';


const Formulario = (props)=>{
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [caloria, setCaloria] = useState("");
  const [imagem, setImagem] = useState("");
  const [ingrediente, setIngrediente] = useState("");


  return (
       <View style={styles.form}>
          <Text style={{fontSize:20, fontWeight:"bold"}}>Dados do prato</Text>
          <TextInput placeholder="Nome da refeição" style={styles.textInput} value={nome} onChangeText={setNome}></TextInput>
          <TextInput placeholder="Tipo (refeição, bebida, sobremesa)" style={styles.textInput} value={tipo} onChangeText={setTipo}></TextInput>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <TextInput placeholder="Calorias" style={styles.textInput} value={caloria} onChangeText={setCaloria}></TextInput>
            <TextInput placeholder="Nome da Imagem" style={styles.textInput} value={imagem} onChangeText={setImagem}></TextInput>
          </View>
          <TextInput placeholder="Ingredientes" style={styles.textInput} value={ingrediente} onChangeText={setIngrediente}></TextInput>
          <Button style={{marginTop:10}} title="Gravar" onPress={() =>{
            const obj = {
              nome: nome,
              tipo: tipo,
              calorias: caloria,
              imagem: imagem,
              ingredientes:ingrediente
            }
            props.setLista([...props.lista, obj])
            setNome("")
            setTipo("")
            setCaloria("")
            setImagem("")
            setIngrediente("")
          }}/>
        </View>);
}

const Lista = (props)=>{
  const listaVisual = props.lista.map((item, idx)=>{

    return(
   
        <
    
   
    )
  })

}


export default function App() {
  
  const [lista,setLista] = useState([]);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.superior}>
        <Text>BRISTÔ-DONTE</Text>
        <ImageBackground source={require('./assets/restaurante.jpeg')} resizeMode="center" style={styles.image} />
        <View style={styles.title}>
          <Text style={styles.text}>Alimentação saudável</Text>
        </View>
      </View>
      <View style={styles.inferior}>
        <Formulario props={lista, setLista}/>
        <Lista props={lista}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  superior:{
    flex:0.3,
    backgroundColor:"#EFE4E1",
    alignItems:"center"
  },
  inferior:{
    flex:0.7
  },
  image:{
    opacity:0.4,
    width:300
  },
  title:{
    position:"absolute",
    justifyContent: "center",
    alignItems: "center",
    padding:10,
    marginTop:70
  },
  text:{
    fontSize:22
  },
  form:{
    flex: 0.5,
    padding:10

  },
  flatList:{
    flex:0.5,
    backgroundColor:"white"
  },
  textInput:{
    backgroundColor:"white",
    borderRadius:5,
    height:30,
    padding:10,
    placeholderTextColor:"lightgray",
    marginTop:10
  }
  
});
