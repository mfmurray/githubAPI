import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useDispatch, useSelector  } from 'react-redux';

import {filterCommits} from '../helpers/filterCommits'

const ListScreen = (props) => {
  const {addingCommitsDone, addingCommits, addingCommitsError} = props;

  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  useEffect(() => {
    dispatch({ type: 'ADD_COMMITS'})
  }, []);

  useEffect(() => {
    if (addingCommitsDone) {
      setData(filterCommits(addingCommitsDone))
    }
  }, [addingCommitsDone]);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.author}</Text>
      <Text>{item.hash}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.hash}
      />
    </View>

  );
};


export default ListScreen;
