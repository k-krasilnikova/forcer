import * as React from 'react';
import {Text, ScrollView, View, ImageBackground} from 'react-native';
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory-native';
// import {NavigationContainer} from '@react-navigation/native';
import {ButtonGroup} from 'react-native-elements';
import * as Progress from 'react-native-progress';

import BackgroundBlack from '../../../static/bg-black.png';
import styles from './styles';

const data = [
  {quarter: 'Mon', earnings: 7},
  {quarter: 'Tue', earnings: 17},
  {quarter: 'Wed', earnings: 10},
  {quarter: 'Thu', earnings: 13},
];

const breakdowns = [
  {name: 'Accumulator', value: 56},
  {name: 'Wheel problems', value: 28},
  {name: 'Inspection', value: 4},
  {name: 'Petrol need', value: 9},
  {name: 'Other', value: 3},
];

const Statistics = () => {
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
          onPress={() => {}}
          selectedIndex={0}
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
              tickValues={['Mon', 'Tue', 'Wed', 'Thu']}
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
              data={data}
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

          {breakdowns.map(breakdown => (
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
