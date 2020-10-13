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
  return (
    <View style={styles.container}>
      <RepositoryMetaItem
        itemName="Stars"
        itemValue={stargazersCount}
      />
      <RepositoryMetaItem
        itemName="Forks"
        itemValue={forksCount}
      />
      <RepositoryMetaItem
        itemName="Reviews"
        itemValue={reviewCount}
      />
      <RepositoryMetaItem
        itemName="Rating"
        itemValue={ratingAverage}
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
