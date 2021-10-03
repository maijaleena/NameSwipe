import React from "react";
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const CategoryGridTile = props => {
  return (
    <TouchableOpacity style={styles.grid}
    onPress= {props.onSelect}
      >
    <View style={{...styles.container, ...{backgroundColor: props.color}}} >
      <Text style={styles.title}>{props.title}</Text>
    </View>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  grid:{
    flex:1,
    margin: 15,
    height: 150
  },
  container:{
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .26,
    shadowOffset: {width:0, height:2},
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title:{
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }

})

export default CategoryGridTile;
