import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useDispatch, useSelector  } from 'react-redux';

import {filterCommits} from '../helpers/filterCommits'
import ListItem from './ListItem.js'

const ListScreen = (props) => {
  const {addingCommitsDone, addingCommits, addingCommitsError} = props;

  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  //On initializing, ADD_COMMITS is called which triggers the saga to make the api call
  useEffect(() => {
    dispatch({ type: 'ADD_COMMITS'})
  }, []);

  //When addingCommitsDone data changes from api call, the data is filtered for the FlatList
  useEffect(() => {
    if (addingCommitsDone) {
      setData(filterCommits(addingCommitsDone))
    }
  }, [addingCommitsDone]);

  const renderItem = ({ item }) => (
    <ListItem
      author={item.author}
      authorUrl={item.authorUrl}
      iconUrl={item.iconUrl}
      message={item.message}
      hash={item.hash}
      hashUrl={item.hashUrl}
    />
  );

  return (
    <View>
      {addingCommits ? (<Text>Loading</Text>):(null)}
      {addingCommitsError ? (<Text>Error</Text>):(null)}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.hash}
      />
    </View>

  );
};


export default ListScreen;
