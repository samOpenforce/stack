import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {pushScreen} from '../../Navigation';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsSection}>
        <TouchableOpacity
          onPress={() => pushScreen(props, 'SettingsScreen')}
          style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Settings Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>open a modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
