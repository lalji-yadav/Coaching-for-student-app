import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Offline');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Offline' && styles.activeTab]}
          onPress={() => setActiveTab('Offline')}
        >
          <Text
            style={[styles.tabText, activeTab === 'Offline' && styles.activeText]}
          >
            Offline
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Online' && styles.activeTab]}
          onPress={() => setActiveTab('Online')}
        >
          <Text
            style={[styles.tabText, activeTab === 'Online' && styles.activeText]}
          >
            Online
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View style={styles.contentContainer}>
        {activeTab === 'Offline' ? (
          <Text style={styles.contentText}>📴 You are viewing Offline content</Text>
        ) : (
          <Text style={styles.contentText}>🌐 You are viewing Online content</Text>
        )}
      </View>
    </View>
  );
};

// 🎨 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1E90FF',
    textAlign: 'center',
    marginBottom: 30,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#E6E6E6',
    borderRadius: 10,
    marginBottom: 25,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: '#1E90FF',
  },
  tabText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  activeText: {
    color: '#fff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentText: {
    fontSize: 18,
    color: '#333',
  },
});

export default HomeScreen;
