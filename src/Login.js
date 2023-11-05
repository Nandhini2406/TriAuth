import {
  View,
  Text,
  StyleSheet,
  ToastAndroid,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const Login = () => {
  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: true,
  });
  const navigation = useNavigation();
  useEffect(() => {
    // Check if biometric authentication is available
    rnBiometrics
      .isSensorAvailable()
      .then(resultObject => {
        const {available, biometryType} = resultObject;

        if (available && biometryType === BiometryTypes.Biometrics) {
          authenticateWithBiometrics();
          console.log('Biometrics is supported');
        } else {
          Alert.alert('Failed','Biometrics is not supported')
          console.log('Biometrics not supported');
        }
      })
      .catch(error => {
        console.error('Error Caught', error);
      });
  }, []);

  const authenticateWithBiometrics = () => {
    rnBiometrics
      .simplePrompt({
        promptMessage: 'Fingerprint Authentication',
      })
      .then(result => {
        const {success} = result;

        if (success) {
          // navigation.navigate('Home');
          ToastAndroid.show('Successfully authenticated', 1000);
          console.log('Authentication successful!');
        } else {
          ToastAndroid.show('Failed Try again', 1000);
          console.log('Authentication failed or cancelled.');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleFaceRecognition = () => {
    navigation.navigate('FaceRecognition');
  };
  const handlePatternLock = () => {
    navigation.navigate('PatternLock');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To TriAuth</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleFaceRecognition}>
        <Text style={styles.buttonText}>Face Recognition</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handlePatternLock}>
        <Text style={styles.buttonText}>Pattern Lock</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    backgroundColor: 'blue',
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    padding: 10,
  },
});

export default Login;
