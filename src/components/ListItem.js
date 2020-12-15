import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, Linking } from "react-native";

import {filterMessage} from '../helpers/filterMessage'

const ListItem = (props) => {

  const {message, authorUrl, iconUrl, author, hashUrl, hash} = props;
  //The message data from each commit is filtered to an array with respect to each line break (\n)
  var filteredMessage = filterMessage(message)

  return (
  <View style={styles.main}>
    <View style={styles.container}>
      <Text style={styles.textMessage}>{filteredMessage[0]}</Text>
      {filteredMessage[2] ?(<Text style={styles.textHash}> - {filteredMessage[2]}</Text>):(null)}
      <TouchableOpacity style={styles.buttonAuthor} onPress={() => { Linking.openURL(authorUrl) }}>
        <Image
          style={styles.tinyLogo}
          source={{uri: iconUrl}}
        />
        <Text style={styles.textAuthor}> {author}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Linking.openURL(hashUrl) }}>
        <Text style={styles.textHash}>{hash}</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};


const styles = StyleSheet.create({
  textMessage: {
    fontSize:15,
    fontWeight:'bold'
  },
  tinyLogo: {
    width: 20,
    height: 20,
    borderRadius:10,
  },
  textAuthor: {
    fontSize:15,
  },
  buttonAuthor: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:20
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
