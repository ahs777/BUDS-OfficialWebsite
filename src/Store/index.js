
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import landing from './Features/LandingPage/landingPageSlice'



const reducer = combineReducers({
    landing
})

const store = configureStore({
    reducer,
})

export default store;
