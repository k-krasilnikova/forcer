import React, {useState} from 'react';
import {Text, ScrollView, View, ImageBackground} from 'react-native';
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory-native';
// import {NavigationContainer} from '@react-navigation/native';
import {ButtonGroup} from 'react-native-elements';
import * as Progress from 'react-native-progress';

import BackgroundBlack from '../../../static/bg-black.png';
import styles from './styles';
const test = [
  ['Mon', 'Tue', 'Wed', 'Thu'],
  ['01.06', '08.06', '15.06', '22.06'],
  ['Jan', 'Feb', 'Mar', 'Apr'],
];
const data = [
  [
    {quarter: 'Mon', earnings: 7},
    {quarter: 'Tue', earnings: 17},
    {quarter: 'Wed', earnings: 10},
    {quarter: 'Thu', earnings: 13},
  ],
  [
    {quarter: '01.06', earnings: 6},
    {quarter: '08.06', earnings: 1},
    {quarter: '15.06', earnings: 28},
    {quarter: '22.06', earnings: 0},
  ],
  [
    {quarter: 'Jan', earnings: 7},
    {quarter: 'Feb', earnings: 17},
    {quarter: 'Mar', earnings: 10},
    {quarter: 'Apr', earnings: 13},
  ],
];

const breakdowns = [
  [
    {name: 'Accumulator', value: 56},
    {name: 'Wheel problems', value: 28},
    {name: 'Inspection', value: 4},
    {name: 'Petrol need', value: 9},
    {name: 'Other', value: 3},
  ],
  [
    {name: 'Accumulator', value: 36},
    {name: 'Wheel problems', value: 48},
    {name: 'Inspection', value: 4},
    {name: 'Petrol need', value: 2},
    {name: 'Other', value: 10},
  ],
  [
    {name: 'Accumulator', value: 28},
    {name: 'Wheel problems', value: 56},
    {name: 'Inspection', value: 9},
    {name: 'Petrol need', value: 4},
    {name: 'Other', value: 3},
  ],
];

const Statistics = () => {
  const [currentData, setCurrentData] = useState(data[0]);
  const [currentBreakdowns, setCurrentBreakdowns] = useState(breakdowns[0]);
  const [currentSelected, setCurrentSelected] = useState(0);
  const [currentTest, setCurrentTest] = useState(test[0]);
  return (
    <ImageBackground
      source={BackgroundBlack}
      resizeMode="cover"
      style={styles.image}>
      <ScrollView
        style={styles.statisticsWrapper}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 60,
        }}>
        <ButtonGroup
          onPress={variant => {
            setCurrentSelected(variant);
            setCurrentData(data[variant]);
            setCurrentBreakdowns(breakdowns[variant]);
            setCurrentTest(test[variant]);
          }}
          selectedIndex={currentSelected}
          buttons={['Week', 'Month', 'Year']}
          containerStyle={{
            height: 24,
            marginTop: 30,
            marginBottom: 30,
            borderColor: '#fff0d3',
          }}
          buttonStyle={{
            backgroundColor: '#403e39',
          }}
          textStyle={{
            color: '#fff0d3',
          }}
          selectedButtonStyle={{
            backgroundColor: '#403e39',
          }}
        />
        <View>
          <Text style={styles.title}>Count of breakdowns</Text>
          <VictoryChart width={350}>
            <VictoryAxis
              tickValues={currentTest}
              tickFormat={x => x}
              style={{
                axis: {
                  stroke: '#eae7e2',
                },
                tickLabels: {fill: '#eae7e2'},
              }}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={x => x}
              style={{
                axis: {
                  stroke: '#eae7e2',
                },
                tickLabels: {fill: '#eae7e2'},
              }}
            />
            <VictoryBar
              data={currentData}
              x="quarter"
              y="earnings"
              style={{
                data: {fill: '#fca413'},
                labels: {fill: '#eae7e2'},
              }}
            />
          </VictoryChart>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Types of breakdowns</Text>

          {currentBreakdowns.map(breakdown => (
            <View key={breakdown.name} style={styles.breakdown}>
              <View style={styles.description}>
                <Text style={styles.descriptionText}>{breakdown.name}</Text>
                <Text style={styles.descriptionText}>{breakdown.value}%</Text>
              </View>
              <Progress.Bar
                progress={breakdown.value / 100}
                width={280}
                color="linear-gradient(90deg, rgb(178, 167, 148) 0%, #ffefd4 100%)"
                unfilledColor="#96908285"
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Statistics;
