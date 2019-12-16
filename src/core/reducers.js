import { combineReducers } from 'redux'

const initialState = {
}

export const layout = ( state = initialState, action ) => {

    switch (action.type) {
        default :
          return state;
    }

}

export const reducers = combineReducers({ layout })