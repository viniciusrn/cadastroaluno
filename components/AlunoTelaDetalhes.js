import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, ActivityIndicator, View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Database from '../Database';

const db = new Database();

export default class AlunoTelaDetalhes extends Component {
  static navigationOptions = {
    title: 'Detalhe do Aluno',
  }

  constructor() {
    super();
    this.state = {
      isLoading: true,
      aluno: {},
      id: '',
    };
  }

  componentDidMount() {
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
      const { navigation } = this.props;
      db.alunoById(navigation.getParam('alunoId')).then((data) => {
        console.log(data);
        aluno = data;
        this.setState({
          aluno,
          isLoading: false,
          id: aluno.alunoId
        });
      }).catch((err) => {
        console.log(err);
        this.setState = {
          isLoading: false
        }
      })
    });
  }
  
  deleteAluno(id) {
    const { navigation } = this.props;
    this.setState({
      isLoading: true
    });
    db.deleteAluno(id).then((result) => {
      console.log(result);
      this.props.navigation.goBack();
    }).catch((err) => {
      console.log(err);
      this.setState = {
        isLoading: false
      }
    })
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <ScrollView>
        <Card style={styles.container}>
          <View style={styles.subContainer}>
            <View>
              <Text style={{fontSize: 16}}>ID: {this.state.aluno.alunoId}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>Nome do Aluno: {this.state.aluno.alunoNome}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>Data de Nascimento: {this.state.aluno.alunoDataNascimento}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>Série: {this.state.aluno.alunoSerie}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>CEP: {this.state.aluno.alunoCep}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>Rua: {this.state.aluno.alunoRua}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>Número: {this.state.aluno.alunoNumero}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>Complemento: {this.state.aluno.alunoComplemento}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>Bairro: {this.state.aluno.alunoBairro}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>Cidade: {this.state.aluno.alunoCidade}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>Estado: {this.state.aluno.alunoEstado}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>Nome da mãe: {this.state.aluno.alunoNomeMae}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>CPF da mãe: {this.state.aluno.alunoCpfMae}</Text>
            </View>
            <View>
              <Text style={{fontSize: 16}}>Data pagamento: {this.state.aluno.alunoDataPagamentoMae}</Text>
            </View>
          </View>
          <View style={styles.detailButton}>
            <Button
              large
              backgroundColor={'#CCCCCC'}
              leftIcon={{name: 'edit'}}
              title='Editar'
              onPress={() => {
                this.props.navigation.navigate('EditarAluno', {
                  alunoId: `${this.state.id}`,
                });
              }} />
          </View>
          <View style={styles.detailButton}>
            <Button
              large
              backgroundColor={'#999999'}
              color={'#FFFFFF'}
              leftIcon={{name: 'delete'}}
              title='Deletar'
              onPress={() => this.deleteAluno(this.state.id)} />
          </View>
        </Card>
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
    paddingBottom: 20,
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
  },
  detailButton: {
    marginTop: 10
  }
})