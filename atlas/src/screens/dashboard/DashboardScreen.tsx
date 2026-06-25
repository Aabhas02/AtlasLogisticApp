import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Atlas Logistics</Text>
        <Text style={styles.subtitle}>Welcome Back 👋</Text>
      </View>

      {/* Overview */}
      <Text style={styles.sectionTitle}>Today's Overview</Text>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardNumber}>125</Text>
          <Text style={styles.cardTitle}>Shipments</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>42</Text>
          <Text style={styles.cardTitle}>Customers</Text>
        </View>
      </View>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Text style={styles.cardNumber}>18</Text>
          <Text style={styles.cardTitle}>Drivers</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>9</Text>
          <Text style={styles.cardTitle}>Pending Orders</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Shipment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Track Shipment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Customers</Text>
      </TouchableOpacity>

      {/* Recent Activities */}
      <Text style={styles.sectionTitle}>Recent Activities</Text>

      <View style={styles.activityCard}>
        <Text style={styles.activityText}>
          • Shipment #1024 Delivered
        </Text>

        <Text style={styles.activityText}>
          • Shipment #1025 In Transit
        </Text>

        <Text style={styles.activityText}>
          • New Customer Registered
        </Text>

        <Text style={styles.activityText}>
          • Driver Assigned to Shipment
        </Text>
      </View>

    </ScrollView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },

  header: {
    backgroundColor: '#0A6EBD',
    padding: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#fff',
    marginTop: 5,
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 10,
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },

  card: {
    width: '42%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
  },

  cardNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0A6EBD',
  },

  cardTitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },

  button: {
    backgroundColor: '#0A6EBD',
    marginHorizontal: 15,
    marginBottom: 12,
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  activityCard: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    padding: 18,
    elevation: 3,
    marginBottom: 30,
  },

  activityText: {
    fontSize: 15,
    marginBottom: 10,
    color: '#333',
  },
});