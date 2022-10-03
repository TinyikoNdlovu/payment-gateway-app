import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, Button, } from "react-native";
import  React, {useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { authentication } from "../components/firebaseConfig";

// import firestore from '@react-native-firebase/firestore';

const Home = ({signOut}) => {

    const navigation = useNavigation()
    const [name, setName] = useState('')

    // useEffect(() => {
    //   firebase.firestore().collection('recordings')
    //   .doc(firebase.authentication().currentUser.uid).get()
    //   .then((snapshot) =>{
    //     if(snapshot.exists){
    //       setName(snapshot.data())
    //     }
    //     else {
    //       console.log('User does not exist')
    //     }
    //   })
    // })

   return (
    <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image}>
      <SafeAreaView>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Hello, {name.firstName}
        </Text>
        <TouchableOpacity onPress={() => {authentication.signOut(), navigation.navigate('Login')}}
        style={styles.button}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Sign out</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
    
  );
}

export default Home

const styles = StyleSheet.create({
    image: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        marginTop: 50,
        height: 40,
        width: 120,
        backgroundColor: '#026efd',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        margin: 16,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fill: {
      flex: 1,
      margin: 16
    },
  });
  