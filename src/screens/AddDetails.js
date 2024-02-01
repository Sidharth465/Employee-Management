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
import axios from 'axios';
import {BASE_URL} from '../utils/IpAddress';

const AddDetails = () => {
  const [name, setName] = React.useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [dob, setDob] = React.useState('');
  const [mobileNo, setMobileNo] = React.useState('');
  const [joiningDate, setJoiningDate] = React.useState('');
  const [salary, setSalary] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [designation, setDesignation] = React.useState('');

  //handle employee register
  const handleRegisterEmployee = async () => {
    const employeeData = {
      employeeId,
      name,
      dob,
      mobileNo,
      joiningDate,
      salary,
      address,
      designation,
    };
    console.log("Employee data",employeeData)
   
    axios
      .post("http://192.168.1.8:5000/addEmployee",employeeData)
      .then((response) => {console.log("axios response",response.data)
        Alert.alert(
          'Registration Successful',
          'You have been registered successfully',
        )
          setAddress('');
        setDesignation('');
        setName('');
        setMobileNo('');
        setEmployeeId('');
        setDob('');
        setJoiningDate('');
        setSalary('');
      })
      .catch((error) => {
        console.log(error)
        Alert.alert(
          'Registration failed ',
          'An error occured during registration',
        );
        
      });
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{padding: 10}}>
        <Text style={{color: 'black', fontWeight: '600', fontSize: 17}}>
          Add a New Employee
        </Text>
        <TextInput
          style={styles.TextInput}
          placeholder="India"
          placeholderTextColor="black"
        />
        <View style={{marginVertical: 10}}>
          <Text style={styles.Textlabel}>Full Name (first and last name) </Text>
          <TextInput
            value={name}
            onChangeText={text => setName(text)}
            style={styles.TextInput}
            placeholder="Enter your name "
            placeholderTextColor="black"
          />
        </View>
        <View>
          <Text style={styles.Textlabel}>Employee ID</Text>
          <TextInput
            value={employeeId}
            onChangeText={text => setEmployeeId(text)}
            style={styles.TextInput}
            placeholder="Employee Id"
            placeholderTextColor="black"
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.Textlabel}>Designation</Text>
          <TextInput
            value={designation}
            onChangeText={text => setDesignation(text)}
            style={styles.TextInput}
            placeholder="Designation "
            placeholderTextColor="black"
          />
        </View>
        <View>
          <Text style={styles.Textlabel}>Mobile No</Text>
          <TextInput
            value={mobileNo}
            onChangeText={text => setMobileNo(text)}
            style={styles.TextInput}
            placeholder="Mobile No "
            placeholderTextColor="black"
          />
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.Textlabel}>Date Of Birth</Text>
          <TextInput
            value={dob}
            onChangeText={text => setDob(text)}
            style={styles.TextInput}
            placeholder="DD/MM/YYYY"
            placeholderTextColor="black"
          />
        </View>
        <View>
          <Text style={styles.Textlabel}>Joining Date</Text>
          <TextInput
            value={joiningDate}
            onChangeText={text => setJoiningDate(text)}
            style={styles.TextInput}
            placeholder="DD/MM/YYYY"
            placeholderTextColor="black"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={{color: 'black'}}>Active Employee</Text>
          <Text style={{color: 'black'}}>True</Text>
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.Textlabel}>Salary</Text>
          <TextInput
            value={salary}
            onChangeText={text => setSalary(text)}
            style={styles.TextInput}
            placeholder="Enter Salary"
            placeholderTextColor="black"
          />
        </View>
        <View>
          <Text style={styles.Textlabel}>Address</Text>
          <TextInput
            value={address}
            onChangeText={text => setAddress(text)}
            style={styles.TextInput}
            placeholder="Address"
            placeholderTextColor="black"
          />
        </View>

        <View style={{margin: 10}}>
          <Pressable
            onPress={handleRegisterEmployee}
            style={{
              backgroundColor: '#263b30',
              padding: 10,
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
              Add Employee
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddDetails;

const styles = StyleSheet.create({
  Textlabel: {color: 'black', fontWeight: '600', fontSize: 17},
  TextInput: {
    padding: 10,
    borderColor: '#D0D0D0',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    color:"#000"
  },
});
