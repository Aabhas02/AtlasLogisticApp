import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function EditCompanyScreen() {
  const [companyName, setCompanyName] = useState('Atlas Logistics');
  const [email, setEmail] = useState('atlas@gmail.com');
  const [phone, setPhone] = useState('+91 9876543210');
  const [address, setAddress] = useState('Mumbai, India');

  const updateCompany = () => {
    alert('Company Updated Successfully');
    // Later replace this with your API call
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Edit Company</Text>

      <TextInput
        style={styles.input}
        placeholder="Company Name"
        value={companyName}
        onChangeText={setCompanyName}
      />

      <TextInput
        style={styles.input}
        placeholder="Company Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone"
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
        onPress={updateCompany}>
        <Text style={styles.buttonText}>
          Update Company
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
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});