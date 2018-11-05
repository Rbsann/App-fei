import React , {Component} from 'react';
import { StyleSheet, View ,AppRegistry, TextInput,ScrollView,Button,Image,TouchableOpacity,TouchableWithoutFeedback ,Alert} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Text } from 'native-base';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {Column as Col, Row} from 'react-native-flexbox-grid';




class HomeScreen extends React.Component {

  callFun = () =>
  {
    alert("Image Clicked!!!");
  }
  state = {
    usuario: '',
    senha: ''
  }
  handleUsuario = (text) => {
    this.setState({ usuario: text })
  }
  handleSenha= (text) => {
    this.setState({ senha: text })
  }
  _onPressLogin = () => {
    if (this.state.usuario === '' && this.state.senha === ''){
      this.props.navigation.navigate('StudentOptions');
    }else{
      alert('Email invalido ou senha invalida!');
    }
  }
  constructor(props){
    super(props);
  }

  render() {
    return (

      <ScrollView style={styles.container}>
      <Image style={{width:200,height:200,marginBottom:100}} source={require('./assets/imgs/sum.png')} />
      <TextInput placeholder='Usuario' onChangeText = {this.handleUsuario}/>
      <TextInput placeholder='Senha' style={{marginBottom:30}} onChangeText = {this.handleSenha}/>
      <Button
      title="Login"
      onPress={this._onPressLogin}
      />


      </ScrollView>

    )
  }
}

class StudentOptionsScreen extends React.Component {
  render(){
    return (

      <View style={styles.segundaTela}>
      <Row size={12}>
      <Col sm={6} md={4} lg={3}>
      <Image style={{width:50,height:50, marginBottom:20}} source={require('./assets/imgs/Matematica/fermat.png')} />
      </Col>
      <Col sm={6} md={4} lg={3}>
      <Text>Credito:R$20,00</Text>
      </Col>
      </Row>
      <Row size={12}>
      <Text style={{marginBottom:20}}>  Aluno: Qual materia gostaria de estudar hoje </Text>
      </Row>
      <Row size={12} style={{alignItems:"center",justifyContent:'center'}}>
      <ScrollView style={styles.container}>

      <View style={{marginBottom:5, width:200}}>
      <Button title="Biologia" onPress={() => {
        this.props.navigation.navigate('Teachers', {
          itemId: 1,
        });
      }}/>
      </View>
      <View style={{marginBottom:5, width:200}}>
      <Button title="Filosofia" onPress={() => {
        this.props.navigation.navigate('Teachers', {
          itemId: 2,
        });
      }}/>
      </View>
      <View style={{marginBottom:5, width:200}}>
      <Button title="Fisica" onPress={() => {
        this.props.navigation.navigate('Teachers', {
          itemId: 3
        });
      }}/>
      </View>
      <View style={{marginBottom:5, width:200}}>
      <Button title="Geografia" onPress={() => {
        this.props.navigation.navigate('Teachers', {
          itemId: 4,
        });
      }}/>
      </View>
      <View style={{marginBottom:5, width:200}}>
      <Button title="Historia" onPress={() => {
        this.props.navigation.navigate('Teachers', {
          itemId: 5,
        });
      }}/>
      </View>
      <View style={{marginBottom:5, width:200}}>
      <Button title="Matematica"  onPress={() => {
        this.props.navigation.navigate("Teachers" , {
          itemId: 6,
        });
      }}/>
      </View>
      <View style={{marginBottom:5 ,width:200}}>
      <Button title="Portugues" onPress={() => {
        this.props.navigation.navigate('Teachers', {
          itemId: 7,
        });
      }}/>
      </View>
      <View style={{marginBottom:5, width:200}}>
      <Button title="Quimica" onPress={() => {
        this.props.navigation.navigate('Teachers', {
          itemId: 8,
        });
      }}/>
      </View>
      <View style={{marginBottom:5, width:200}}>
      <Button title="Redacao" onPress={() => {
        this.props.navigation.navigate('Teachers', {
          itemId: 9,
        });
      }}/>
      </View>

      </ScrollView>
      </Row>
      <Row size={12}>
      <Col sm={4} md={4} lg={3}>
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Profile")} >

      <Image style={{width:40,height:40,marginLeft:40}} source={require('./assets/imgs/icon.png')}/>

      </TouchableWithoutFeedback>
      </Col>
      <Col sm={4} md={4} lg={3}>
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("TeachersLiked")} >

      <Image style={{width:40,height:40,marginLeft:40}} source={require('./assets/imgs/teachers.png')}/>

      </TouchableWithoutFeedback>
      </Col>
      <Col sm={4} md={4} lg={3}>
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Credit")} >

      <Image style={{width:40,height:40,marginLeft:40}} source={require('./assets/imgs/credit.png')}/>

      </TouchableWithoutFeedback>
      </Col>
      </Row>
      </View>





    )
  }
}

class TeachersScreen extends React.Component {
  render(){
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    if(itemId==1){
      return (
        <View style={styles.Teachers}>
          <Row size={15} style={{marginLeft:20,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
           <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text> Darwin</Text>
            <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Biologia/darwin.jpg')} />
            <Text> 5/5</Text>
            </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text style={{marginLeft:40}}>Dawkins</Text>
            <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Biologia/dawkins.jpg')} />
            <Text style={{marginLeft:50}}>3/5</Text>
            </View>
          </Col>
          </Row>
          <Row size={15} style={{marginLeft:30,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
          <Text>Paracelso</Text>
          <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Biologia/Paracelso.jpg')} />
          <Text>4/5</Text>
          </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text  style={{marginLeft:50}}>Wilson</Text>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Professor")} >
              <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Biologia/eowilson.jpg')}/>
            </TouchableWithoutFeedback>
            <Text style={{marginLeft:50}}>5/5</Text>
          </View>
          </Col>
          </Row>

        </View>
      )
    }else if(itemId==2){
      return (
        <View style={styles.Teachers}>
          <Row size={15} style={{marginLeft:20,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
           <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text> Kant</Text>
            <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Filosofia/kant.jpg')} />
            <Text> 4/5</Text>
            </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text style={{marginLeft:50}}>Leibniz</Text>
            <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Filosofia/Leibniz.jpg')} />
            <Text style={{marginLeft:50}}>5/5</Text>
            </View>
          </Col>
          </Row>
          <Row size={15} style={{marginLeft:30,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
          <Text>Rousseau</Text>
          <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Filosofia/rousseau.jpg')} />
          <Text>1/5</Text>
          </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text  style={{marginLeft:30}}>Socrates</Text>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Professor")} >
              <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Filosofia/socrates.jpg')}/>
            </TouchableWithoutFeedback>
            <Text style={{marginLeft:50}}>5/5</Text>
          </View>
          </Col>
          </Row>

        </View>
      )
    }else if(itemId==3){
      return (
        <View style={styles.Teachers}>
          <Row size={15} style={{marginLeft:20,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
           <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text> Einstein</Text>
            <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Fisica/einstein.jpg')} />
            <Text> 5/5</Text>
            </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text style={{marginLeft:50}}>Euler</Text>
            <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Fisica/euler.jpg')} />
            <Text style={{marginLeft:50}}>3/5</Text>
            </View>
          </Col>
          </Row>
          <Row size={15} style={{marginLeft:30,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
          <Text>Newton</Text>
          <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Fisica/newton.jpg')} />
          <Text>5/5</Text>
          </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text  style={{marginLeft:50}}>Tesla</Text>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Professor")} >
              <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Fisica/tesla.jpeg')}/>
            </TouchableWithoutFeedback>
            <Text style={{marginLeft:50}}>2/5</Text>
          </View>
          </Col>
          </Row>

        </View>
      )
    }else if(itemId==4){
      return (
        <View style={styles.Teachers}>
          <Row size={15} style={{marginLeft:20,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
           <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text> Ritter</Text>
            <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Geografia/Carl_Ritter.jpg')} />
            <Text> 3/5</Text>
            </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text style={{marginLeft:30}}>Estrabao</Text>
            <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Geografia/estrabao.jpg')} />
            <Text style={{marginLeft:50}}>4/5</Text>
            </View>
          </Col>
          </Row>
          <Row size={15} style={{marginLeft:30,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
          <Text>Humboldt</Text>
          <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Geografia/humboldt.jpg')} />
          <Text>3/5</Text>
          </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text  style={{marginLeft:50}}>Milton</Text>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Professor")} >
              <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Geografia/MiltonSantos.jpg')}/>
            </TouchableWithoutFeedback>
            <Text style={{marginLeft:50}}>5/5</Text>
          </View>
          </Col>
          </Row>

        </View>
      )
    }else if(itemId==5){
      return (
        <View style={styles.Teachers}>
          <Row size={15} style={{marginLeft:20,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
           <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text> Boris</Text>
            <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Historia/boris_fausto.jpg')} />
            <Text> 3/5</Text>
            </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text style={{marginLeft:30}}>Hobsbawn</Text>
            <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Historia/hobsbawn.jpg')} />
            <Text style={{marginLeft:50}}>5/5</Text>
            </View>
          </Col>
          </Row>
          <Row size={15} style={{marginLeft:30,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
          <Text>Mary</Text>
          <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Historia/mary_del_priore.jpg')} />
          <Text>3/5</Text>
          </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text  style={{marginLeft:50}}>Winston</Text>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Professor")} >
              <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Historia/winston-churchill.jpg')}/>
            </TouchableWithoutFeedback>
            <Text style={{marginLeft:50}}>5/5</Text>
          </View>
          </Col>
          </Row>

        </View>
      )
    }else if(itemId==6){
      return (
        <View style={styles.Teachers}>
          <Row size={15} style={{marginLeft:20,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
           <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text> Terence Tao</Text>
            <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Matematica/tao.jpg')} />
            <Text> 3/5</Text>
            </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text style={{marginLeft:50}}>Fermat</Text>
            <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Matematica/fermat.png')} />
            <Text style={{marginLeft:50}}>4/5</Text>
            </View>
          </Col>
          </Row>
          <Row size={15} style={{marginLeft:30,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
          <Text>Ramanujan</Text>
          <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Matematica/rama.jpg')} />
          <Text>3/5</Text>
          </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text  style={{marginLeft:50}}>Galois</Text>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Professor")} >
              <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Matematica/galois.jpg')}/>
            </TouchableWithoutFeedback>
            <Text style={{marginLeft:50}}>5/5</Text>
          </View>
          </Col>
          </Row>

        </View>
      )
    }else if(itemId==7){
      return (
        <View style={styles.Teachers}>
          <Row size={15} style={{marginLeft:20,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
           <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text> Jaqueline</Text>
            <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Portugues/jaqueline_moll.jpg')} />
            <Text> 3/5</Text>
            </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text style={{marginLeft:50}}>Maria</Text>
            <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Portugues/Maria_Nilde.jpg')} />
            <Text style={{marginLeft:50}}>4/5</Text>
            </View>
          </Col>
          </Row>
          <Row size={15} style={{marginLeft:30,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
          <Text>Paulo</Text>
          <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Portugues/paulo_freire.jpg')} />
          <Text>3/5</Text>
          </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text  style={{marginLeft:30}}>Machado</Text>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Professor")} >
              <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Portugues/machado.jpg')}/>
            </TouchableWithoutFeedback>
            <Text style={{marginLeft:50}}>5/5</Text>
          </View>
          </Col>
          </Row>

        </View>
      )
    }else if(itemId==8){
      return (
        <View style={styles.Teachers}>
          <Row size={15} style={{marginLeft:20,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
           <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text> Bohr</Text>
            <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Quimica/bohr.jpg')} />
            <Text> 3/5</Text>
            </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text style={{marginLeft:50}}>Marie</Text>
            <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Quimica/currie.png')} />
            <Text style={{marginLeft:50}}>4/5</Text>
            </View>
          </Col>
          </Row>
          <Row size={15} style={{marginLeft:30,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
          <Text>Dalton</Text>
          <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Quimica/dalton.jpg')} />
          <Text>3/5</Text>
          </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text  style={{marginLeft:30}}>Lavosier</Text>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Professor")} >
              <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Quimica/lavosier.jpg')}/>
            </TouchableWithoutFeedback>
            <Text style={{marginLeft:50}}>5/5</Text>
          </View>
          </Col>
          </Row>

        </View>
      )
    }else if(itemId==9){
      return (
        <View style={styles.Teachers}>
          <Row size={15} style={{marginLeft:20,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
           <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text> Clarice</Text>
            <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Redacao/clarice.jpg')} />
            <Text> 3/5</Text>
            </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text style={{marginLeft:30}}>Theodoro</Text>
            <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Redacao/dostoquem.jpg')} />
            <Text style={{marginLeft:50}}>4/5</Text>
            </View>
          </Col>
          </Row>
          <Row size={15} style={{marginLeft:30,marginVertical:50}}>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
          <Text>Darcy</Text>
          <Image style={{width:100,height:100}} resizeMode='cover' source={require('./assets/imgs/Redacao/darcy.jpg')} />
          <Text>3/5</Text>
          </View>
          </Col>
          <Col sm={6} md={4} lg={3}>
          <View style={{flexGrow: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text  style={{marginLeft:20}}>Shakespeare</Text>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Professor")} >
              <Image style={{width:100,height:100,marginLeft:80}} resizeMode='cover' source={require('./assets/imgs/Redacao/shakespeare.jpg')}/>
            </TouchableWithoutFeedback>
            <Text style={{marginLeft:50}}>5/5</Text>
          </View>
          </Col>
          </Row>

        </View>
      )
    }

  }
}


class ProfessorScreen extends React.Component {
  render(){
    return (
      <ScrollView style={styles.container}>

      <Image style={{width:100,height:100}} source={require('./assets/imgs/Matematica/galois.jpg')}/>
      <Button title="Dar like"/>
      <Button title="Marcar aula"/>

      </ScrollView>


    )
  }
}

class AgendaScreen extends React.Component{


  render() {
    return (
      <Agenda

      //markingType={'interactive'}
      markedDates={{
        '2017-05-08': [{textColor: '#666'}],
        '2017-05-09': [{textColor: '#666'}],
        '2017-05-14': [{startingDay: true, color: 'blue'}, {endingDay: true, color: 'blue'}],
        '2017-05-21': [{startingDay: true, color: 'blue'}],
        '2017-05-22': [{endingDay: true, color: 'gray'}],
        '2017-05-24': [{startingDay: true, color: 'gray'}],
        '2017-05-25': [{color: 'gray'}],
        '2017-05-26': [{endingDay: true, color: 'gray'}]}}
        monthFormat={'yyyy'}
        theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        />
      )
    }
  }

  class ProfileScreen extends React.Component{
    render(){
      return (

        <Button title="Marcar aula"/>



      )
    }
  }

  class TeachersLikedScreen extends React.Component{
    render(){
      return (


        <Button title="Marcar aula"/>


      )
    }
  }



  class CreditScreen extends React.Component{
    callFun = () =>
    {
      alert("Image Clicked!!!");
    }
    state = {
      nomeCartao: '',
      numero: '',
      data:'',
      seguranca:'',
      creditos:''
    }
    handleNome = (text) => {
      this.setState({ nomeCartao: text })
    }
    handleNumero= (text) => {
      this.setState({ numero: text })
    }
    handleData= (text) => {
      this.setState({ data: text })
    }
    handleSeguranca= (text) => {
      this.setState({ seguranca: text })
    }
    handleCreditos= (text) => {
      this.setState({ creditos: text })
    }
    // _onPressLogin = () => {
    //   if (this.state.usuario === '' && this.state.senha === ''){
    //     this.props.navigation.navigate('StudentOptions');
    //   }else{
    //     alert('Email invalido ou senha invalida!');
    //   }
    // }
    constructor(props){
      super(props);
    }

    render(){
      return (

        <ScrollView style={styles.container}>
        <TextInput placeholder='Nome no Cartao' onChangeText = {this.handleNome}/>
        <TextInput placeholder='Numero do cartao' style={{marginBottom:20}} onChangeText = {this.handleNumero}/>
        <TextInput placeholder='Data de vencimento' style={{marginBottom:20}} onChangeText = {this.handleData}/>
        <TextInput placeholder='Codigo de seguraça' style={{marginBottom:20}} onChangeText = {this.handleSeguranca}/>
        <TextInput placeholder='Quantos creditos voce quer comprar?' style={{marginBottom:20}} onChangeText = {this.handleCreditos}/>

        <Row size={12}>
        <Col sm={4} md={4} lg={3}>
        <Button
        title="Comprar creditos"
        />
        </Col>
        <Col sm={4} md={4} lg={3}>
        <Button
        title="Salvar cartao"
        />
        </Col>
        </Row>


        </ScrollView>



      )
    }
  }




  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems:'center',
      marginBottom: 10,
      borderColor: '#d6d7da',
      backgroundColor: '#008080'
    },
    img:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonContainer: {
      margin: 10
    },
    segundaTela:{

      borderColor: '#d6d7da',
      backgroundColor: '#008080',
      flex:1,
      height:300
    },
    Teachers:{
      width: '100%',
      height:'100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderColor: '#d6d7da',
      backgroundColor: '#008080'
    },
    TeachersCard:{
      width: '48%',
      margin: '1%',
      aspectRatio: 1
    }

  });


  const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      StudentOptions: StudentOptionsScreen,
      Teachers : TeachersScreen,
      Professor: ProfessorScreen,
      Agenda: AgendaScreen,
      Profile: ProfileScreen,
      TeachersLiked: TeachersLikedScreen,
      Credit: CreditScreen
    },
    {
      initialRouteName: 'Home',
    }
  );

  export default class App extends React.Component {
    render() {
      return <RootStack />;
    }
  }
