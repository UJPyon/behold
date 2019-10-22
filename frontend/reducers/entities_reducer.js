import { combineReducers } from 'redux';
import usersReducer from "./users_reducer";
import projectsReducer from './projects_reducer';
import commentsReducer from './comments_reducer';
import categoriesReducer from './categories_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  projects: projectsReducer,
  comments: commentsReducer,
  categories: categoriesReducer,
})

export default entitiesReducer;