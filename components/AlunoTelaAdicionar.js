import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Database from '../Database';

const db = new Database();

export default class AlunoTelaAdicionar extends Component {
  static navigationOptions = {
    title: 'Adicionar Aluno',
  };
  constructor() {
    super();
    this.state = {
      alunoId: '',
      alunoNome: '',
      alunoDataNascimento: '',
      alunoSerie: '',
      alunoCep: '',
      alunoRua: '',
      alunoNumero: '',
      alunoComplemento: '',
      alunoBairro: '',
      alunoCidade: '',
      alunoEstado: '',
      alunoNomeMae: '',
      alunoCpfMae: '',
      alunoDataPagamentoMae: '',
      isLoading: false,
    };
  }

  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text;
    this.setState(state);
  }
  
  saveAluno() {
    this.setState({
      isLoading: true,
    });
    let data = {
      alunoId: this.state.alunoId,
      alunoNome: this.state.alunoNome,
      alunoDataNascimento: this.state.alunoDataNascimento,
      alunoSerie: this.state.alunoSerie,
      alunoCep: this.state.alunoCep,
      alunoRua: this.state.alunoRua,
      alunoNumero: this.state.alunoNumero,
      alunoComplemento: this.state.alunoComplemento,
      alunoBairro: this.state.alunoBairro,
      alunoCidade: this.state.alunoCidade,
      alunoEstado: this.state.alunoEstado,
      alunoNomeMae: this.state.alunoNomeMae,
      alunoCpfMae: this.state.alunoCpfMae,
      alunoDataPagamentoMae: this.state.alunoDataPagamentoMae
    }
    db.addAluno(data).then((result) => {
      console.log(result);
      this.setState({
        isLoading: false,
      });
      this.props.navigation.state.params.onNavigateBack;
      this.props.navigation.goBack();
    }).catch((err) => {
      console.log(err);
      this.setState({
        isLoading: false,
      });
    })
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Aluno ID'}
              value={this.state.alunoId}
              keyboardType='numeric'
              onChangeText={(text) => this.updateTextInput(text, 'alunoId')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Nome do Aluno'}
              value={this.state.alunoNome}
              maxLength = {100}
              onChangeText={(text) => this.updateTextInput(text, 'alunoNome')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Data de Nascimento'}
              value={this.state.alunoDataNascimento}
              onChangeText={(text) => this.updateTextInput(text, 'alunoDataNascimento')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Série do Aluno'}
              value={this.state.alunoSerie}
              keyboardType='numeric'
              onChangeText={(text) => this.updateTextInput(text, 'alunoSerie')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'CEP'}
              value={this.state.alunoCep}
              keyboardType='numeric'
              onChangeText={(text) => this.updateTextInput(text, 'alunoCep')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Rua'}
              value={this.state.alunoRua}
              maxLength = {120}
              onChangeText={(text) => this.updateTextInput(text, 'alunoRua')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Número'}
              value={this.state.alunoNumero}
              keyboardType='numeric'
              onChangeText={(text) => this.updateTextInput(text, 'alunoNumero')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Complemento'}
              value={this.state.alunoComplemento}
              maxLength = {50}
              onChangeText={(text) => this.updateTextInput(text, 'alunoComplemento')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Bairro'}
              value={this.state.alunoBairro}
              maxLength = {100}
              onChangeText={(text) => this.updateTextInput(text, 'alunoBairro')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Cidade'}
              value={this.state.alunoCidade}
              maxLength = {120}
              onChangeText={(text) => this.updateTextInput(text, 'alunoCidade')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Estado'}
              value={this.state.alunoEstado}
              maxLength = {80}
              onChangeText={(text) => this.updateTextInput(text, 'alunoEstado')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Nome da Mãe'}
              value={this.state.alunoNomeMae}
              maxLength = {100}
              onChangeText={(text) => this.updateTextInput(text, 'alunoNomeMae')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'CPF'}
              value={this.state.alunoCpfMae}
              keyboardType='numeric'
              onChangeText={(text) => this.updateTextInput(text, 'alunoCpfMae')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Data de Pagamento'}
              value={this.state.alunoDataPagamentoMae}
              onChangeText={(text) => this.updateTextInput(text, 'alunoDataPagamentoMae')}
          />
        </View>
        <View style={styles.button}>
          <Button
            large
            leftIcon={{name: 'save'}}
            title='Salvar'
            onPress={() => this.saveAluno()} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  subContainer: {
    flex: 1,
    marginBottom: 20,
    padding: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
