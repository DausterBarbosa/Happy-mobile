import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import MarkerIcon from '../../assets/icons/Local.png';

import MapView, {Marker, MapEvent} from 'react-native-maps';

import styles from './styles';

function RegisterMap() {
  const navigation = useNavigation();

  const [position, setPosition] = useState({latitude: 0, longitude: 0});

  function handlePosition(event: MapEvent) {
    const {latitude, longitude} = event.nativeEvent.coordinate;
    setPosition({latitude, longitude});
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -3.5552224,
          longitude: -41.1272681,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        onPress={handlePosition}>
        {position.latitude !== 0 && (
          <Marker
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
            icon={MarkerIcon}
          />
        )}
      </MapView>
      {position.latitude !== 0 && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RegisterForm')}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default RegisterMap;
