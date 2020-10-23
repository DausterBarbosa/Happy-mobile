import React from 'react';
import {View, Image, Text, ScrollView, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import MapView, {Marker} from 'react-native-maps';

import MarkerIcon from '../../assets/icons/Local.png';

import styles from './styles';

function Profile() {
  const Data = [
    {
      id: 1,
      url:
        'https://f.i.uol.com.br/fotografia/2018/07/26/15326507755b5a65177921a_1532650775_3x2_rt.jpg',
    },
    {
      id: 2,
      url:
        'https://f.i.uol.com.br/fotografia/2018/07/26/15326507755b5a65177921a_1532650775_3x2_rt.jpg',
    },
    {
      id: 3,
      url:
        'https://f.i.uol.com.br/fotografia/2018/07/26/15326507755b5a65177921a_1532650775_3x2_rt.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          horizontal
          data={Data}
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
            <Text style={styles.title}>Orf.Esperança</Text>
            <Text style={styles.about}>
              Presta assistência a crianças de 06 a 15 anos que se encontre em
              situação de risco e/ou vulnerabilidade social.
            </Text>
          </View>
          <View style={styles.orphanageLocation}>
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
              />
            </MapView>
            <Text style={styles.gmButton}>Ver rotas no Google Maps</Text>
          </View>
          <View style={styles.instructions}>
            <Text style={styles.instructionsTitle}>
              Instruções para a visita
            </Text>
            <Text style={styles.about}>
              Venha como se sentir a vontade e traga muito amor e paciência para
              dar.
            </Text>
            <View style={styles.instructionsBoxes}>
              <View style={styles.box}>
                <Icon name="clock" size={40} color="#2AB5D1" />
                <Text style={styles.boxText}>Segunda à Sexta 8h às 18h</Text>
              </View>
              <View style={[styles.box, styles.openWeekend]}>
                <Icon name="alert-circle" size={40} color="#2AB5D1" />
                <Text style={styles.boxText}>Atendemos fim de semana</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile;
