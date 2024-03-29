import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import axios from 'axios';
import {BASE_URL} from '../utils/IpAddress';
import {useIsFocused} from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {DataTable} from 'react-native-paper';

const Summary = () => {
  const focused = useIsFocused();
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentDate, setCurrentDate] = useState(moment());

  const goToNextMonth = () => {
    const nextMonth = moment(currentDate).add(1, 'months');
    setCurrentDate(nextMonth);
  };
  const goToPrevMonth = () => {
    const prevMonth = moment(currentDate).subtract(1, 'months');
    setCurrentDate(prevMonth);
  };

  const formatDate = date => {
    return date.format('MMMM, YYYY');
  };
  const uri = `${BASE_URL}/attendanceReport`;
  const fetchAttendanceReport = async () => {
    try {
      const response = await axios.get(uri, {
        params: {
          month: 2,
          year: 2024,
        },
      });
      setAttendanceData(response.data);
      console.log('response', response.data);
    } catch (error) {
      console.log('Error Fetching Attendaance', error);
    }
  };

  useEffect(() => {
    fetchAttendanceReport();
  }, []);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          gap: 20,
          marginBottom: 20,
          backgroundColor:"#ccffcc",
          flex:1,
          justifyContent:"center",
          padding:10,
          borderRadius:8
        }}>
        <AntDesign
          onPress={goToPrevMonth}
          name="left"
          size={30}
          color="black"
        />
        <Text style={{color: 'black'}}>{formatDate(currentDate)}</Text>
        <AntDesign
          onPress={goToNextMonth}
          name="right"
          size={30}
          color="black"
        />
      </View>

      <View style={{marginHorizontal: 12}}>
        {attendanceData?.map((item, index) => (
          <View key={index} style={{marginVertical: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 10,
                  padding: 10,
                  backgroundColor: '#4b6cb7',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 5,
                }}>
                <Text style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
                  {item?.name?.charAt(0)}
                </Text>
              </View>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  {item?.name}
                </Text>
                <Text style={{color: 'gray', marginTop: 5}}>
                  {item?.designation}({item?.employeeId})
                </Text>
              </View>
            </View>

            <View style={{marginT:15,margin:5,padding:5,backgroundColor:"#A1FFCE",borderRadius:5}}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>P</DataTable.Title>
                  <DataTable.Title>A</DataTable.Title>
                  <DataTable.Title>HD</DataTable.Title>
                  <DataTable.Title>H</DataTable.Title>
                  <DataTable.Title>NW</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                 <DataTable.Cell>{item?.present}</DataTable.Cell>
                 <DataTable.Cell>{item?.absent}</DataTable.Cell>
                 <DataTable.Cell>{item?.halfday}</DataTable.Cell>
                 <DataTable.Cell>1</DataTable.Cell>
                 <DataTable.Cell>8</DataTable.Cell>
                 
                </DataTable.Row>
              </DataTable>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Summary;

const styles = StyleSheet.create({});
