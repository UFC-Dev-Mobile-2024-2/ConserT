import React from 'react'
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FF8C00" />
      <View style={styles.topBar} />
      <View style={styles.content} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  topBar: {
    backgroundColor: '#FF8C00',
    height: 56,
    width: '100%'
  },
  content: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default App
