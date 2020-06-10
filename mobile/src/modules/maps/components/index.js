import * as React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import {Button} from 'react-native-elements';

import Mark from '../../newMap';
import MapComponent from '../pages/map';
import MarkBlack from '../../../static/mark-black.png';
import MarkRed from '../../../static/mark-red.png';
import MarkOrange from '../../../static/mark-orange.png';
import styles from './styles';

const MapsStack = createStackNavigator();
const Maps = () => {
  return (
    // <ImageBackground
    //   source={BackgroundBlack}
    //   resizeMode="cover"
    //   style={styles.image}>
    // <View style={styles.mapsWrapper}>
    //   <Text>MINSK</Text>
    //   <View style={styles.creation}>
    //     <Icon
    //       raised
    //       name="add"
    //       // type="font-awesome"
    //       color="#fff0d3"
    //       onPress={() => console.log('hello')}
    //       iconStyle={[styles.container, {backgroundColor: '#403f3987'}]}
    //     />
    //   </View>
    // </View>
    // </ImageBackground>
    <MapsStack.Navigator>
      <MapsStack.Screen
        name="Map"
        options={{
          headerShown: false,
        }}
        component={MapComponent}
      />
      <MapsStack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#403e39',
          },
          headerTintColor: '#fff0d3',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Mark"
        component={Mark}
      />
    </MapsStack.Navigator>
  );
};

export default Maps;
