import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, Image, TextInput } from "react-native";

import data from "../../data";

class FlatList_ extends Component {
  state = {
    text: "",
    contacts: data
  }

  renderContactsItem = ({ item, index }) => {
    return(
      <View style={ [styles.itemContainer, { backgroundColor: index % 2 === 1 ? "#fafafa" : "" }] }>
        <Image 
          style={ styles.itemAvatar }
          source={{ uri: item.picture }}
        />

        <View style={ styles.textContainer }>
          <Text style={ styles.textName }> { item.name } </Text>
          <Text style={ styles.textCompany }> { item.company } </Text>
        </View>
      </View>
    );
  }

  searchFilter = text => {
    const newData = data.filter(item => {
      const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;

      return listItem.indexOf( text.toLowerCase() ) > -1;
    });

    this.setState({
      contacts: newData
    });
  }

  renderHeader = () => {
    const { text } = this.state;
  
    return(
      <View style={ styles.searchContainer }>
        <TextInput 
          value = { text }
          onChangeText={ text => { 
            this.setState({ text }); 

            this.searchFilter( text );
          }}
          style={ styles.searchInput }
          placeholder="Search..."
        />
      </View>
    );
  }

  render() {
    return (
      <FlatList 
        ListHeaderComponent={ this.renderHeader() }
        data = { this.state.contacts }
        keyExtractor= { item => item._id.toString() }
        renderItem = { this.renderContactsItem }
      />
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  itemAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  textContainer: {
    justifyContent: "space-around"
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textCompany: {
    fontSize: 13
  },
  searchContainer: {
    padding: 10
  },
  searchInput: {
    fontSize: 16,
    backgroundColor: "#fafafa",
    flex: 1,
    padding: 10
  }
});

export default FlatList_;
