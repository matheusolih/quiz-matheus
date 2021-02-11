import React from 'react';

import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

import Header from '../../components/Header';

export default function Home({ navigation }) {
  function StartQuiz() {
    return navigation.navigate('Quiz');
  }

  return (
    <React.Fragment>
      <Header />
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem-vindo ao quiz.</Text>
      </View>
      <TouchableOpacity onPress={StartQuiz} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Iniciar quiz</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
}
