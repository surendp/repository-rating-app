import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import FormikTextInput from './FormikTextInput';
import Button from './Button';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 48,
    justifyContent: "center",
  },
  button: {
    height: 64,
  }
});

const initialValues = {
  username: '',
  password: ''
};

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
  const handleSubmit = values => {
    console.log(values);
  };

  const validate = values => {
    const errors = {};
    const requiredError = 'Field is required';

    if (!values.username) {
      errors.username = requiredError;
    }

    if (!values.password) {
      errors.password = requiredError;
    }
  
    return errors;
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validate}
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