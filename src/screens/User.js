import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import {BASE_URL} from '../utils/IpAddress';

const User = ({route}) => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [attendancestatus, setAttendanceStatus] = useState('present');
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

  const markUri = `${BASE_URL}/markAttendance`;
  const submitAttendance = async () => {
    console.log("marking attendance")
    try {
      const attendanceData = {
        employeeId: route.params.data?.id,
        employeeName: route.params.data?.name,
        date: currentDate.format('MMMM D,YYYY'),
        status: attendancestatus,
      };
      const response = await axios.post(markUri, attendanceData);
      if (response.status === 200) {
        Alert.alert('Marked Successfully', 'Successfully marked Attendance');
      }
    } catch (error) {
      console.log('Error submitting Attendance', error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          gap:20,
          marginVertical: 20,
        }}>
        <AntDesign
          onPress={gotTOPrevDate}
          name="left"
          size={24}
          color="black"
        />
        <Text style={{color: 'black'}}>{formateDate(currentDate)}</Text>
        <AntDesign onPress={goToNextDay} name="right" size={24} color="black" />
      </View>

      <ScrollView>
      <Pressable
        style={{
          marginVertical: 10,
          gap: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
        }}>
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
            {route.params?.data?.name.charAt(0)}
          </Text>
        </View>

        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            {route.params?.data?.name}
          </Text>
          <Text style={{color: 'gray', marginTop: 5}}>
            {route.params?.data?.designation}({route.params?.data?.id})
          </Text>
        </View>
      </Pressable>

      <View style={{marginHorizontal: 20}}>
        <Text style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
          Basic Pay : {route.params.data?.salary}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',

            letterSpacing: 3,
            marginTop: 7,
            color: 'black',
          }}>
          ATTENDANCE
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 16,
          marginVertical: 10,
          marginHorizontal:10
        }}>
        <Pressable
          onPress={() => setAttendanceStatus('present')}
          style={{
            backgroundColor: '#C4E0E5',
            padding: 10,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            flex: 1,
          }}>
          {attendancestatus === 'present' ? (
            <FontAwesome5 name="dot-circle" size={24} color="black" />
          ) : (
            <Entypo name="circle" size={24} color="black" />
          )}
          <Text style={{color: 'black'}}>Present</Text>
        </Pressable>

        <Pressable
          onPress={() => setAttendanceStatus('absent')}
          style={{
            backgroundColor: '#C4E0E5',
            padding: 10,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            flex: 1,
          }}>
          {attendancestatus === 'absent' ? (
            <FontAwesome5 name="dot-circle" size={24} color="black" />
          ) : (
            <Entypo name="circle" size={24} color="black" />
          )}
          <Text style={{color: 'black'}}>Absent</Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 16,
          marginVertical: 10,
          marginHorizontal:10
        }}>
        <Pressable
          onPress={() => setAttendanceStatus('halfday')}
          style={{
            backgroundColor: '#C4E0E5',
            padding: 10,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            flex: 1,
          }}>
          {attendancestatus === 'halfday' ? (
            <FontAwesome5 name="dot-circle" size={24} color="black" />
          ) : (
            <Entypo name="circle" size={24} color="black" />
          )}
          <Text style={{color: 'black'}}>Half Day</Text>
        </Pressable>

        <Pressable
          onPress={() => setAttendanceStatus('holiday')}
          style={{
            backgroundColor: '#C4E0E5',
            padding: 10,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            flex: 1,
          }}>
          {attendancestatus === 'holiday' ? (
            <FontAwesome5 name="dot-circle" size={24} color="black" />
          ) : (
            <Entypo name="circle" size={24} color="black" />
          )}
          <Text style={{color: 'black'}}>Holiday</Text>
        </Pressable>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10,marginHorizontal:10}}>
        <TextInput
          style={{
            borderRadius: 6,
            marginTop: 10,
            borderWidth: 2,
            borderColor: '#E0E0E0',
            padding: 10,
            flex: 1,
          }}
          placeholder="Advance/Loan"
          placeholderTextColor={'black'}
        />
        <TextInput
          style={{
            borderRadius: 6,
            marginTop: 10,
            borderWidth: 2,
            borderColor: '#E0E0E0',
            padding: 10,
            flex: 1,
          }}
          placeholder="Extra Bonus"
          placeholderTextColor={'black'}
        />
      </View>
      <Pressable
        onPress={submitAttendance}
        style={{
          padding: 10,
          backgroundColor: '#00c6ff',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 30,
          marginBottom:10,
          borderRadius: 6,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
          {' '}
          Submit Attendance
        </Text>
      </Pressable>
      </ScrollView>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
