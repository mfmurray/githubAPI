
import React, { useState, useEffect } from 'react';
import {Text, View, StatusBar, SafeAreaView} from 'react-native';
import { useDispatch, useSelector  } from 'react-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ListScreen from '../components/ListScreen.js'

const MainContainer = (props) => {
  const {addingCommitsDone, addingCommits, addingCommitsError} = props;

  return (
    <SafeAreaView style={{flex:1}}>
      <ListScreen
        addingCommitsDone={addingCommitsDone}
        addingCommits={addingCommits}
        addingCommitsError={addingCommitsError}
      />
      <StatusBar
        barStyle="dark-content"
      />
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


MainContainer.defaultProps = {
  addingCommitsDone: null,
  addingCommits: false,
  addingCommitsError: null
};

MainContainer.propTypes = {
  addingCommitsDone: PropTypes.array,
  addingCommits: PropTypes.bool,
  addingCommitsError: PropTypes.array,
};


export default connect(mapState, mapDispatch)(MainContainer);
