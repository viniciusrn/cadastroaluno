import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AlunoTela from './components/AlunoTela';
import AlunoTelaDetalhes from './components/AlunoTelaDetalhes';
import AlunoTelaAdicionar from './components/AlunoTelaAdicionar';
import AlunoTelaEditar from './components/AlunoTelaEditar';

const RootStack = createStackNavigator(
  {
    Aluno: AlunoTela,
    AlunoDetalhes: AlunoTelaDetalhes,
    AdicionarAluno: AlunoTelaAdicionar,
    EditarAluno: AlunoTelaEditar,
  },
  {
    initialRouteName: 'Aluno',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#777777',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const RootContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <RootContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
