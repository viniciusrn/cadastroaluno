import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Database from '../Database';

const db = new Database();

export default class AlunoTelaEditar extends Component {
  static navigationOptions = {
    title: 'Editar Aluno',
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
      isLoading: true,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    db.alunoById(navigation.getParam('alunoId')).then((data) => {
      console.log(data);
      const product = data;
      this.setState({
      alunoId: aluno.alunoId,
      alunoNome: aluno.alunoNome,
      alunoDataNascimento: aluno.alunoDataNascimento,
      alunoSerie: aluno.alunoSerie,
      alunoCep: aluno.alunoCep,
      alunoRua: aluno.alunoRua,
      alunoNumero: aluno.alunoNumero,
      alunoComplemento: aluno.alunoComplemento,
      alunoBairro: aluno.alunoBairro,
      alunoCidade: aluno.alunoCidade,
      alunoEstado: aluno.alunoEstado,
      alunoNomeMae: aluno.alunoNomeMae,
      alunoCpfMae: aluno.alunoCpfMae,
      alunoDataPagamentoMae: aluno.alunoDataPagamentoMae,
      isLoading: false,
      });
    }).catch((err) => {
      console.log(err);
      this.setState = {
        isLoading: false
      }
    })
  }
  
  updateTextInput = (text, field) => {
    const state = this.state
    state[field] = text;
    this.setState(state);
  }

  updateAluno() {
    this.setState({
      isLoading: true,
    });
    const { navigation } = this.props;
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
    db.updateAluno(data.alunoId, data).then((result) => {
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
              onChangeText={(text) => this.updateTextInput(text, 'alunoId')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Nome do Aluno'}
              value={this.state.alunoNome}
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
              onChangeText={(text) => this.updateTextInput(text, 'alunoSerie')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'CEP'}
              value={this.state.alunoCep}
              onChangeText={(text) => this.updateTextInput(text, 'alunoCep')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Rua'}
              value={this.state.alunoRua}
              onChangeText={(text) => this.updateTextInput(text, 'alunoRua')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Número'}
              value={this.state.alunoNumero}
              onChangeText={(text) => this.updateTextInput(text, 'alunoNumero')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Complemento'}
              value={this.state.alunoComplemento}
              onChangeText={(text) => this.updateTextInput(text, 'alunoComplemento')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Bairro'}
              value={this.state.alunoBairro}
              onChangeText={(text) => this.updateTextInput(text, 'alunoBairro')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Cidade'}
              value={this.state.alunoCidade}
              onChangeText={(text) => this.updateTextInput(text, 'alunoCidade')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Estado'}
              value={this.state.alunoEstado}
              onChangeText={(text) => this.updateTextInput(text, 'alunoEstado')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'Nome da Mãe'}
              value={this.state.alunoNomeMae}
              onChangeText={(text) => this.updateTextInput(text, 'alunoNomeMae')}
          />
        </View>
        <View style={styles.subContainer}>
          <TextInput
              placeholder={'CPF'}
              value={this.state.alunoCpfMae}
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
            onPress={() => this.updateAluno()} />
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
