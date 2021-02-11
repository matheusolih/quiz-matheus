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
        <Text style={styles.description}>
          Este é um quiz contendo 15 perguntas sobre diversos assuntos, como
          geografia, história, música e conhecimentos gerais. Boa sorte!
        </Text>
      </View>
      <TouchableOpacity onPress={StartQuiz} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Iniciar quiz</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
}
