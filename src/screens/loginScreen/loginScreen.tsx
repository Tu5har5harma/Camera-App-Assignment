import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import {CustomButton} from '../../components/CustomButton';
import AppStyles from '../../config/styles';

const LoginScreen = ({navigation}: any) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const alertBox = () =>
    Alert.alert('Required', 'Please fill the name & email to Sign-up!', [
      {
        text: 'Ok',
        style: 'cancel',
      },
    ]);

  const onSignup = () => {
    name && email
      ? navigation.navigate('HomeScreen', {name, email})
      : alertBox();
  };

  const onChangeName = value => {
    setName(value);
  };

  const onChangeEmail = value => {
    setEmail(value);
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.textBox}>
        <Text style={styles.text}>Sign Up</Text>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          onChangeText={val => onChangeName(val)}
          value={name && name}
          placeholder="Enter Your Name"
        />
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          onChangeText={val => onChangeEmail(val)}
          value={email && email}
          placeholder="Enter Your Email"
        />
      </View>
      <CustomButton label="Sign-Up" onClick={onSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
    height: '100%',
    justifyContent: 'center',
  },
  tabSection: {
    marginTop: 40,
    backgroundColor: '#fff',
  },
  input: {
    width: '93%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: AppStyles.color.COLOR_PRIMARY,
  },
  inputBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: AppStyles.color.COLOR_BLACK,
  },
  textBox: {
    alignItems: 'center',
    paddingBottom: 30,
  },
});

export default LoginScreen;
