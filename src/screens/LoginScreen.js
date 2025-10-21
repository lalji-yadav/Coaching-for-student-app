import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, KeyboardAvoidingView,
  ScrollView, Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@react-native-vector-icons/material-icons';
import ForgotPasswordScreen from './ForgotPassword';
import HomeScreen from './HomeScreen';


const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (userId === '' || password === '') {
      Alert.alert('Error', 'Please enter both User ID and Password'); 
    } else {
      navigation.navigate('HomeScreen', { user: userId });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f9fc' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            style={styles.imgTag}
            source={require('../assets/images/logo.jpeg')}
          />

          <Text style={styles.title}>Welcome Divine Coaching!</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter User ID"
            value={userId}
            onChangeText={setUserId}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Icon name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="#666" />
            </TouchableOpacity>
          </View>


          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <Text style={styles.forgotPassword}  onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            Forgot password?</Text>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
    borderColor: '#aa1313ff', //
    borderWidth: 1,        // border thickness
    overflow: 'hidden'
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#4b0f93ff',
    textAlign: 'right',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 25,
    marginTop: 30
    // borderColor: '#aa1313ff', //
    // borderWidth: 1,        // border thickness
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#766e6eff',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    backgroundColor: '#4b0f93ff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '90%',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  imgTag: {
    width: 150,
    height: 150,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginBottom: 20,
  },
  forgotPassword: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a0f82ff',
    textAlign: 'right',
    marginTop: 10,
    alignSelf: 'flex-end',
    marginLeft: 20,
    marginRight: 20,
  },

  passwordContainer: {
    flexDirection: 'row',       // row me input + icon
    alignItems: 'center',
    width: '90%',               // same as input
    borderWidth: 1,
    borderColor: '#766e6eff',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 10,      // inner spacing
  },
  passwordInput: {
    flex: 1,                     // take remaining width
    paddingVertical: 10,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 5,
  },

});

