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
  }
});

const TextInput = ({ style, ...props }) => {
  const textInputStyle = [styles.input, style];

  return (
    <NativeTextInput style={textInputStyle} {...props} />
  );
};

export default TextInput;
