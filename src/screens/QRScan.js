import React from 'react';
import {StyleSheet, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import screenNames from '../constants/screenNames';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import colors from '../constants/colors';
import strings from '../constants/strings';

const QRScan = ({navigation}) => {
  const onScan = content => {
    navigation.navigate(screenNames.tabScreens, {
      screen: screenNames.home,
      params: {dataLink: content?.data},
    });
  };

  return (
    <View style={{flex: 1}}>
      <QRCodeScanner
        onRead={onScan}
        showMarker
        flashMode={RNCamera.Constants.FlashMode.auto}
        vibrate
        cameraStyle={styles.camera}
        reactivate
        reactivateTimeout={3000}
        customMarker={
          <View style={styles.markerParent}>
            <LottieView
              source={require('../assets/qr_scanner_animation.json')}
              autoPlay
              loop
            />
          </View>
        }
      />
      <Text style={styles.scanText}>{strings.scanning}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  markerParent: {height: '70%', width: '70%'},
  scanText: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    bottom: 150,
    fontSize: 18,
    color: colors.appPrimary,
  },
});

export default QRScan;
