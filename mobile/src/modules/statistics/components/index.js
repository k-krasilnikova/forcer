import * as React from 'react';
import {Text, View, ImageBackground} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {Button} from 'react-native-elements';

import BackgroundBlack from '../../../static/bg-black.png';
import styles from './styles';

const Statistics = () => {
  return (
    <ImageBackground
      source={BackgroundBlack}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.statisticsWrapper}>
        <Text>Statistics!</Text>
      </View>
    </ImageBackground>
  );
};

export default Statistics;
