import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import FlatList_ from "./src/components/FlatList_";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <FlatList_ />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
