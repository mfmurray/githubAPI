import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions, Linking } from "react-native";


const ListItem = (props) => {


  return (
  <View>
    <Text style={styles.textAuthor}>{props.author}</Text>
  </View>
  );
};


const styles = StyleSheet.create({
});



export default ListItem;
