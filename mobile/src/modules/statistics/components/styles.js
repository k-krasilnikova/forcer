import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  statisticsWrapper: {
    flex: 1,
    paddingTop: 20,
    height: '100%',
  },
  image: {
    width: null,
    height: null,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff0d3',
  },
  section: {
    width: 350,
  },
  breakdown: {
    marginTop: 20,
    marginBottom: 5,
    width: 280,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 35,
  },
  'breakdown:first-child': {
    marginTop: 100,
  },
  description: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionText: {
    color: '#eae7e2',
  },
});

export default styles;
