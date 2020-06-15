import * as React from 'react';
import {Text, View, ImageBackground, Image, TextInput} from 'react-native';
import {SocialIcon} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-elements';

import Logo from '../../../static/logo-white.png';
import Avatar from '../../../static/avatar.png';
import Password from '../../../static/password.png';
import BackgroundBlack from '../../../static/bg-black.png';
import styles from './styles';

const Auth = ({navigation}) => {
  return (
    <ImageBackground
      source={BackgroundBlack}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.news}>
        <Image source={Logo} key="email" style={styles.logo} />
        <Text style={styles.description}>Enter your username and password</Text>
        <View style={styles.form}>
          <Input
            leftIcon={<Image source={Avatar} key="email" style={styles.icon} />}
            style={styles}
            onChangeText={value => console.log(value)}
            inputStyle={{color: 'white'}}
            keyboardType={'phone-pad'}
          />
          <Input
            leftIcon={
              <Image source={Password} key="email" style={styles.icon} />
            }
            style={styles}
            onChangeText={value => console.log(value)}
            inputStyle={{color: 'white'}}
            secureTextEntry={true}
          />
          <Button
            title="Sign In"
            style={styles.button}
            buttonStyle={{backgroundColor: '#969082'}}
            onPress={() => navigation.navigate('App')}
          />
        </View>
        <Text style={styles.description}>Sign in via social network</Text>
        {/* <Image
          source={{uri: news.image_url}}
          style={{width: 240, height: 140}}
        /> */}
        <View style={styles.social}>
          <SocialIcon type="twitter" />
          <SocialIcon type="facebook" />
          <SocialIcon type="google" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Auth;
