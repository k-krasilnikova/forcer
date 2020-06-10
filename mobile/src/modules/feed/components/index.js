import * as React from 'react';
import {Text, View, ScrollView, ImageBackground, Image} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {Button} from 'react-native-elements';

import BackgroundBlack from '../../../static/bg-black.png';
import styles from './styles';

const allNews = [
  {
    _id: '123',
    title: 'First test news',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image_url: 'https://priority-auto.ru/_nuxt/img/b8377fc.png',
    tags: ['auto', 'minsk', 'app'],
  },
  {
    _id: '456',
    title: 'Second test news',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image_url: 'https://priority-auto.ru/_nuxt/img/b8377fc.png',
    tags: ['auto', 'minsk', 'app'],
  },
  {
    _id: '789',
    title: 'Third test news',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image_url: 'https://priority-auto.ru/_nuxt/img/b8377fc.png',
    tags: ['auto', 'minsk', 'app'],
  },
];

const Feed = () => {
  return (
    <ImageBackground
      source={BackgroundBlack}
      resizeMode="cover"
      style={styles.image}>
      <ScrollView
        style={styles.feedWrapper}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 60,
        }}>
        <View style={styles.feed}>
          {allNews.map(news => (
            <View key={news._id} style={styles.news}>
              <Text h2 style={styles.title}>
                {news.title}
              </Text>
              <Text style={styles.description}>{news.description}</Text>
              <Image
                source={{uri: news.image_url}}
                style={{width: 240, height: 140}}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Feed;
