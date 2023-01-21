import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {CustomButton} from '../../components/CustomButton';

const HomeScreen = ({navigation, route}: any) => {
  const {name, email} = route.params;
  const custName = name;
  const custEmail = email;

  let options = {
    saveToPhotos: true,
    mediaType: 'video',
    videoQuality: 'low',
    cameraType: 'front',
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      console.log(result);
    }
  };

  const changeDetails = () => {
    navigation.navigate('Login', {custName, custEmail});
  };

  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.myFirstApp}>Welcome {name}</Text>
      </View>
      <CustomButton label="Open Camera" onClick={openCamera} />
      <View style={styles.buttonView}>
        <CustomButton label="Change Details" onClick={changeDetails} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9EFC0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myFirstApp: {
    marginTop: -100,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3D8361',
    textTransform: 'capitalize',
  },
  textBox: {
    paddingBottom: 15,
  },
  buttonView: {
    width: '100%',
    paddingVertical: 20,
  },
});

export default HomeScreen;
