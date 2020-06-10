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
  logo: {
    width: 200,
    height: 80,
    marginBottom: 50,
  },
  news: {
    marginTop: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  form: {
    marginTop: 10,
    marginBottom: 40,
    width: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 140,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: '#eaddc4',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#eaddc4',
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 280,
  },
});

export default styles;
