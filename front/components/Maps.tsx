import React, { useState } from "react";
import MapView, { Marker } from 'react-native-maps';

const Maps = () => {
  const [region, setRegion] = useState({
    latitude: 45.75259330958053,
    longitude: 4.854354849000968,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
    >
      <Marker coordinate={{ latitude: 45.7677551566, longitude: 4.8330688382587805 }}/>
      <Marker coordinate={{ latitude: 45.75618840731066, longitude: 4.841067722343153 }} pinColor= "green"/>
      <Marker coordinate={{ latitude: 45.75165416646412, longitude: 4.828489234521269 }}/>
    </MapView>
  );
};

export default Maps;
