import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  feedWrapper: {
    flex: 1,
    // alignItems: 'center',
    paddingTop: 20,
  },
  image: {
    width: null,
    height: null,
    flex: 1,
  },
  news: {
    marginTop: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // paddingBottom: 20,
    // borderStyle: 'dotted',
    // borderColor: 'grey',
    // borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: '#d8d9d6',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color: '#eaddc4',
  },
});

export default styles;
