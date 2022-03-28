import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingVertical: 38,
        backgroundColor: 'white',
      },
    text: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
    },
})