import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import MarkerIcon from '../../assets/icons/Local.png';

import MapView, {Marker, Callout} from 'react-native-maps';

import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -3.5552224,
          longitude: -41.1272681,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}>
        <Marker
          coordinate={{latitude: -3.5552224, longitude: -41.1272681}}
          icon={MarkerIcon}
          calloutAnchor={{
            x: 2.4,
            y: 0.8,
          }}>
          <Callout tooltip={true}>
            <View style={styles.calloutStyle}>
              <Text style={styles.calloutText}>Lar das meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="plus" color="#FFF" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
