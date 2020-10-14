import React from 'react';
import { StyleSheet, TextInput as NativeTextInput } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    height: 64,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.textPrimary,
    padding: 8,
  },
  errorInput: {
    borderColor: theme.colors.danger,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.input,
    error && styles.errorInput,
    style
  ];

  return (
    <NativeTextInput style={textInputStyle} {...props} />
  );
};

export default TextInput;
