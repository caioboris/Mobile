import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flexDirection: "column",
      justifyContent: "flex-end",
      backgroundColor: "blue",
      flex: 1,
    }}>
      <View style={{flex: 4, backgroundColor:"yellow"}}></View>
      <View style={{
          flex: 20,
          backgroundColor:"pink",
          flexDirection: "row",
          justifyContent: "space-evenly",
          }}>
        <View style={{width: 100, backgroundColor:"black"}}/>
        <View style={{width: 100, backgroundColor:"purple"}}/>
        <View style={{width: 100, backgroundColor:"red", height: 50, alignSelf:"flex-start"}}/>
      </View>
      <View style={{flex: 4, backgroundColor:"orange"}}></View>
    </View>
  );
}

