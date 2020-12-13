import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, Linking } from "react-native";

import {filterMessage} from '../helpers/filterMessage'

const ListItem = (props) => {

  var filteredMessage = filterMessage(props.message)

  return (
  <View>
    <Text style={styles.textAuthor}>{props.author}</Text>
  </View>
  );
};


const styles = StyleSheet.create({
});



export default ListItem;
