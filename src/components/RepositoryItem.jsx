import React from 'react';
import { Text, View } from 'react-native';

const RepositoryItem = ({
  item
}) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazerCount,
    ratingAverage,
    reviewCount,
  } = item;

  return (
    <View>
      <Text>{`Full name: ${fullName}`}</Text>
      <Text>{`Description: ${description}`}</Text>
      <Text>{`Language: ${language}`}</Text>
      <Text>{`Forks: ${forksCount}`}</Text>
      <Text>{`Stars: ${stargazerCount}`}</Text>
      <Text>{`Rating: ${ratingAverage}`}</Text>
      <Text>{`Reviews: ${reviewCount}`}</Text>
    </View>
  );
};

export default RepositoryItem;