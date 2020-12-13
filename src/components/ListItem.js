import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, Linking } from "react-native";

import {filterMessage} from '../helpers/filterMessage'

const ListItem = (props) => {

  var filteredMessage = filterMessage(props.message)

  return (
  <View style={styles.main}>
    <View style={styles.container}>
      <Text style={styles.textMessage}>{filteredMessage[0]}</Text>
      <Text style={styles.textHash}> - {filteredMessage[2]}</Text>
      <Text style={styles.textAuthor}> {props.author}</Text>
      <Text style={styles.textHash}>{props.hash}</Text>
    </View>
  </View>
  );
};


const styles = StyleSheet.create({
  textMessage: {
    fontSize:15,
    fontWeight:'bold'
  },
  textAuthor: {
    fontSize:15,
  },
  textHash: {
    marginTop:15,
    fontSize:15,
  },
  container: {
    width: Dimensions.get('window').width*.95,
    backgroundColor: "white",
    marginTop: Dimensions.get('window').width*.0125,
    marginBottom: Dimensions.get('window').width*.0125,
    padding:5,
    borderRadius:5,

      shadowColor: "#000",
      shadowOffset: {
	       width: 0,
	       height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  },
  main: {
    width: Dimensions.get('window').width,
    alignItems:'center'
  },
});



export default ListItem;
