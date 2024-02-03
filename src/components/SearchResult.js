import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SearchResult = ({data, input, setInput}) => {
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <View style={{padding: 10}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          if (item?.employeeName.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View style={{marginVertical: 10, gap: 10, flexDirection: 'row'}}>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor:getRandomColor(),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color:"#fff",fontSize:30,fontWeight:"bold"}}>{item?.employeeName.charAt(0)}</Text>
                </View>
                <View>
                  <Text
                    style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                    {item?.employeeName}
                  </Text>
                  <Text style={{color: 'gray', marginTop:5}}>
                    {item?.designation}({item?.employeeId})
                  </Text>
                </View>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  Textlabel: {color: 'black', fontWeight: '600', fontSize: 17},
});
