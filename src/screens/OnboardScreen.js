import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../utils/ScreenName';

const OnboardScreen = () => {
  const navigation = useNavigation()
  return (
    <ScrollView>
      <LinearGradient colors={['#7F7FD5', '#E9E4F0']} style={{flex: 1}}>
        <View style={{padding: 12}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Feather name="bar-chart" size={24} color="black" />
            <Text style={{fontWeight: 600, fontSize: 18, color: 'black'}}>
              Employee-Management
            </Text>
            <Entypo name="lock" size={24} color="black" />
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              flex: 1,
            }}>
            <Pressable
                onPress={()=>navigation.navigate(SCREENS.EMPLOYEES_SCREEN)}
              style={{
                backgroundColor: '#D3CCE3',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 12,
                borderRadius: 6,
                flex: 1,
              }}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{marginTop: 7, fontWeight: '600', color: 'black'}}>
                Employee List
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#D3CCE3',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 12,
                borderRadius: 6,
                flex: 1,
              }}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{marginTop: 7, fontWeight: '600', color: 'black'}}>
                Mark Attendance
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              marginTop: 30,
              backgroundColor: 'white',
              padding: 10,
              paddingVertical: 20,
              borderRadius: 7,
            }}>
            <Pressable
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#BE93C5',
                padding: 7,
                borderRadius: 7,
              }}>
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 7,
                }}>
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 10,
                  fontWeight: '600',
                  flex: 1,
                }}>
                Attendance Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: 'white',
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 10,
              backgroundColor: 'white',
              padding: 10,
              paddingVertical: 20,
              borderRadius: 7,
            }}>
            <Pressable
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#BE93C5',
                padding: 7,
                borderRadius: 7,
              }}>
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 7,
                }}>
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 10,
                  fontWeight: '600',
                  flex: 1,
                }}>
                Sumamry Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: 'white',
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 10,
              backgroundColor: 'white',
              padding: 10,
              paddingVertical: 20,
              borderRadius: 7,
            }}>
            <Pressable
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#BE93C5',
                padding: 7,
                borderRadius: 7,
              }}>
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 7,
                }}>
                <Octicons name="report" size={24} color="black" />
              </View>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 10,
                  fontWeight: '600',
                  flex: 1,
                }}>
                All Generated Report
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: 'white',
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 10,
              backgroundColor: 'white',
              padding: 10,
              paddingVertical: 20,
              borderRadius: 7,
            }}>
            <Pressable
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#BE93C5',
                padding: 7,
                borderRadius: 7,
              }}>
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 7,
                }}>
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 10,
                  fontWeight: '600',
                  flex: 1,
                }}>
                Overtime Employee
              </Text>
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: 'white',
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>

          {/* bottom */}
          <View style={{marginTop:20,flexDirection:"row",alignItems:"center",gap:15}}> 
            <View
              style={{
                backgroundColor: '#f79d00',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                flex:1
                
              }}>
              <View
                style={{
                  height: 40,
                  width: 35,
                  borderRadius: 7,
                  padding: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                }}>
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{color: 'black',fontWeight:'600',marginTop:5}}>Attendance Criteria</Text>
            </View>
            <View
              style={{
                backgroundColor: '#ABCABA',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                flex:1

              }}>
              <View
                style={{
                  height: 40,
                  width: 35,
                  borderRadius: 7,
                  padding: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                }}>
               <FontAwesome name="bar-chart" size={24} color="black" />
              </View>
              <Text style={{color: 'black',fontWeight:'600',marginTop:5}}>Increased Workflow</Text>
            </View>
          </View>
          <View style={{marginTop:20,flexDirection:"row",alignItems:"center",gap:15}}> 
            <View
              style={{
                backgroundColor: '#D3CCEC',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                flex:1
                
              }}>
              <View
                style={{
                  height: 40,
                  width: 35,
                  borderRadius: 7,
                  padding: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                }}>
                <MaterialCommunityIcons
                  name="guy-fawkes-mask"
                  size={24}
                  color="black"
                />
              </View>
              <Text style={{color: 'black',fontWeight:'600',marginTop:5}}>Cost Savings</Text>
            </View>
            <View
              style={{
                backgroundColor: '#bdc3c7',
                borderRadius: 6,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                flex:1

              }}>
              <View
                style={{
                  height: 40,
                  width: 35,
                  borderRadius: 7,
                  padding: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                }}>
               <FontAwesome name="bar-chart" size={24} color="black" />
              </View>
              <Text style={{color: 'black',fontWeight:'600',marginTop:5}}>Employee Performance</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({});
