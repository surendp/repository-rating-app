import { useField } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: 24
  },

  errorText: {  
    marginTop: 5,
    color: theme.colors.danger,
  }
});

const FormikTextInput = ({ name, ...props}) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;