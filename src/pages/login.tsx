import React, { useState, FunctionComponent } from 'react';
import { TextInput, Text, StyleSheet, Button } from 'react-native';

const Login: FunctionComponent = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLogin = () => {
    console.log(username, password);
  } 

  return (
    <>
      <Text>Usuário: </Text>
      <TextInput  
        style={styles.input}
        onChangeText={text => setUsername(text)}
        textContentType='username'>
      </TextInput>

      <Text>Senha: </Text>
      <TextInput 
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true} 
        textContentType='password'>
      </TextInput>
      <Button title="Entrar" onPress={handleLogin} />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fafafa',
    width: 200
  }
})

export default Login;