// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import OnboardScreen from '../screens/OnboardScreen'
import {SCREENS} from '../utils/ScreenName'
import Employees from '../screens/Employees';
import AddDetails from '../screens/AddDetails';
import MarkAttendance from '../screens/MarkAttendance';
import User from '../screens/User';
import Summary from '../screens/Summary';


const Stack = createNativeStackNavigator();

const StackNavigation = ()=> {
  return (
    <NavigationContainer >
      <Stack.Navigator detachInactiveScreens={true} initialRouteName={SCREENS.LOGIN_SCREEN}  >
        <Stack.Screen name ={SCREENS.LOGIN_SCREEN} component={LoginScreen}   options={{headerShown:false}} />
        <Stack.Screen name={SCREENS.REGISTER_SCREEN} component={RegisterScreen} />
        <Stack.Screen name={SCREENS.ONBOARDING_SCREEN} component={OnboardScreen} options={{headerShown:false}}/>
        <Stack.Screen name={SCREENS.EMPLOYEES_SCREEN} component={Employees} options={{headerShown:false,headerTitleAlign:"center",}}/>
        <Stack.Screen name={SCREENS.ADD_DETAIL_SCREEN} component={AddDetails} options={{headerShown:true,headerTitleAlign:"center",title:"Add Details"}}/>
        <Stack.Screen name={SCREENS.MARK_ATTENDANCE_SCREEN} component={MarkAttendance} options={{headerShown:true,headerTitleAlign:"center",title:"Mark Attendance"}}/>
        <Stack.Screen name={SCREENS.USER_SCREEN} component={User} options={{headerShown:false}}/>
        <Stack.Screen name={SCREENS.SUMMARY_SCREEN} component={Summary} options={{headerShown:true,headerTitleAlign:"center"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;