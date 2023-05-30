import {StyleSheet, View} from 'react-native';
import React from 'react';

const Separator = () => {
  return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
  seperator: {
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 1,
  },
});

export default Separator;
