import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Pushed Screen</Text>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
