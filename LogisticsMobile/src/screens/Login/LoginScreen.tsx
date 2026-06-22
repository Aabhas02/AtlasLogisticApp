import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Validation', 'Please enter Email and Password');
      return;
    }

    Alert.alert('Success', 'Login Button Clicked');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Atlas Logistics</Text>

<TextInput
  style={styles.input}
  placeholder="Enter Email"
  placeholderTextColor="#999"
  value={email}
  onChangeText={setEmail}
/>

<TextInput
  style={styles.input}
  placeholder="Enter Password"
  placeholderTextColor="#999"
  secureTextEntry
  value={password}
  onChangeText={setPassword}
/>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});


// AAbhas