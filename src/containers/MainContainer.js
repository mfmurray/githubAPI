
import React, { useState, useEffect } from 'react';
import {Text, View, StatusBar, SafeAreaView} from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';
import { connect } from 'react-redux';


const MainContainer = (props) => {
  const {addingCommitsDone, addingCommits, addingCommitsError} = props;

  return (
    <SafeAreaView style={{flex:1}}>
      <Text>Main Container</Text>
    </SafeAreaView>
  );
}



const mapState = state => ({
  addingCommitsDone: state.commitsReducer.addingCommitsDone,
  addingCommits: state.commitsReducer.addingCommits,
  addingCommitsError: state.commitsReducer.addingCommitsError
});

const mapDispatch = dispatch => ({
});




export default connect(mapState, mapDispatch)(MainContainer);
