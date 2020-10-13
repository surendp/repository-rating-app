import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import RepositoryInfo from './RepositoryInfo';
import RepositoryMetaInfo from './RepositoryMetaInfo';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.colors.primary,
  },
});

const RepositoryItem = ({
  item
}) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl
  } = item;

  return (
    <View style={styles.container}>
      <RepositoryInfo
          ownerAvatarUrl={ownerAvatarUrl}
          fullName={fullName}
          description={description}
          language={language}
      />
      <RepositoryMetaInfo
        forksCount={forksCount}
        stargazersCount={stargazersCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
      />
    </View>
  );
};

export default RepositoryItem;