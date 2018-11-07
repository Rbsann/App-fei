import React , {Component} from 'react';
import { StyleSheet, View ,ListView,AppRegistry, TextInput,ScrollView,Button,Image,TouchableOpacity,TouchableWithoutFeedback ,Alert} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Text } from 'native-base';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { LinearGradient } from 'expo';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro','Fevereiro','MArço','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
  dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sab.']
};

LocaleConfig.defaultLocale = 'pt';



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

      <ScrollView endFillColor='transparent' >
      <LinearGradient colors={['#9d50bb','#6e48aa']}  style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
      <Image style={{width:200,height:200,marginBottom:100}} source={require('./assets/imgs/sum.png')} />
      <TextInput style={{width:200}} placeholder='Usuario' onChangeText = {this.handleUsuario}/>
      <TextInput placeholder='Senha' style={{marginBottom:30, width:200}} onChangeText = {this.handleSenha}/>
      <Button
      title="Login"
      onPress={this._onPressLogin}
      />

      </LinearGradient>
      </ScrollView>

    )
  }
}

class StudentOptionsScreen extends React.Component {
  render(){
    return (

      <View contentContainerStyle={styles.segundaTela}>
      <LinearGradient colors={['#9d50bb','#6e48aa']}  style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
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
      <ScrollView contentContainerStyle={styles.container}>

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
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Schedule")} >

      <Image style={{width:40,height:40,marginLeft:40}} source={require('./assets/imgs/icon.png')}/>

      </TouchableWithoutFeedback>
      </Col>
      <Col sm={4} md={4} lg={3}>
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("TeachersLiked")} >

      <Image style={{width:40,height:40,marginLeft:40}} source={require('./assets/imgs/teacher.png')}/>

      </TouchableWithoutFeedback>
      </Col>
      <Col sm={4} md={4} lg={3}>
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Credit")} >

      <Image style={{width:40,height:40,marginLeft:40}} source={require('./assets/imgs/wallet.jpg')}/>

      </TouchableWithoutFeedback>
      </Col>
      </Row>
      </LinearGradient>
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
        <View contentContainerStyle={styles.Teachers}>
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
        <View contentContainerStyle={styles.Teachers}>
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
        <View contentContainerStyle={styles.Teachers}>
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
        <View contentContainerStyle={styles.Teachers}>
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
        <View contentContainerStyle={styles.Teachers}>
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
        <View contentContainerStyle={styles.Teachers}>
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
        <View contentContainerStyle={styles.Teachers}>
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
        <View contentContainerStyle={styles.Teachers}>
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
        <View contentContainerStyle={styles.Teachers}>
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
      <ScrollView contentContainerStyle={styles.container}>

      <Image style={{width:100,height:100}} source={require('./assets/imgs/Matematica/galois.jpg')}/>
      <Button title="Dar like" onPress={() => 
        this.props.navigation.navigate('TeachersLiked')}/>
      <Button title="Marcar aula" onPress={() => 
        this.props.navigation.navigate('Agenda')}/>

      </ScrollView>


    )
  }
}

class AgendaScreen extends React.Component{


  render() {
    return (
      <Calendar
  // Initially visible month. Default = Date()
  current={'2018-11-10'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2015-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2021-05-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
  hideArrows={true}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  renderArrow={(direction) => (<Arrow />)}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={true}
  // Show week numbers to the left. Default = false
  showWeekNumbers={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={substractMonth => substractMonth()}
  // Handler which gets executed when press arrow icon left. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
/>
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
      borderColor: '#d6d7da'
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
      Schedule: AgendaScreen,
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
