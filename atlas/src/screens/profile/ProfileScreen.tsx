import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
const menuItems: {
  title: string;
  icon: string;
  screen?: keyof RootStackParamList;
}[] = [
  {
    title: 'Edit Profile',
    icon: 'person-outline',
    screen: 'EditProfile',
  },
  {
    title: 'Edit Company',
    icon: 'business-outline',
    screen: 'EditCompany',
  },
  {
    title: 'Edit Services',
    icon: 'settings-outline',
  },
  {
    title: 'Add Company User',
    icon: 'person-add-outline',
  },
  {
    title: 'Manage Company Users',
    icon: 'people-outline',
  },
];

export default function ProfileScreen() {
    const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
  key={index}
  style={styles.card}
  onPress={() => {
    if (item.screen) {
      navigation.navigate(item.screen);
    }
  }}>
          <View style={styles.left}>
            <Ionicons
              name={item.icon}
              size={24}
              color="#fff"
            />

            <Text style={styles.title}>
              {item.title}
            </Text>
          </View>

          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: '#1F3D73',
    borderRadius: 15,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 15,
    fontWeight: '500',
  },
});