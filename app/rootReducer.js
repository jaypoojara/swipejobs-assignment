import { combineReducers } from 'redux';
import { jobMatchScreenContainerReducer as jobMatch } from '@scenes/JobMatchScreen/reducer';
import configureStore from 'app/utils/createStore';
import rootSaga from 'app/rootSaga';

export default () => {
  const rootReducer = combineReducers({
    jobMatch
  });

  return configureStore(rootReducer, rootSaga);
};
