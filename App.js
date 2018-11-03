  import React , {Component} from 'react';
  import { StyleSheet, View ,AppRegistry, TextInput,ScrollView,Button,Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
  import { Container, Header, Content, Footer, FooterTab, Text } from 'native-base';
  import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
  import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

   class HomeScreen extends React.Component {

    callFun = () =>
    {
      alert("Image Clicked!!!");
    }

  constructor(props){
      super(props);
  }

    render() {
      return (

            <ScrollView style={styles.container}>
                  <TextInput placeholder='Username'  style="width:100% !important"/>
                  <TextInput placeholder='Password' style="width:100%" />
                  <Button
                      title="Login"
                      onPress={() => 
                      this.props.navigation.navigate('StudentOptions')
                         }
                    />
                

            </ScrollView>
    
      )
  }
  }
  class StudentOptionsScreen extends React.Component {
    render(){
      return (
        <ScrollView style={styles.container}>

                  <Button title="Biologia"/>
                  <Button title="Filosofia"/>
                  <Button title="Fisica"/>
                  <Button title="Geografia"/>
                  <Button title="Historia"/>
                  <Button title="Matematica" onPress={() => this.props.navigation.navigate("Agenda")}/>
                  <Button title="Portugues"/>
                  <Button title="Quimica"/>
                  <Button title="Redacao"/>


        </ScrollView>
              )
  }
  }

  class TeachersScreen extends React.Component {
    render(){
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




  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems:'center', 
      borderColor: '#d6d7da',
      backgroundColor: '#008080'
          },
      img:{
        height:'25%'
      }

      });
    

  const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      StudentOptions: StudentOptionsScreen,
      Teachers : TeachersScreen,
      Professor: ProfessorScreen,
      Agenda: AgendaScreen
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
