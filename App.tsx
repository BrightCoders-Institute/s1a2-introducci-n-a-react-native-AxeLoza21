import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const sumar = () => {
    setResultado(parseFloat(numero1) + parseFloat(numero2));
  };

  const restar = () => {
    setResultado(parseFloat(numero1) - parseFloat(numero2));
  };

  const multiplicar = () => {
    setResultado(parseFloat(numero1) * parseFloat(numero2));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={numero1}
        onChangeText={setNumero1}
        placeholder="Número 1"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={numero2}
        onChangeText={setNumero2}
        placeholder="Número 2"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Sumar" onPress={sumar} />
        <Button title="Restar" onPress={restar} />
        <Button title="Multiplicar" onPress={multiplicar} />
      </View>
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  resultado: {
    fontSize: 20,
  },
});

export default App;
