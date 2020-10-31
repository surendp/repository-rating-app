import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import { useApolloClient } from '@apollo/react-hooks';

import theme from '../theme';
import AppBarTab from './AppBarTab';
import useAuthorizedUser from '../hooks/useAuthorizedUser';
import AuthStorageContext from "../contexts/AuthStorageContext";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    flexDirection: "row",
  },
});

const SignInSignOutTab = () => {
  const { loading, authorizedUser } = useAuthorizedUser();
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);

  const signout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  if (!loading && authorizedUser) {
    return (
      <AppBarTab
        onPress={signout}
      >
        Sign out
      </AppBarTab>
    );
  }

  return (
    <Link
      to="/sign-in"
      component={AppBarTab}
    >
      Sign in
    </Link>
  );
};

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
        <SignInSignOutTab />
      </ScrollView>
    </View>
  );
};

export default AppBar;