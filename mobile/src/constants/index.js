import MapScreen from '../modules/maps';
import FeedScreen from '../modules/feed';
import StatisticsScreen from '../modules/statistics';
import Map from '../static/maps.png';
import Feed from '../static/feed.png';
import Statistics from '../static/statistics.png';

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
