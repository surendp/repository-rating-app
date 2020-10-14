import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme';

import Text from './Text';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.buttonPrimary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    height: 48,
  },

  buttonSizeLarge: {
    height: 64
  },

  text: {
    color: theme.colors.primary,
  }
});

const Button = ({ large, style, children, ...more}) => {
  const baseStyle = [
    styles.button,
    large && styles.buttonSizeLarge,
    style
  ];

  return (
    <TouchableOpacity
      style={baseStyle}
      {...more}
    >
      <Text
        style={styles.text}
        fontWeight="bold"
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;