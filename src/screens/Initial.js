import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../constants/colors';
import strings from '../constants/strings';
import Icon from 'react-native-remix-icon';
import icons from '../constants/icons';
import screenNames from '../constants/screenNames';

const Initial = ({navigation}) => {
  return (
    <SafeAreaView style={styles.parent}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(screenNames.qrScan)}>
        <Text style={styles.text}>{strings.scanQR}</Text>
        <Icon name={icons.rightArrow} size="36" color={colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: colors.appPrimary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {flexDirection: 'row', alignItems: 'center'},
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 24,
    marginRight: 8,
  },
});

export default Initial;
