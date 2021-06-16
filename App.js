

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

import {
  H1,
  Button,
} from 'native-base'

import User from './User.js'
import axios from 'axios'
const App = () => {
  const [details, setDetails] = useState("")
  const [username, setusername] = useState("")
  const getData = async (username)=>{ 
    try{
     let url = `https://api.github.com/users/${username.toLowerCase()}` 
     const {data} = await axios.get(url)
     setDetails(data)
     setusername("")
    }catch{
      setDetails("Not Found")
      setusername("")
    }
  }
  return (
      <View 
      style={styles.container}
      >
        <H1 style={styles.heading}>GitHub API</H1>
        <View style={styles.innerContainer}>
        {details?(details == "Not Found"?(<Text style={styles.error}>User Not Found</Text>):<User details={details}/>):(<></>)}
          <TextInput 
          style={styles.input}
          onChangeText={ text => setusername(text) }
          placeholder="Enter your github username"
          value={username}
          />
          <Button 
          success 
          style={styles.button}
          onPress={()=>(getData(username))}
          >
            <Text style={{color:"#fff",
            fontWeight:'bold',
            }}>
              Submit
            </Text>
          </Button>
        </View>  
    </View>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0C1017",
    
  },
  error:{
    fontSize:30,
    color:"#fff",
    paddingBottom:200,
  },
  input:{
    borderColor:"#292E34",
    borderWidth:1,
    padding:10,
    marginTop:20,
    width:"70%",
    textAlign:'center'

  },
  innerContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  heading:{
    color:"#fff",
    textAlign:"center",
    padding:20,
    borderBottomWidth:1,
    borderBottomColor:"#292E34"
  },
  button:{
    padding:50,
    alignSelf:'center',
    borderRadius:10,
    marginTop:30
  }
});

export default App;
