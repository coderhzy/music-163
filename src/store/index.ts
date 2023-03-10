import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import recommendReducer from '../views/discover/c-views/recommend/store/recommend'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
})

export default store
