import React from 'react';
import {
TextInput,
StyleSheet,
TouchableOpacity,
Text,
View,
Image,
KeyboardAvoidingView,
Alert
} from 'react-native';
import db from 'firebase'
//import TransactionScreen from './screens/BookTransactionScreen';
//import SearchScreen from './screens/SearchScreen';

export default class LoginScreen extends React.Component {
    
  constructor () {
      super();
      this.state = {
      EmailId : '',
      Password : ''
   }
  }

    login = async (EmailId, Password) =>{
    if(EmailId && Password){
        try{
            const response = await firebase.auth().signInWithEmailAndPassword(
                EmailId, Password)
    if(response) {
        this.props.navigation.navigate('Transaction')
    }
        }
        catch (error) {
            switch (error.code) {
     case 'auth/user-not-found' : Alert.alert ('User not Found !')
     break
    case 'auth/invalid-email' : Alert.alert ("EmailId and Password don't match !")
    break

            }
        }
    }
    else {
        Alert.alert("Please enter your EmailId and Password ")
    }
    }

    render(){
    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
    <Image
     source={require("../Images/booklogo.jpg")}
      style={styles.BookImage}/>

    <Text style = {styles.LoginBox}>Login Screen</Text>
    <View>
    <TextInput
              style={styles.emailBox}
              placeholder="EmailId"
              keyboardType = 'email-address'
              onChangeText={(text)=>{
                this.setState({
                  EmailId: text
                })
              }}
              />

<TextInput
              style={styles.passwordBox}
              placeholder="Password"
              secureTextEntry = {true}
              onChangeText={(text)=>{
                this.setState({
                 Password: text
                })
              }}
              /> 
              </View>

              <TouchableOpacity
              style={styles.submitButton}
              onPress={()=>{
                this.login(this.state.EmailId, this.state.Password)
              }}
              >
              <Text style={styles.submitButtonText}>Login</Text>
            </TouchableOpacity>         
        </View>
        </KeyboardAvoidingView>
    )
 }
}

const styles = StyleSheet.create({

    LoginBox : {
        marginTop : 40,
        marginLeft : 300
    },
    BookImage : {
        marginTop : 110,
        marginLeft : 280,
        marginRight : 200,
         width : 150,
         height : 150
    },
    emailBox : {
        width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20,
      marginTop : 30,
      marginLeft : 265
    },
    passwordBox : {
        width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20,
      marginTop : 30,
      marginLeft : 265
    },
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      submitButton : {
        backgroundColor: '#2196F3',
        padding: 10,
        marginTop : 30,
        marginLeft: 320,
        width : 80,
        justifyContent : 'center',
        alignItems : 'center'
      },
      submitButtonText : {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
      }
}) 
