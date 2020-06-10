import React from "react";
import ReactDOMServer from "react-dom/server";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { withStyles } from "@material-ui/core/styles";

import Layout from "common/Layout";
import Button from "common/Button";
import Mark from "../../Mark";
import { MARK_TYPES } from "../../../constants";
import styles from "./styles";

const Maps = ({ classes }) => {
  const marks = [
    {
      _id: 1,
      priority: "medium",
      coordinates: [53.9, 27.57],
      description: "Спустило колесо",
      title: "Проблема с колесами",
      user: {},
      auto: {},
      createdAt: new Date().toISOString(),
    },
    {
      _id: 2,
      priority: "low",
      coordinates: [53.92, 27.53],
      description: "Отдолжите плиз аптечку",
      title: "Техосмотр",
      user: {},
      auto: {},
      createdAt: new Date().toISOString(),
    },
    {
      _id: 3,
      priority: "high",
      coordinates: [53.85, 27.56],
      description: "Застрял, помогите отогнать",
      title: "Необходим эвакуатор",
      user: {},
      auto: {},
      createdAt: new Date().toISOString(),
    },
    {
      _id: 4,
      priority: "resolved",
      coordinates: [53.93, 27.59],
      description: "Подкурите плиз",
      title: "Аккумулятор",
      user: {},
      auto: {},
      createdAt: new Date().toISOString(),
    },
  ];
  return (
    <Layout isAuthenticated title="Maps">
      <div className={classes.wrapper}>
        <div className={classes.map}>
          <YMaps
            query={{
              ns: "use-load-option",
              load:
                "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
            }}
          >
            <div>
              <Map
                defaultState={{
                  center: [53.9, 27.57],
                  zoom: 11,
                  controls: ["zoomControl"],
                }}
                width="800px"
                height="450px"
              >
                {marks.map((mark) => (
                  <Placemark
                    key={mark._id}
                    defaultGeometry={mark.coordinates}
                    properties={{
                      balloonContent: ReactDOMServer.renderToString(
                        React.createElement(() => <Mark mark={mark} />, null)
                      ),
                    }}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: MARK_TYPES[mark.priority].image,
                      iconImageSize: [40, 54],
                    }}
                  />
                ))}
              </Map>
            </div>
          </YMaps>
        </div>

        <div className={classes.dashboard}>
          <div className={classes.wrapperDashboard}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
              className={classes.button}
            >
              Filter
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Maps.propTypes = {};

export default withStyles(styles)(Maps);
