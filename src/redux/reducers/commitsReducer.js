
import { useDispatch, useSelector  } from 'react-redux';


/*
Commits data for API call
addingCommits: Checks if API call is being made
addingCommitsDone: equals commits data when API calls is finished
addingCommitsError: detect when API call made an error
*/

const initialState = {
  addingCommits: false,
  addingCommitsDone: null,
  addingCommitsError: null,
};

const commitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMITS': {
      return {
        // State
        ...state,
        // Redux Store
        addingCommits: true,
        addingCommitsDone: null,
        addingCommitsError: null,
      }
    }
    case 'ADD_COMMITS_DONE': {
      return {
        // State
        ...state,
        // Redux Store
        addingCommits: false,
        addingCommitsDone: action.data,
        addingCommitsError: null,
      }
    }
    case 'ADD_COMMITS_ERROR': {
      return {
        // State
        ...state,
        // Redux Store
        addingCommits: false,
        addingCommitsDone: null,
        addingCommitsError: action.error,
      }
    }

    // Default
    default: {
      return state;
    }
  }
};



// Exports
export default commitsReducer;
