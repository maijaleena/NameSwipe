import React from 'react';
import {StyleSheet} from 'react-native';
import  Swipeable  from 'react-native-gesture-handler/Swipeable'
import SwipeableName from './SwipeableName';
import {RectButton} from 'react-native-gesture-handler'

const Swipes = ({names, currentIndex}) =>{

  const renderLeftActions = () =>{
    return(
    <RectButton style={styles.container}>
      <SwipeableName name={names[currentIndex + 1]}> </SwipeableName>
    </RectButton>
    )
  }

  const renderRightActions = () =>{
    return (
    <RectButton style={styles.container}>
      <SwipeableName name={names[currentIndex + 1]}> </SwipeableName>
    </RectButton>
    )
  }

  return (
<Swipeable
  friction={2}
  leftThreshold={40}
  rightThreshold={40}
  renderLeftActions={renderLeftActions}
  renderRightActions={renderRightActions}
>
    <SwipeableName name={names[currentIndex]} />
</Swipeable>
  )

}

export default Swipes ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

