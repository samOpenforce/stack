import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from './styles';
import {setRoot, mainRoot} from '../../Navigation';

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Button title="Login" onPress={() => setRoot(mainRoot)} />
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
