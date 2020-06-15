import * as React from 'react';
import {View, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

import MarkBlack from '../../../../static/mark-black.png';
import MarkRed from '../../../../static/mark-red.png';
import MarkOrange from '../../../../static/mark-orange.png';
import styles from './styles';

const Map = ({navigation}) => {
  return (
    <View>
      <MapView
        region={{
          latitude: 37.78,
          latitudeDelta: 0.006,
          longitude: -122.4,
          longitudeDelta: 0.004,
        }}
        onRegionChange={a => console.log(a)}
        style={{height: '100%', width: '100%'}}
        // provider="google"
        zoomEnabled
        showsUserLocation
        followsUserLocation>
        <Marker
          coordinate={{
            latitude: 37.78,
            latitudeDelta: 0.006,
            longitude: -122.4,
            longitudeDelta: 0.004,
          }}
          title="Need patrol"
          description="Can anybody please help me and give some patrol?">
          <Image source={MarkBlack} style={{height: 56, width: 40}} />
        </Marker>

        <Marker
          coordinate={{
            latitude: 37.7779,
            latitudeDelta: 0.004,
            longitude: -122.399,
            longitudeDelta: 0.004,
          }}
          title="Wheel problem"
          description="Need compressor soon">
          <Image source={MarkRed} style={{height: 56, width: 40}} />
        </Marker>
        <Marker
          coordinate={{
            latitude: 37.78599,
            latitudeDelta: 0.004,
            longitude: -122.4065,
            longitudeDelta: 0.004,
          }}
          title="Accumulator">
          <Image source={MarkOrange} style={{height: 56, width: 40}} />
        </Marker>
        <Marker
          coordinate={{
            latitude: 37.781,
            latitudeDelta: 0.004,
            longitude: -122.401,
            longitudeDelta: 0.004,
          }}
          title="Accumulator"
          description="Can anybody help me to start it?">
          <Image source={MarkOrange} style={{height: 56, width: 40}} />
        </Marker>
      </MapView>

      <View style={styles.creation}>
        <Icon
          raised
          name="add"
          // type="font-awesome"
          color="#fff0d3"
          onPress={() => navigation.navigate('Mark')}
          iconStyle={[styles.container, {backgroundColor: '#403f3987'}]}
        />
      </View>
    </View>
  );
};

export default Map;
