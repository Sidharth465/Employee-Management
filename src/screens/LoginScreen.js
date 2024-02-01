import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../utils/ScreenName';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#003366","#b3d9ff",]} style={{flex:1,justifyContent:"center",alignItems:"center"}}>

     
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 5,
        }}>
        <FontAwesome name="user-circle-o" size={width * 0.09} color="orange" />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderColor: 'orange',
            width: width * 0.8,
            height: height * 0.05,
            fontSize: 20,
            color: '#000000',
            borderRadius:7,
            paddingLeft:10
          }}
          placeholder="Email/Username"
          placeholderTextColor={'#fff'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: width * 0.09,
          gap: 5,
        }}>
        <Icon name="password" size={width * 0.09} color="orange" />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'orange',
            width: width * 0.8,
            height: height * 0.05,
            fontSize: 20,
            color: 'black',
            borderRadius:7,
            paddingLeft:10
          }}
          placeholder="Password"
          placeholderTextColor={'#fff'}
        />
      </View>

      <View
        style={{
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
        }}>
        <TouchableOpacity
        onPress={()=>navigation.replace(SCREENS.ONBOARDING_SCREEN)}
          style={{
            width: width * 0.4,
            height: height * 0.06,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            backgroundColor: 'orange',
            borderRadius: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 900}}> Login</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
