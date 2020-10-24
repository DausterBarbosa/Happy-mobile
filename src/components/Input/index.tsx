import React from 'react';
import {View, TextInput, Text, TextInputProps} from 'react-native';

import styles from './styles';

interface InputProps extends TextInputProps {
  label: string;
  textArea?: boolean;
}

const Input: React.FC<InputProps> = ({label, textArea, ...rest}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, textArea && styles.textArea]}
        {...rest}
      />
    </View>
  );
};

export default Input;
