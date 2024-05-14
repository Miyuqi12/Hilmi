import { useState } from "react";
import {Alert, Button, Text, TextInput, View} from "react-native";

export default function App() {
  const [inputData, setInputData] = useState('');
  const [number, setNumber] = useState(0);
  const sendButton = () => {
    Alert.alert(inputData);
  };
  const tambah = ()=> {
    setNumber(number +1);
  }
  const kurang = ()=> {
    setNumber(number -1);
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text>Sek Sinau UseState</Text>
      <TextInput
        placeholder="Masukkan Namae"
        value={inputData}
        onChangeText={setInputData}
      />
      <Button title="kliken wes" onPress={sendButton}/>
      <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      </View>
        <Text>{number}</Text>
      <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 50,
      }}>
        <Button title="+" onPress={tambah}/>
        <Button title="-" onPress={kurang}/>
      </View>
    </View>
  )
}