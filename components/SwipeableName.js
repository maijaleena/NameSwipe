import React, { Component, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import axios from 'axios';


const SwipeableName = ({name}) => {


  const [info, setInfo] = useState([]);
  // const [currentIndex, setCurrentIndex] = useState(0);

  async function fetchInfo(){
    try{
      const {data} = await axios.get( `https://www.behindthename.com/api/lookup.json?name=${name}&key=so677108746`)
      setInfo(data);
      console.log("DATA", data);
    }catch(error){
      console.log(error);
      Alert.alert('Error getting names')
    }
  }

  useEffect(() => {
    fetchInfo()
  }, [])



  return (
  <View >
    <Text style={styles.name} > {name} </Text>
    {/* <Text style={styles.info}> Language: {data[0].usages[0].usage_full}</Text> */}
    {/* <Text style={styles.info}> Historical Gender Usage: {data[0].usages[0].usage_gender}</Text> */}
    <Text style={styles.info}> Language Library: Finnish </Text>
  </View>
  )
};


export default SwipeableName ;

const styles = StyleSheet.create({
 name:{
   fontSize:50,
   textAlign: 'center',
  borderRadius: 20,
 },
 info:{
   fontSize:20,
   textAlign: 'center'
 }
});
