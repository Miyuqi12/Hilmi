import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Button, Image } from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  const checkPalindrome = () => {
    const reversedText = text.split('').reverse().join('');
    const isPalindrome = text === reversedText;

    const alertMessage = isPalindrome
      ? `Teks "${text}" adalah palindrome!`
      : `Teks "${text}" bukan palindrome.`;

    Alert.alert('Hasil Validasi', alertMessage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ようこそ</Text>
      <Text style={styles.title}>Palindrome Validator</Text>

      <Image
        source={{ uri: 'https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-impact-mona/sticker_2.png?d7379bb25870f2a87153b14d36039c98' }}
        style={styles.image}
      />

      <TextInput
        style={styles.textInput}
        placeholder="テキスト、どこ?"
        value={text}
        onChangeText={(newText) => setText(newText)}
      />

      <Button title="Validasi/検証" onPress={checkPalindrome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default App;
