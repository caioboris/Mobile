import 'react-native-gesture-handler';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-native/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const TopView = ()=>{
    return(
    <View style={styles.topView}> 
        <ImageBackground source={require('./assets/bateria.jpeg')} resizeMode="center" style={styles.image} />
        <View style={styles.title}>
          <Text style={styles.text}>Loja</Text>
          <Text style={styles.text}>Som dos Anjos</Text>
      </View>
    </View>
  );
}

const BottomView = ()=>{
  return(
    <View style={styles.bottomView}>
      <Tab.Navigator>
        <Tab.Screen name="Cadastrar"/>
        <Tab.Screen name="Listagem"/>
      </Tab.Navigator>
    </View>
  );
}

const Cadastrar = ()=>{
  return(
    <View style={styles.form}>
      <TextInput placeholder='Marca do instrumento' />
      <TextInput placeholder='Tipo do instrumento' />
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <TextInput placeholder='Modelo' />
        <TextInput placeholder='Preço' />
      </View>
      <Button title='Salvar'/>
    </View>
  );
}

const Listagem = () =>{
  
}


export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <TopView/>
      <BottomView/>  
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView: {
    flex: 0.3
  },
  bottomView: {
    flex: 0.7,
    backgroundColor: 'orange'
  },
  image:{
    opacity:0.4,
    width:300
  },
  title:{
    position:"absolute",
    justifyContent: "center",
    backgroundColor:'yellow',
    opacity:0.6,
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

  }
});
