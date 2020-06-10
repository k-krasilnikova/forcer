import * as React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import {Button} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

import BackgroundBlack from '../../../static/bg-black.png';
import styles from './styles';

const NewMap = () => {
  return (
    <ImageBackground
      source={BackgroundBlack}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.news}>
        <Text style={styles.description}>Add new mark for MINSK</Text>
        <View style={styles.form}>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            placeholder={{
              label: 'Type of breakdown...',
              value: null,
              color: '#9EA0A4',
            }}
            style={{
              inputIOS: {
                fontSize: 16,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                color: 'white',
                paddingRight: 30,
                marginTop: 40,
                marginBottom: 40,
              },
            }}
            items={[
              {label: 'Accumulator', value: 'Accumulator'},
              {label: 'Wheel problems', value: 'Wheel'},
              {label: 'Inspection', value: 'Inspection'},
              {label: 'Petrol need', value: 'Petrol'},
              {label: 'Other', value: 'Other'},
            ]}
          />
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            placeholder={{
              label: 'Urgency...',
              value: null,
              color: '#9EA0A4',
            }}
            style={{
              inputIOS: {
                fontSize: 16,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                color: 'white',
                paddingRight: 30,
                marginBottom: 40,
              },
            }}
            items={[
              {label: 'Low', value: 'Accumulator'},
              {label: 'Medium', value: 'Wheel'},
              {label: 'Hight', value: 'Inspection'},
            ]}
          />
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            placeholder={{
              label: 'Automobile...',
              value: null,
              color: '#9EA0A4',
            }}
            style={{
              inputIOS: {
                fontSize: 16,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 4,
                color: 'white',
                paddingRight: 30,
                marginBottom: 40,
              },
            }}
            items={[
              {label: 'Audi TT', value: 'Accumulator'},
              {label: 'Toyota', value: 'Wheel'},
            ]}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: 300,
              justifyContent: 'space-between',
            }}>
            <Button
              title="Back"
              style={styles.button}
              buttonStyle={{backgroundColor: '#969082'}}
            />
            <Button
              title="Publish"
              style={styles.button}
              buttonStyle={{backgroundColor: '#969082'}}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default NewMap;
