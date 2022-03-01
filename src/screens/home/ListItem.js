import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../constants/colors';
import Icon from 'react-native-remix-icon';
import icons from '../../constants/icons';
import {capitalise, formatDate} from '../../utils';
import strings from '../../constants/strings';

const ListItem = ({item}) => {
  return (
    <View style={styles.parent}>
      <Text style={styles.testText}>
        {strings.test}
        {item.id}
      </Text>
      <View style={styles.subParent}>
        <View>
          <Text style={{color: colors.darkGrey}}>
            {item.completed_on ? formatDate(item.completed_on) : strings.dash}
          </Text>
          <Text style={styles.subTitles}>{strings.completedOn}</Text>
        </View>
        <View>
          <Text
            style={
              item?.status == 'completed'
                ? {color: colors.green}
                : {color: colors.yellow}
            }>
            {capitalise(item.status)}
          </Text>
          <Text style={styles.subTitles}>{strings.status}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.flexRow}>
            <Text style={styles.downloadText}>{strings.download}</Text>
            <Icon name={icons.downArrow} size="18" color={colors.grey} />
          </TouchableOpacity>
          <Text style={styles.subTitles}>{strings.report}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 14,
    elevation: 0.4,
    borderRadius: 4,
  },
  testText: {color: colors.appPrimary, fontWeight: 'bold'},
  subTitles: {color: colors.grey, fontSize: 12, marginTop: 2},
  subParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  downloadText: {color: colors.darkGrey, marginRight: 2},
  flexRow: {flexDirection: 'row'},
});

export default ListItem;
