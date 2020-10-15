import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Button from './Button';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 48,
    paddingBottom: 48,
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
  },
  button: {
    height: 64,
  }
});

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <>
      <FormikTextInput
        name="username"
        placeholder= "Username"
      />
      <FormikTextInput
        name='password'
        placeholder= "Password"
        secureTextEntry
      />
      <Button
        style={styles.button}
        onPress={onSubmit}
      >
        Sign in
      </Button>
    </>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const handleSubmit = async values => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <SignInForm
            onSubmit={handleSubmit}
          />
        )}
      </Formik>
    </View>
  );
};

export default SignIn;