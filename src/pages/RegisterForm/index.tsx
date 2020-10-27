import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  Image,
  Alert,
} from 'react-native';

import Api from '../../services/Api';

import {useRoute, useNavigation} from '@react-navigation/native';

import ImagePicker from 'react-native-image-picker';

import {BorderlessButton} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';

import styles from './styles';

interface ImageProps {
  path: string;
  name: string;
  type: string;
}

interface RouteParams {
  key: string;
  name: string;
  params: {
    position: {
      longitude: number;
      latitude: number;
    };
  };
}

function RegisterForm() {
  const navigation = useNavigation();

  const {params} = useRoute<RouteParams>();

  const [eneabled, setEneabled] = useState(false);
  const [images, setImages] = useState<Array<ImageProps>>([]);
  const [nome, setNome] = useState('');
  const [sobre, setSobre] = useState('');
  const [instrucoes, setInstrucoes] = useState('');
  const [horario, setHorario] = useState('');

  function handleFile() {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (response.uri) {
        setImages([
          ...images,
          {path: response.uri!, name: response.fileName!, type: response.type!},
        ]);
      }
    });
  }

  function removeImage(index: number) {
    images.splice(index, 1);
    setImages([...images]);
  }

  async function handleSubmit() {
    const data = new FormData();

    data.append('name', nome);
    data.append('about', sobre);
    data.append('latitude', String(params.position.latitude));
    data.append('longitude', String(params.position.longitude));
    data.append('instructions', instrucoes);
    data.append('opening_hours', horario);
    data.append('open_in_weekends', String(eneabled));

    images.forEach((image) => {
      data.append('images', {
        uri: image.path,
        type: image.type,
        name: image.name,
      });
    });

    await Api.post('/orphanages', data);

    Alert.alert(
      'Cadastro concluido',
      'O orfanato foi cadastrado com sucesso.',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ],
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
        <Text style={styles.title}>Dados</Text>
        <Input label="Nome" value={nome} onChangeText={(e) => setNome(e)} />
        <Input
          label="Sobre"
          multiline
          textArea={true}
          value={sobre}
          onChangeText={(e) => setSobre(e)}
        />
        <View style={styles.fileContainer}>
          <Text style={styles.label}>Fotos</Text>
          {images.map((image, index) => (
            <View key={index} style={styles.imageContainer}>
              <View style={styles.profileContainer}>
                <Image source={{uri: image.path}} style={styles.image} />
                <Text style={styles.imageName} numberOfLines={1}>
                  {image.name}
                </Text>
              </View>
              <BorderlessButton onPress={() => removeImage(index)}>
                <Icon name="x" size={24} color="#FF669D" />
              </BorderlessButton>
            </View>
          ))}
          <TouchableOpacity
            style={[styles.button, styles.buttonFile]}
            onPress={handleFile}>
            <Icon name="plus" size={30} color="#15B6D6" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.visitationContainer}>
        <Text style={styles.title}>Visitação</Text>
        <Input
          label="Instruções"
          multiline
          textArea={true}
          value={instrucoes}
          onChangeText={(e) => setInstrucoes(e)}
        />
        <Input
          label="Horário"
          value={horario}
          onChangeText={(e) => setHorario(e)}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Atende fim de semana?</Text>
        <Switch
          trackColor={{false: '#DDE3F0', true: '#39CC83'}}
          thumbColor={eneabled ? '#FFF' : '#8FA7B2'}
          value={eneabled}
          onValueChange={() => setEneabled(!eneabled)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default RegisterForm;
