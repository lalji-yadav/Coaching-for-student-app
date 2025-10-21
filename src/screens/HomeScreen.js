import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StudentDashboard from './StudentDashboard';


function Offline({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Goal Buttons */}
      <View style={styles.grid}>

        <TouchableOpacity style={styles.card}
          onPress={() => navigation.navigate('StudentDashboard')}
          >
          <Text style={styles.cardText}>Class 9 - Science</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
          onPress={() => console.log('Selected: Class 10')}>
          <Text style={styles.cardText}>Class 10 - Science</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
          onPress={() => console.log('Selected: Class 11')}>
          <Text style={styles.cardText}>Class 11 - Science</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
          onPress={() => console.log('Selected: Class 12')}>
          <Text style={styles.cardText}>Class 12 - Science</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
          onPress={() => console.log('Selected: NEET')}>
          <Text style={styles.cardText}>NEET Preparation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
          onPress={() => console.log('Selected: JEE')}>
          <Text style={styles.cardText}>JEE Advanced</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
          onPress={() => console.log('Selected: Others')}>
          <Text style={styles.cardText}>Others</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
}

function Online() {
  return (
    <View style={styles.screenContainer}>

      <TouchableOpacity style={styles.card}
        onPress={() => console.log('Selected: Class 9')}>
        <Text style={styles.cardText}>Class 9</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}
        onPress={() => console.log('Selected: Class 10')}>
        <Text style={styles.cardText}>Class 10</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}
        onPress={() => console.log('Selected: Class 11')}>
        <Text style={styles.cardText}>Class 11</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}
        onPress={() => console.log('Selected: Class 12')}>
        <Text style={styles.cardText}>Class 12</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}
        onPress={() => console.log('Selected: NEET')}>
        <Text style={styles.cardText}>NEET</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}
        onPress={() => console.log('Selected: JEE')}>
        <Text style={styles.cardText}>JEE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}
        onPress={() => console.log('Selected: Others')}>
        <Text style={styles.cardText}>Others</Text>
      </TouchableOpacity>

    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function HomeTopTabs() {
  return (
    <View style={{ flex: 1 }}>
      {/* 👉 Text above the top tabs */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Select Goal 📚</Text>
        <Text style={styles.headerText}>Explore All Exams At Divine</Text>
        <Text style={styles.subtitle}>Choose your class or exam preparation</Text>

      </View>

      {/* 👉 Top Tabs Below */}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#4b0f93ff',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarIndicatorStyle: { backgroundColor: '#4b0f93ff' },
        }}
      >
        <Tab.Screen name="Offline" component={Offline} />
        <Tab.Screen name="Online" component={Online} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    //alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#4b0f93ff',
    alignItems: 'left',
  },
  screenContainer: {
    flex: 1,
   // justifyContent: 'center',
   // alignItems: 'center',
  },
  grid: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // marginTop: 20,
    // paddingHorizontal: 10,
  },
  card: {
    width: '90%',
    height: 45,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#f9f9f9',
    marginVertical: 4,
    marginHorizontal: 20,
    borderColor: '#4b0f93ff'
  },
  cardText: {
    color: '#4b0f93ff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  subtitle: {
    color: '#4b0f93ff',
  }

});
