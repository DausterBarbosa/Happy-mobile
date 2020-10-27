import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useNavigation, useFocusEffect} from '@react-navigation/native';

import Api from '../../services/Api';

import Icon from 'react-native-vector-icons/Feather';

import MarkerIcon from '../../assets/icons/Local.png';

import MapView, {Marker, Callout} from 'react-native-maps';

import styles from './styles';

interface LocationProps {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function Home() {
  const navigation = useNavigation();

  const [locations, setLocations] = useState<LocationProps[]>([]);

  async function getLocations() {
    const response = await Api.get('/orphanages');
    setLocations(response.data);
  }

  useEffect(() => {
    getLocations();
  }, []);

  useFocusEffect(() => {
    getLocations();
  });

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
        {locations.map((location) => {
          return (
            <Marker
              key={location.id}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              icon={MarkerIcon}
              calloutAnchor={{
                x: 2.4,
                y: 0.8,
              }}>
              <Callout
                tooltip={true}
                onPress={() => navigation.navigate('Profile', {location})}>
                <View style={styles.calloutStyle}>
                  <Text style={styles.calloutText}>{location.name}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {locations.length} orfanatos encontrados
        </Text>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate('RegisterMap')}>
          <Icon name="plus" color="#FFF" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
