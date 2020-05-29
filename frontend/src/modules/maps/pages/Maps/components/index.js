import React from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { withStyles } from "@material-ui/core/styles";

import Layout from "common/Layout";
import Button from "common/Button";
import {MARK_TYPES} from "../constants";
import styles from "./styles";

const Maps = ({ classes }) => {
  const marks = [
    {_id: 1, priority: "medium", coordinates: [53.90, 27.57], description: "lala", title: "la", user: {}, createdAt: new Date()}, 
    {_id: 2, priority: "low", coordinates: [53.92, 27.53], description: "lala", title: "la", user: {}, createdAt: new Date()}, 
    {_id: 3, priority: "high", coordinates: [53.85, 27.56], description: "lala", title: "la", user: {}, createdAt: new Date()}, 
    {_id: 4, priority: "resolved", coordinates: [53.93, 27.59], description: "lala", title: "la", user: {}, createdAt: new Date()}
  ];
  return (
    <Layout isAuthenticated title="Maps">
      <div className={classes.wrapper}>
        <div className={classes.map}>
          <YMaps query={{
            ns: 'use-load-option',
            load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
          }}>
            <div>
              <Map defaultState={{ center: [53.90, 27.57], zoom: 11, controls: ['zoomControl'] }} width="800px" height="450px">
                {marks.map((mark) => 
                  <Placemark
                    key={mark._id}
                    defaultGeometry={mark.coordinates}
                    properties={{
                      balloonContent: '<div>Инфа о метке</div>',
                    }}
                    options={{
                      iconLayout: 'default#image',
                      iconImageHref: MARK_TYPES[mark.priority].image,
                      iconImageSize: [40, 54],
                    }}
                  />
                )}
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
