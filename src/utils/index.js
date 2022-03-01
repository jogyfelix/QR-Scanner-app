import Snackbar from 'react-native-snackbar';
import moment from 'moment';

export const showSnackShort = message => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_SHORT,
  });
};

export const capitalise = value =>
  value?.replace(/\b\w/g, c => c.toUpperCase());

export const formatDate = date => moment(date).format('DD MMMM yyyy');
