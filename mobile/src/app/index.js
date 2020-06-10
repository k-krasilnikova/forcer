import * as React from 'react';
import {Provider} from 'react-redux';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {Button} from 'react-native-elements';

// import Auth from '../modules/auth';
// import NewMap from '../modules/newMap';
import {TAB_NAVIGATION, TAB_ICONS, DRAWER_NAVIGATION} from '../constants';
import {store} from '../store';
import styles from './styles';

const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store} style={styles.wrapper}>
      {/* <Auth /> */}
      {/* <NewMap /> */}
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={TAB_NAVIGATION[0].name}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              let theme = styles.icon;
              if (focused) {
                theme = {...theme, ...styles.focusedIcon};
              }
              return (
                <Image
                  source={TAB_ICONS[route.name]}
                  style={theme}
                  key={route.name}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#fff0d3',
            inactiveTintColor: 'gray',
            inactiveBackgroundColor: '#403e39',
            activeBackgroundColor: '#403e39',
          }}>
          {TAB_NAVIGATION.map(tab => (
            <Tab.Screen
              name={tab.name}
              component={tab.component}
              key={tab.name}
            />
          ))}
        </Tab.Navigator>
        {/* <Drawer.Navigator>
          {DRAWER_NAVIGATION.map(tab => (
            <Tab.Screen
              name={tab.name}
              component={tab.component}
              key={tab.name}
            />
          ))}
        </Drawer.Navigator>   */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
