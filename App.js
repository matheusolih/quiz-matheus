import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './src/views/Home';
import Quiz from './src/views/Quiz';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Quiz,
  })
);

export default function App() {
  return <Routes />;
}
