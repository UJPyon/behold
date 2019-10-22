import * as CategoryApiUtil from '../utils/category_api_util';

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

export const receiveAllCategories = (categories) => {
  return {
    type: RECEIVE_ALL_CATEGORIES,
    categories,
  };
};

export const receiveCategory = (category) => {
  return {
    type: RECEIVE_CATEGORY,
    category,
  };
};

export const fetchCategories = () => dispatch => {
  return CategoryApiUtil.getAllCategories()
  .then(categories => dispatch(receiveAllCategories(categories)));
};

export const fetchCategory = (id) => dispatch => {
  return CategoryApiUtil.getCategory(id)
  .then(category => dispatch(receiveCategory(category)));
};