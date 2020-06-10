import MapScreen from '../modules/maps';
import FeedScreen from '../modules/feed';
import StatisticsScreen from '../modules/statistics';
import Map from '../static/maps.png';
import Feed from '../static/feed.png';
import Statistics from '../static/statistics.png';
import ProfileScreen from '../modules/maps';
import AutomobilesScreen from '../modules/feed';
import LogOutScreen from '../modules/statistics';

export const TAB_NAVIGATION = [
  {
    name: 'Map',
    component: MapScreen,
  },
  {
    name: 'Feed',
    component: FeedScreen,
  },
  {
    name: 'Statistics',
    component: StatisticsScreen,
  },
];

export const TAB_ICONS = {
  Map: Map,
  Feed: Feed,
  Statistics: Statistics,
};

export const DRAWER_NAVIGATION = [
  {
    name: 'Profile',
    component: ProfileScreen,
  },
  {
    name: 'Automobiles',
    component: AutomobilesScreen,
  },
  {
    name: 'Log Out',
    component: LogOutScreen,
  },
];
