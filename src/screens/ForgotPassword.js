import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Login from './LoginScreen';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('Password reset link sent to:', email);
    // Add your API or navigation logic here
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        Enter your registered mobile no and new password.
      </Text>

      
      <TextInput
        style={styles.input}
        placeholder="Enter your mobile no"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your new password"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Submit button */}
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Back to login */}
      <TouchableOpacity>
        <Text style={styles.backToLogin} onPress={() => navigation.navigate('Login')}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 30,
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
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2a0f82ff',
    textAlign: 'right',
    marginTop: 10,
    marginBottom:10,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
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
  backToLogin: {
    fontSize: 12,
    fontWeight: '500',
    color: '#2a0f82ff',
    textAlign: 'right',
    marginTop: 10,
    alignSelf: 'flex-end',
    marginLeft: 20,
    marginRight: 20,
  },
});
