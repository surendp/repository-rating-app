import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});

const repositoryMetaItemStyles = StyleSheet.create({
  item: {
    textAlign: 'center',
  }
});

const RepositoryMetaInfo = ({
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {
  const formatCounts = count => {
    return count > 999
      ? `${Number.parseFloat(count/1000).toFixed(1)}k`
      : count;
  };

  return (
    <View style={styles.container}>
      <RepositoryMetaItem
        itemName="Stars"
        itemValue={formatCounts(stargazersCount)}
      />
      <RepositoryMetaItem
        itemName="Forks"
        itemValue={formatCounts(forksCount)}
      />
      <RepositoryMetaItem
        itemName="Reviews"
        itemValue={formatCounts(reviewCount)}
      />
      <RepositoryMetaItem
        itemName="Rating"
        itemValue={formatCounts(ratingAverage)}
      />
    </View>
  );
};

const RepositoryMetaItem = ({ itemName, itemValue }) => {
  return (
    <View>
      <Text
        style={repositoryMetaItemStyles.item}
        fontWeight="bold"
        fontSize="subheading"
      >
        {itemValue}
      </Text>
      <Text style={repositoryMetaItemStyles.item}>
        {itemName}
      </Text>
    </View>
  );
};

export default RepositoryMetaInfo;
