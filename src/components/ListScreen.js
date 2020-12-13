import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useDispatch, useSelector  } from 'react-redux';


const ListScreen = (props) => {
  const {addingCommitsDone, addingCommits, addingCommitsError} = props;


  return (
    <View>
      <Text>ListScreen</Text>
    </View>
  );
};


export default ListScreen;
