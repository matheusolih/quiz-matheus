import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from './styles';
import Header from '../../components/Header';

import { quizForm } from '../../helpers/quizForm';

export default function Quiz({ navigation }) {
  const [quiz, setQuiz] = useState(0);
  const [checked, setChecked] = useState(null);
  const [answer, setAnswer] = useState('respostaCorreta');
  const [rightAnswers, setRightAnswers] = useState(0);
  const [finished, setFinished] = useState(false);

  function changeQuiz() {
    if (checked === null) {
      return alert('Selecione uma opção.');
    }

    if (quizForm[quiz].correct === answer) {
      setRightAnswers(rightAnswers + 1);
    }

    if (quizForm[quiz + 1]) {
      setChecked(null);
      return setQuiz(quiz + 1);
    }

    return setFinished(true);
  }

  function restartQuiz() {
    return navigation.navigate('Home');
  }

  return (
    <React.Fragment>
      <Header />
      {!finished && (
        <React.Fragment>
          <View style={styles.imagePosition}>
            <Image source={quizForm[quiz].image} style={styles.logo} />
          </View>
          <View style={styles.container}>
            <Text style={styles.question}>{quizForm[quiz].question}</Text>

            <Text>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('first');
                  setAnswer('first');
                }}
              />
              {quizForm[quiz].answer1}
            </Text>
            <Text>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('second');
                  setAnswer('second');
                }}
              />
              {quizForm[quiz].answer2}
            </Text>
            <Text>
              <RadioButton
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('third');
                  setAnswer('third');
                }}
              />
              {quizForm[quiz].answer3}
            </Text>
            <Text>
              <RadioButton
                value="fourth"
                status={checked === 'fourth' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('fourth');
                  setAnswer('fourth');
                }}
              />
              {quizForm[quiz].answer4}
            </Text>
            <Text>
              <RadioButton
                value="fifth"
                status={checked === 'fifth' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('fifth');
                  setAnswer('fifth');
                }}
              />
              {quizForm[quiz].answer5}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={changeQuiz}
              style={styles.appButtonContainer}
            >
              <Text style={styles.appButtonText}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      )}
      {finished && (
        <React.Fragment>
          <View style={styles.result}>
            <Text style={styles.resultText}>VOCÊ ACERTOU {rightAnswers}!</Text>
          </View>
          <TouchableOpacity
            onPress={restartQuiz}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>REFAZER QUIZ</Text>
          </TouchableOpacity>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
