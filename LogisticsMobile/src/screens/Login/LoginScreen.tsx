import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

type Props = {
  goToSignup: () => void;
  goToDashboard: () => void;
};

const LoginScreen = ({
  goToSignup,
  goToDashboard,
}: Props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

    if (!email || !password) {
      Alert.alert('Validation', 'Please enter Email and Password');
      return;
    }

    try {

      const response = await fetch(
        'http://192.168.1.205:3000/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: email,
            password: password,
          }),
        },
      );

      const data = await response.json();

      if (data.length > 0) {

       Alert.alert(
  'Success',
  `Welcome ${data[0].RM_UserName}`,
  [
    {
      text: 'OK',
      onPress: goToDashboard,
    },
  ],
);

      } else {

        Alert.alert(
          'Login Failed',
          'Invalid Username or Password',
        );

      }

    } catch (error) {

      console.log(error);

      Alert.alert(
        'Error',
        'Unable to connect to server',
      );
    }
  };

  // const handleSignup = () => {
  //   Alert.alert(
  //     'Signup',
  //     'Open SignupScreen here'
  //   );
  // };

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        Atlas Logistics
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Username"
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

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          LOGIN
        </Text>
      </TouchableOpacity>

<TouchableOpacity
  style={styles.signupButton}
  onPress={goToSignup}
>
  <Text style={styles.buttonText}>
    SIGN UP
  </Text>
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

  signupButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

// hey will i work in this