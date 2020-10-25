import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

import {BorderlessButton} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';

import styles from './styles';

interface ImageProps {
  path: string;
  name: string;
}

function RegisterForm() {
  const [eneabled, setEneabled] = useState(false);

  const [images, setImages] = useState<Array<ImageProps>>([]);

  function handleFile() {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (response.uri) {
        setImages([...images, {path: response.uri!, name: response.fileName!}]);
      }
    });
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
        <Text style={styles.title}>Dados</Text>
        <Input label="Nome" />
        <Input label="Sobre" multiline textArea={true} />
        <Input label="Número de Whatsapp" />
        <View style={styles.fileContainer}>
          <Text style={styles.label}>Fotos</Text>
          {images.map((image) => (
            <View key={image.name} style={styles.imageContainer}>
              <View style={styles.profileContainer}>
                <Image source={{uri: image.path}} style={styles.image} />
                <Text style={styles.imageName} numberOfLines={1}>
                  {image.name}
                </Text>
              </View>
              <BorderlessButton>
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
        <Input label="Instruções" multiline textArea={true} />
        <Input label="Horário" />
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default RegisterForm;
