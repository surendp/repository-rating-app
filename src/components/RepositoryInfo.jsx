import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
} from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  avatar: {
    height: 56,
    width: 56,
    borderRadius: 4,
  },
  info: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    flexShrink: 1,
    flexGrow: 1,
  },
  description: {
    paddingTop: 4,
    paddingBottom: 8,
  },
  button: {
    flexGrow: 0,
  }
});

const RepositoryInfo = ({
  ownerAvatarUrl,
  fullName,
  description,
  language
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: ownerAvatarUrl }}
      />
      <View style={styles.info}>
        <Text
          fontWeight="bold"
          fontSize="subheading"
        >
          {fullName}
        </Text>
        <Text
          style={styles.description}
        >
          {description}
        </Text>
        <Button
          style={styles.button}
          title={language}
        />
      </View>
    </View>
  );
};

export default RepositoryInfo;