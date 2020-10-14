import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link
          to="/"
          component={AppBarTab}
        >
          Repositories
        </Link>
        <Link
          to="/sign-in"
          component={AppBarTab}
        >
          Sign in
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;