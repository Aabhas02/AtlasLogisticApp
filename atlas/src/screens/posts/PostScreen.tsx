import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';

const API_URL = 'http://192.168.1.205:3000/posts';
// Example:
// const API_URL = 'http://192.168.1.10:3000/posts';

export default function PostScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const savePost = async () => {
    if (!title || !description) {
      Alert.alert('Validation', 'Please fill all fields');
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          createdBy: 1,
          createdByName: 'Shivam',
        }),
      });

      const data = await response.json();

      Alert.alert('Success', data.message);

      setTitle('');
      setDescription('');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Unable to save post');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Create Post</Text>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        multiline
        numberOfLines={6}
        value={description}
        onChangeText={setDescription}
        style={[styles.input, { height: 150 }]}
      />

      <TouchableOpacity style={styles.button} onPress={savePost}>
        <Text style={styles.buttonText}>Publish Post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0A6EBD',
    marginBottom: 25,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  button: {
    backgroundColor: '#0A6EBD',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});