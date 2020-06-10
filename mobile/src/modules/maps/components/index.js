import * as React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {Icon} from 'react-native-elements';
// import {NavigationContainer} from '@react-navigation/native';
// import {Button} from 'react-native-elements';

import BackgroundBlack from '../../../static/map.png';
import styles from './styles';

const Maps = () => {
  return (
    <ImageBackground
      source={BackgroundBlack}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.mapsWrapper}>
        <Text>MINSK</Text>
        <View style={styles.creation}>
          <Icon
            raised
            name="add"
            // type="font-awesome"
            color="#fff0d3"
            onPress={() => console.log('hello')}
            iconStyle={[styles.container, {backgroundColor: '#403f3987'}]}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Maps;
