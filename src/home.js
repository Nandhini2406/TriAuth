import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'black',
    },
});

export default Home