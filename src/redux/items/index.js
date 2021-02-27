import {
  getAllItems,
} from './actions/actions';

import {
  allItemsReducer,
} from './reducers/reducers';

const allReducers = {
  allItems: allItemsReducer,
  
};

export {
  allReducers,
  getAllItems,
  
};
