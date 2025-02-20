import {
    Alert,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import { Formik } from 'formik';
  import * as Yup from 'yup';
  import React from 'react';
  
  // Validation Schema
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please enter your full name'),
    email: Yup.string()
      .email('Invalid email')
      .required('Please enter a valid Email ID'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Must contain 8+ characters, including uppercase, lowercase, number & symbol'
      )
      .required('Please enter a password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords do not match')
      .required('Confirm Password is required'),
    mobile: Yup.string()
      .matches(/^\d{10}$/, 'Must be exactly 10 digits')
      .required('Please enter your mobile number'),
  });
  
  const App = () => {
    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          mobile: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => Alert.alert('Form Data', JSON.stringify(values))}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          setFieldTouched,
          isValid,
        }) => (
          <View style={styles.container}>
            <StatusBar barStyle="light-content" />
  
            <View style={styles.formContainer}>
              <Text style={styles.title}>Sign-Up</Text>
  
              {/* Full Name Field */}
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Full Name"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorTxt}>{errors.name}</Text>
                )}
              </View>
  
              {/* Email Field */}
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Email ID"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorTxt}>{errors.email}</Text>
                )}
              </View>
  
              {/* Password Field */}
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Password"
                  secureTextEntry={true}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorTxt}>{errors.password}</Text>
                )}
              </View>
  
              {/* Confirm Password Field */}
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={() => setFieldTouched('confirmPassword')}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorTxt}>{errors.confirmPassword}</Text>
                )}
              </View>
  
              {/* Mobile Number Field */}
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Mobile Number"
                  keyboardType="number-pad"
                  maxLength={10}
                  value={values.mobile}
                  onChangeText={handleChange('mobile')}
                  onBlur={() => setFieldTouched('mobile')}
                />
                {touched.mobile && errors.mobile && (
                  <Text style={styles.errorTxt}>{errors.mobile}</Text>
                )}
              </View>
  
              {/* Submit Button */}
              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isValid}
                style={[
                  styles.submitBtn,
                  { backgroundColor: isValid ? '#395B64' : '#A5C9CA' },
                ]}
              >
                <Text style={styles.submitBtnTxt}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    );
  };
  
  export default App;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2C3333',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
    },
    formContainer: {
      backgroundColor: '#F5EDDC',
      padding: 20,
      borderRadius: 20,
      width: '100%',
    },
    title: {
      color: '#16213E',
      fontSize: 26,
      fontWeight: '700',
      marginBottom: 15,
    },
    inputWrapper: {
      marginBottom: 15,
    },
    inputStyle: {
      borderColor: '#16213E',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
    errorTxt: {
      fontSize: 12,
      color: '#FF0D10',
    },
    submitBtn: {
      padding: 10,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    submitBtnTxt: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '700',
    },
  });
  