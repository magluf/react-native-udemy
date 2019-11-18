import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Magluf';
  return (
    <View>
      <Text style={styles.header}>Getting started with react-native!</Text>
      <Text style={styles.subheader}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 45
  },
  subheader: {
    fontSize: 20
  }
});

export default ComponentsScreen;
