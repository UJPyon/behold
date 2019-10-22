import { RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions';
import { merge } from 'lodash';

const categoriesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return merge({}, action.categories);
    case RECEIVE_CATEGORY:
      newState = merge({}, oldState, {[action.category.id]: action.category});
      return newState;
    default: 
      return oldState;
  }
}

export default categoriesReducer;