import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

// const API_URL = 'http://localhost:3000/posts';
const API_URL = 'http://192.168.1.205:3000/posts';

const DashboardScreen = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const response = await fetch(API_URL);
     const data = await response.json();

console.log('Dashboard Data:', data);
console.log('Length:', data.length);

setPosts([...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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

      {/* Latest Posts */}
      <Text style={styles.sectionTitle}>Latest Posts</Text>
      {/* <Text style={{ color: 'red', fontSize: 16 }}>
  Posts Count: {posts.length}
</Text> */}

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0A6EBD"
          style={{ marginTop: 20 }}
        />
      ) : posts.length === 0 ? (
        <Text style={styles.emptyText}>No posts found.</Text>
      ) : (
        posts.map((item: any) => (
          <View key={item.Id} style={styles.postCard}>
            <Text style={styles.postTitle}>
              {item.Title}
            </Text>

            <Text style={styles.postDescription}>
              {item.Description}
            </Text>

            <Text style={styles.postFooter}>
              Posted By: {item.CreatedByName}
            </Text>

            <Text style={styles.postDate}>
              {new Date(item.CreatedDate).toLocaleString()}
            </Text>
          </View>
        ))
      )}

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

  postCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },

  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A6EBD',
  },

  postDescription: {
    marginTop: 8,
    fontSize: 15,
    color: '#555',
  },

  postFooter: {
    marginTop: 12,
    fontWeight: '600',
    color: '#333',
  },

  postDate: {
    marginTop: 4,
    fontSize: 12,
    color: '#888',
  },

  emptyText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#777',
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