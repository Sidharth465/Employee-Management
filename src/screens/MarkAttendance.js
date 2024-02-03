import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import axios from 'axios';
import {BASE_URL} from '../utils/IpAddress';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SCREENS} from '../utils/ScreenName';
import {useIsFocused} from '@react-navigation/native';
import { ASSETS } from '../utils/ConstantAsset';

const MarkAttendance = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(moment());
  const focused = useIsFocused();
  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, 'days');
    setCurrentDate(nextDate);
  };
  const gotTOPrevDate = () => {
    const prevDate = moment(currentDate).subtract(1, 'days');
    setCurrentDate(prevDate);
  };

  const formateDate = date => {
    return date.format('MMMM D, YYYY');
  };

  const [employees, setEmployees] = useState([]);

  // fetch employee data from APi
  const uri = `${BASE_URL}/employees`;
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
      } finally {
        setIsLoading(false);
      }
    };
    fetchEmployeeData();
  }, []);

  const [attendance, setAttendance] = useState([]);
  const A_uri = `${BASE_URL}/getAttendance`;
  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get(A_uri, {
        params: {
          date: currentDate.format('MMMM D,YYYY'),
        },
      });
      setAttendance(response.data);
      console.log('attendance fetched records', response.data);
    } catch (error) {
      console.log('Error fetching attendance data');
    }
  };
  useEffect(() => {
    fetchAttendanceData();
  }, [currentDate, focused]);

  const employeeWithAttendance = employees.map(employee => {
    const attendanceRecord = attendance.find(
      record => record.employeeId === employee.employeeId,
    );
    const colorStatus = attendanceRecord ? attendanceRecord.status : '';
    const statusColor = getStatusColor(colorStatus);
    console.log('attendance record', attendanceRecord);
    return {
      ...employee,
      //   status: attendanceRecord ? attendanceRecord.status : '',
      status: colorStatus, // real status present,absent or holiday
      statusColor: statusColor, // color which will show on screen
    };
  });

  function getStatusColor(status) {
    if (status === 'present') {
      return 'green';
    } else if (status === 'absent') {
      return 'red';
    } else {
      return '#ff8c00'; // yellow color for on leave or other cases
    }
  }

  //   console.log("Employee with attendance",employeeWithAttendance);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={30} color="#003366" />
        </View>
      ) : (
        <>
          <Pressable>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                gap: 20,
                marginTop: 10,
                backgroundColor:"#ccffcc",
                padding:10,
                borderRadius:8
              }}>
              <AntDesign
                onPress={gotTOPrevDate}
                name="left"
                size={24}
                color="black"
              />
              <Text style={{color: 'black'}}>{formateDate(currentDate)}</Text>
              <AntDesign
                onPress={goToNextDay}
                name="right"
                size={24}
                color="black"
              />
            </View>

            <ScrollView style={{marginHorizontal: 10,marginTop:ASSETS.height*0.05 }}>
              {employeeWithAttendance.map((item, index) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate(SCREENS.USER_SCREEN, {
                      data: {
                        name: item.employeeName,
                        id: item?.employeeId,
                        salary: item?.salary,
                        designation: item?.designation,
                      },
                    })
                  }
                  style={{flexDirection: 'row', alignItems: 'center', gap: 10,marginBottom:10,borderBottomWidth:0.5}}
                  key={index}>
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
                    <Text
                      style={{color: '#fff', fontSize: 30, fontWeight: 'bold'}}>
                      {item?.employeeName.charAt(0)}
                    </Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      {item?.employeeName}
                    </Text>
                    <Text style={{color: 'gray', marginTop: 5}}>
                      {item?.designation}({item?.employeeId})
                    </Text>
                  </View>
                  {item?.status && (
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 8,
                        padding: 10,
                        backgroundColor: item?.statusColor,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#fff',
                          fontWeight: '500',
                        }}>
                        {item.status.charAt(0).toUpperCase()}
                      </Text>
                    </View>
                  )}
                </Pressable>
              ))}
            </ScrollView>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default MarkAttendance;

const styles = StyleSheet.create({});
