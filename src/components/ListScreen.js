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

  return (
    <View>
      <Text>ListScreen</Text>
    </View>
  );
};


export default ListScreen;
