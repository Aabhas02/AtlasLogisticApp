import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditProfileScreen() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {

    try {

      const userId =
        await AsyncStorage.getItem('userId');

      if (!userId) return;

      const response = await fetch(
        `http://192.168.1.205:3000/auth/profile/${userId}`,
      );

      const user = await response.json();

      setName(user.RM_UserName ?? '');
      setEmail(user.RM_OfficialEmailId ?? '');
      setPhone(user.RM_MobileNumber ?? '');
      setAddress(user.RM_Address ?? '');

    } catch (e) {
      console.log(e);
    }
  };

  const updateProfile = async () => {

    try {

      const userId =
        await AsyncStorage.getItem('userId');

      if (!userId) return;

      const response = await fetch(
        `http://192.168.1.205:3000/auth/profile/${userId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: name,
            email: email,
            mobile: phone,
            address: address,
          }),
        },
      );

      const data = await response.json();

      if (data.success) {

        Alert.alert(
          'Success',
          'Profile Updated Successfully',
        );

      } else {

        Alert.alert(
          'Failed',
          'Unable to update profile',
        );

      }

    } catch (e) {

      console.log(e);

      Alert.alert(
        'Error',
        'Unable to connect to server',
      );
    }
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.heading}>
        Edit Profile
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={updateProfile}>

        <Text style={styles.buttonText}>
          Update Profile
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#1F3D73',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});