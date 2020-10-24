import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Switch} from 'react-native';

import Input from '../../components/Input';

import styles from './styles';

function RegisterForm() {
  const [eneabled, setEneabled] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
        <Text style={styles.title}>Dados</Text>
        <Input label="Nome" />
        <Input label="Sobre" multiline textArea={true} />
        <Input label="Número de Whatsapp" />
        <Input label="Fotos" />
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
