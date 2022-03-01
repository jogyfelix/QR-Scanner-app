import React, {useEffect} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {Badge, LinearProgress} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {getData} from '../../redux/actions';
import colors from '../../constants/colors';
import Icon from 'react-native-remix-icon';
import icons from '../../constants/icons';
import {capitalise, formatDate} from '../../utils';
import ListItem from './ListItem';
import strings from '../../constants/strings';

const Home = ({route}) => {
  const url = route.params.dataLink;
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const totalTests = data?.tests?.length;
  const completedTests = data?.tests?.filter(
    value => value.status == 'completed',
  ).length;
  const remainingTests = data?.tests?.filter(
    value => value.status == 'ongoing',
  ).length;
  const percentage = (completedTests / totalTests) * 100;
  const keyID = data?.key ? data?.key.match(/.{1,4}/g).join('-') : '';
  const progressValue = percentage ? percentage / 100 : 0;

  useEffect(() => {
    dispatch(getData(url));
  }, []);

  return (
    <View style={styles.parent}>
      <View style={styles.firstTitle}>
        <Text style={styles.keyId}>{keyID}</Text>
        <View style={styles.flexRow}>
          <Badge status="success" containerStyle={styles.justifyCenter} />
          <Text style={styles.status}>{capitalise(data?.status)}</Text>
        </View>
      </View>
      <View style={styles.nameParent}>
        <Icon name={icons.user_fill} size="20" color={colors.grey} />
        <Text style={styles.subText}>{capitalise(data?.name)}</Text>
      </View>
      <View style={styles.dateParent}>
        <Icon name={icons.calendar_fill} size="20" color={colors.grey} />
        <Text style={styles.subText}>
          {formatDate(data?.created_on)} - {formatDate(data?.validity)}
        </Text>
      </View>
      <View style={styles.percentageParent}>
        <Text style={styles.percentageText}>
          {strings.totalTest}
          {totalTests}
        </Text>
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>
      <LinearProgress
        style={styles.progressBar}
        value={progressValue}
        variant="determinate"
        color={colors.blue}
        trackColor={colors.lightBlue}
      />
      <View style={styles.firstTitle}>
        <Text style={styles.colorDarkGrey}>
          {strings.completedTest}
          {completedTests}
        </Text>
        <Text style={styles.colorDarkGrey}>
          {strings.remainingTest}
          {remainingTests}
        </Text>
      </View>
      <FlatList
        style={styles.list}
        data={data?.tests}
        ListFooterComponent={() => <View style={styles.marginVertical50} />}
        renderItem={({item}) => {
          return <ListItem item={item} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {marginHorizontal: 24, marginTop: 48},
  firstTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  keyId: {
    color: colors.appPrimary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  flexRow: {flexDirection: 'row'},
  justifyCenter: {justifyContent: 'center'},
  status: {color: colors.green, marginLeft: 6, paddingTop: 2},
  nameParent: {flexDirection: 'row', marginTop: 24},
  subText: {
    color: colors.darkGrey,
    marginLeft: 8,
  },
  dateParent: {flexDirection: 'row', marginTop: 16},
  percentageParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  percentageText: {color: colors.appPrimary, fontWeight: '500'},
  progressBar: {marginVertical: 10, borderRadius: 2},
  colorDarkGrey: {color: colors.darkGrey},
  list: {marginTop: 24, marginBottom: 100},
  marginVertical50: {marginVertical: 50},
});

export default Home;
