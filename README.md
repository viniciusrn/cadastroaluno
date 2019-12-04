# Aplicativo React Native: Cadastro de Alunos
## Informações:
- Resumo
- Desenvolvimento
- Resultados
- Testes
- Considerações finais
## Resumo
Aplicativo desenvolvido utilizando React Native e tem como o intuito de aplicar os conhecimentos adquiridos a fim de realizar um _CRUD_ (Create, Read, Update, Delete) simples, para cadastrar informações gerais de alunos.

## Desenvolvimento
### Sistema Operacional
Linux Mint

Versões dos pacotes utilizadas:<br/>
Node:
```
$ v12.13.1
```
Npm:
```
$ 6.12.1
```
Yarn:
```
$ 1.17.3
```
Para criar um aplicativo React Native é preciso instalar primeiro o react-native-cli:
```
$ sudo npm install -g react-native-cli
```
Em seguida, para criar o aplicativo utilizou-se do comando:
```
$ react-native init cadastroAluno
```
Depois mudou-se para a pasta recém criada:
```
$ cd cadastroAluno
```
Verificou-se a versão do React Native:<br/>
Comando:
```
$ react-native -v
```
React-native cli:
```
$ 2.0.1
```
React-native:
```
$ 0.61.5
```
Como foi utilizado um dispositivo Android, o comando a seguir é para detectar se há um celular conectado:
```
$ adb devices
```
Resultado:
```
$ 5210070fec######	device
```
Ou seja, um dispositivo foi encontrado.<br/>

Os comandos a seguir são para iniciar o aplicativo e instalá-lo no celular. Vale ressaltar que a sequência utilizada é invertida (como utilizada no convencional), pois ao instalar no dispositivo a tela inicial fica toda branca e não consigo realizar nenhum comando. Utilizando da maneira abaixo esse problema é solucionado:
```
$ sudo react-native start
$ sudo react-native run-android
```
Por ser a primeira vez que roda o aplicativo, é muito provável que apareçam alguns erros, como no print abaixo:
![](images/erro_AndroidSDK)
O erro
```
$ SDK location not found. Define location with an ANDROID_SDK_ROOT environment variable or by setting the sdk.dir path in your project's local properties file at
```
é referente à falta do caminho do SDK. **Solução:** ir para a pasta do projeto react-native e então para o diretório do android e criar o arquivo "local.properties". Nele deve adicionar esse caminho: sdk.dir = /home/USERNAME/Android/Sdk (USERNAME = viniciusriemma, no meu caso).
Agora sim, utilizando novamente o comando:
```
$ sudo react-native start-android
```
O aplicativo é instalado com sucesso.<br/>
Para dar continuidade ao projeto é necessário instalar os seguintes pacotes:
```
$ yarn add react-navigation --save
$ yarn add react-native-gesture-handler --save
```
E fazer o link entre o react native e o handler:
```
$ sudo react-native link react-native-gesture-handler
```
Agora sim, trabalhando no aplicativo em si.<br/>
**Observação:** Todos os arquivos a seguir que serão criados e/ou editados já estão disponíveis no repositório.
As telas do aplicativo foram criadas dentro da pasta **components**, são elas:

- AlunoTela.js;
- AlunoTelaDetalhes.js;
- AlunoTelaAdicionar.js;
- AlunoTelaEditar.js;<br/>

E o arquivo **App.js** foi alterado para que fosse possível navegar entre as telas. Porém é necessário adicionar o seguinte pacote:
```
$ yarn add react-navigation-stack
```
Com todos os arquivos devidamente alterados é preciso armazenar as informações do aplicativo em um banco de dados local (dentro do próprio dispositivo). Para esse projeto utilizou-se o **React Native SQLite Storage**.
Para instalar e configurar o SQLite deve-se seguir os próximos passos:
```
$ yarn add react-native-sqlite-storage --save
$ yarn add react-native-elements --save
$ sudo react-native link
```
Deve-se criar o arquivo **Database.js** na raiz do projeto e adicionar as informações que estão no repositório.
Ao tentar rodar novamente o aplicativo, aparecerá o erro referente ao react-native-vector-icons"/FontAwesome. **Solução:** adicionar a seguinte linha no arquivo android/app/build.gradle:
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle".<br/>
Agora sim o aplicativo estará funcionando corretamente.

## Resultados
## Testes
## Considerações finais
Esse foi meu primeiro projeto desenvolvido em React Native. Com pouco tempo de estudo e muita dedicação consegui fazer um _CRUD_ simples para cadastro de alunos. Há porém alguns temas a serem desenvolvidos no futuro como, validação de CPF, validação de CEP e validação data. Esse é um tema muito vasto e desafiador. Vou me dedicar mais tempo para me aprofundar em desenvolvimento mobile, para assim conseguir integrar com web.
