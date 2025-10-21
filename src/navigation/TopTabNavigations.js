import * as React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function TabOne() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tab One</Text>
    </View>
  );
}

function TabTwo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tab Two</Text>
    </View>
  );
}

function TabThree() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tab Three</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function HomeTopTabs() {
  return (
    <Tab.Navigator
      // screenOptions={{
      //   tabBarActiveTintColor: 'tomato',
      //   tabBarInactiveTintColor: 'gray',
      //   tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
      //   tabBarIndicatorStyle: { backgroundColor: 'tomato' },
      // }}
    >
      <Tab.Screen name="TabOne" component={TabOne} options={{ title: 'Tab 1' }} />
      <Tab.Screen name="TabTwo" component={TabTwo} options={{ title: 'Tab 2' }} />
      <Tab.Screen name="TabThree" component={TabThree} options={{ title: 'Tab 3' }} />
    </Tab.Navigator>
  );
}