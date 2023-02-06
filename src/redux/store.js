import { combineReducer, configureStore } from '@reduxjs/toolkit';
import products from '../slices/product';

const reducer = combineReducer({
  products,
});
export default configureStore({
  reducer,
});
