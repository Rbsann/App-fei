import React , {Component} from 'react';
import { StyleSheet, View ,AppRegistry, TextInput,ScrollView,Button,Image,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Text } from 'native-base';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

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
                <TextInput placeholder='Username'  />
                <TextInput placeholder='Password'  />
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

                <Button title="Filosofia"/>
                <Button title="Portugues"/>
                <Button title="Fisica"/>
                <Button title="Quimica"/>
                <Button title="Biologia"/>
                <Button title="Historia"/>
                <Button title="Geografia"/>
                <Button title="Redacao"/>
                <Button title="Matematica" onPress={() => this.props.navigation.navigate("Teachers")}/>


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
    Professor: ProfessorScreen
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
