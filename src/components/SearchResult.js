import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchResult = () => {
  return (
    <View>
      <Text style={styles.Textlabel}>SearchResult</Text>
    </View>
  )
}

export default SearchResult

const styles = StyleSheet.create({
    Textlabel: {color: 'black', fontWeight: '600', fontSize: 17}
})