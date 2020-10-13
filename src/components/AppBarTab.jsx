import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    padding: 16,
  }
});

const AppBarTab = ({ children }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {console.log(children)}}
    >
      <Text
        color="secondary"
        fontSize="subheading"
        fontWeight="bold"
        style={styles.tab}
      >
        { children }
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;