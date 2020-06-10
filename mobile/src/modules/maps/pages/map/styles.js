import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mapsWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  image: {
    width: null,
    height: null,
    flex: 1,
  },
  creation: {
    // paddingTop: 490,
    // paddingLeft: 270,
    bottom: 20,
    right: 30,
    position: 'absolute',
  },
  container: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10000,
    backgroundColor: '#9a92878a',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 14,
  },
  addIcon: {
    color: '#9a92878a',
  },
});

export default styles;
