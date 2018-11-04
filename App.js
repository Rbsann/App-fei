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
      <Image style={{width:50,height:50, marginBottom:20}} source={require('./assets/imgs/fermat.png')} />
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
                }}/>/>
                </View>                  
                <View style={{marginBottom:5, width:200}}>
                  <Button title="Fisica" onPress={() => {
                  this.props.navigation.navigate('Teachers', {
                    itemId: 3
                  });
                }}/>/>
                </View>                  
                <View style={{marginBottom:5, width:200}}>
                  <Button title="Geografia" onPress={() => {
                  this.props.navigation.navigate('Teachers', {
                    itemId: 4,
                  });
                }}/>/>
                </View>                  
                <View style={{marginBottom:5, width:200}}>
                  <Button title="Historia" onPress={() => {
                  this.props.navigation.navigate('Teachers', {
                    itemId: 5,
                  });
                }}/>/>
                </View>                  
                <View style={{marginBottom:5, width:200}}>
                  <Button title="Matematica"  onPress={() => this.props.navigation.navigate("Agenda")}/>
                </View>                  
                <View style={{marginBottom:5 ,width:200}}>
                  <Button title="Portugues" onPress={() => {
                  this.props.navigation.navigate('Teachers', {
                    itemId: 6,
                  });
                }}/> />
                </View>                  
                <View style={{marginBottom:5, width:200}}>
                  <Button title="Quimica" onPress={() => {
                  this.props.navigation.navigate('Teachers', {
                    itemId: 7,
                  });
                }}/>/>
                </View>
                <View style={{marginBottom:5, width:200}}>
                  <Button title="Redacao" onPress={() => {
                  this.props.navigation.navigate('Teachers', {
                    itemId: 8,
                  });
                }}/>/>
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
      
       

      // <ScrollView style={styles.segundaTela}>
      //  <View style={{ width:300,height:300,justifyContent: 'center',
      // alignItems:'center'}}>
      //     <Text>Aluno</Text>
         
        
      //     <Text style={{width:180,height:30}} >  Qual materia gostaria de estudar hoje </Text>
      //     </View>
      //           <View style={{marginBottom:5, width:200,justifyContent: 'center',
      // alignItems:'center'}}>
      //             <Button title="Biologia" />
      //           </View>
      //           <View style={{marginBottom:5, width:200}}>
      //             <Button title="Filosofia"/>
      //           </View>                  
      //           <View style={{marginBottom:5, width:200}}>
      //             <Button title="Fisica" />
      //           </View>                  
      //           <View style={{marginBottom:5, width:200}}>
      //             <Button title="Geografia" />
      //           </View>                  
      //           <View style={{marginBottom:5, width:200}}>
      //             <Button title="Historia" />
      //           </View>                  
      //           <View style={{marginBottom:5, width:200}}>
      //             <Button title="Matematica"  onPress={() => this.props.navigation.navigate("Agenda")}/>
      //           </View>                  
      //           <View style={{marginBottom:5 ,width:200}}>
      //             <Button title="Portugues"  />
      //           </View>                  
      //           <View style={{marginBottom:5, width:200}}>
      //             <Button title="Quimica" />
      //           </View>
      //           <View style={{marginBottom:5, width:200}}>
      //             <Button title="Redacao"/>
      //           </View>
 
      //   </ScrollView>

              )
  }
  }

  class TeachersScreen extends React.Component {
    render(){
      const itemId = navigation.getParam('itemId', 'NO-ID');
      if(navigation.state.params.itemId==1){
      return (
         <ScrollView style={styles.container}>

          <Image style={{width:40,height:40}} source={require('./assets/imgs/tao.jpg')} />
          <Image style={{width:40,height:40}} source={require('./assets/imgs/fermat.png')}/>
          <Image style={{width:40,height:40}} source={require('./assets/imgs/rama.jpg')} />
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Professor")} > 
            
            <Image style={{width:40,height:40}} source={require('./assets/imgs/galois.jpg')}/>
            
          </TouchableWithoutFeedback>

         </ScrollView>
      )
    }
    else {
      <View>
      alert('Aqui');
      </View>
    }
    }
  }


  class ProfessorScreen extends React.Component {
    render(){
      return (
        <ScrollView style={styles.container}>

           <Image style={{width:100,height:100}} source={require('./assets/imgs/galois.jpg')}/>
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
  render(){
    return (

<Button title="Marcar aula"/>



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
