import React from 'react';
import {View, Image, Text, ScrollView, FlatList} from 'react-native';

import {useRoute} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import MapView, {Marker} from 'react-native-maps';

import MarkerIcon from '../../assets/icons/Local.png';

import styles from './styles';

interface ImageProps {
  id: number;
  url: string;
}

interface RouteParams {
  key: string;
  name: string;
  params: {
    location: {
      name: string;
      about: string;
      instructions: string;
      latitude: number;
      longitude: number;
      opening_hours: string;
      open_in_weekends: boolean;
      images: Array<ImageProps>;
    };
  };
}

function Profile() {
  const {params} = useRoute<RouteParams>();

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          horizontal
          data={params.location.images}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <Image
              style={styles.image}
              source={{
                uri: item.url,
              }}
            />
          )}
        />
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{params.location.name}</Text>
            <Text style={styles.about}>{params.location.about}</Text>
          </View>
          <View style={styles.orphanageLocation}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: params.location.latitude,
                longitude: params.location.longitude,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008,
              }}>
              <Marker
                coordinate={{latitude: -3.5552224, longitude: -41.1272681}}
                icon={MarkerIcon}
              />
            </MapView>
            <Text style={styles.gmButton}>Ver rotas no Google Maps</Text>
          </View>
          <View style={styles.instructions}>
            <Text style={styles.instructionsTitle}>
              Instruções para a visita
            </Text>
            <Text style={styles.about}>{params.location.instructions}</Text>
            <View style={styles.instructionsBoxes}>
              <View style={styles.box}>
                <Icon name="clock" size={40} color="#2AB5D1" />
                <Text style={styles.boxText}>
                  {params.location.opening_hours}
                </Text>
              </View>
              <View
                style={[
                  styles.box,
                  params.location.open_in_weekends
                    ? styles.openWeekend
                    : styles.closeWeekend,
                ]}>
                <Icon
                  name="alert-circle"
                  size={40}
                  color={
                    params.location.open_in_weekends ? '#2AB5D1' : '#FF669D'
                  }
                />
                <Text style={styles.boxText}>
                  {params.location.open_in_weekends
                    ? 'Atendemos fim de semana'
                    : 'Não atendemos fim de semana'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile;
