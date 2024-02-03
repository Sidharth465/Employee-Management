import {ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios'; // Corrected import
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SCREENS} from '../utils/ScreenName';
import SearchResult from '../components/SearchResult';
import {BASE_URL} from '../utils/IpAddress';

const Employees = ({navigation}) => {
  const focused = useIsFocused();
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setLoading] = useState(true);
  const uri = `${BASE_URL}/employees`;
  // Get employees on component mount
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(uri);
        // console.log(response.data)

        if (response.status === 200) {
          setEmployees(response.data);
          console.log(employees);
        } else {
          console.log('Unable to get data');
        }
      } catch (error) {
        console.log('Error fetching employee data', error);
      }finally{
        setLoading(false);
      }
    };
    fetchEmployeeData();
  },[]);


  
  // console.log(employees)

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {isLoading ? (
       <View style={{flex:1,justifyContent:"center",alignItems:"center"}}> 
         <ActivityIndicator size={30} color="#003366" />
       </View>
      ):( <><View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#ffff',
          marginHorizontal: 10,
          marginVertical: 2,
          borderBottomWidth: 5,
          paddingBottom: 5,
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Pressable
          style={{
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: 'white',
            borderRadius: 7,
            height: 40,
            flex: 1,
          }}>
          <AntDesign name="search1" size={20} color="black" />
          <TextInput
            value={input}
            onChangeText={text => setInput(text)}
            style={{flex: 1, color: 'black', borderLeftWidth: 1, fontSize: 17,padding:5}}
            placeholder="Search"
            placeholderTextColor={'grey'}
          />
        </Pressable>
        {employees.length > 0 && (
          <View>
            <Pressable
              onPress={() => navigation.navigate(SCREENS.ADD_DETAIL_SCREEN)}>
              <AntDesign name="pluscircle" size={30} color="#0072b1" />
            </Pressable>
          </View>
        )}
      </View>
      {employees.length > 0 ? (
        <SearchResult data={employees} input={input} setInput={setInput} />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.Textlabel}>No Data </Text>
          <Text style={styles.Textlabel}>
            Press On Plus button to add your Employee data{' '}
          </Text>
          <Pressable
            onPress={() => navigation.navigate(SCREENS.ADD_DETAIL_SCREEN)}>
            <AntDesign
              style={{marginTop: 30}}
              name="pluscircle"
              size={50}
              color="#3495eb"
            />
          </Pressable>
        </View>
      )}</>)}
     
    </View>
  );
};

export default Employees;

const styles = StyleSheet.create({
  Textlabel: {color: 'black', fontWeight: '600', fontSize: 17},
});
