import { ROUTES } from "../../../constants";
import clientsIcon from "static/clients.png";
import feedIcon from "static/feed.png";
import statisticsIcon from "static/statistics.png";
import mapsIcon from "static/maps.png";

export const menuItemsList = [
  {
    id: "clients_view",
    label: "Clients View",
    icon: clientsIcon,
    url: ROUTES.CLIENTS,
  },
  {
    id: "feed",
    label: "Feed",
    icon: feedIcon,
    url: ROUTES.FEED,
  },
  {
    id: "statistics",
    label: "Statistics",
    icon: statisticsIcon,
    url: ROUTES.STATISTICS,
  },
  {
    id: "maps",
    label: "Maps",
    icon: mapsIcon,
    url: ROUTES.MAP,
  },
];
