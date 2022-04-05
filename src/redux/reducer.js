import { combineReducers } from "redux";

const app = combineReducers({

})

const rootReducer = (state , action) => {
    return app(state , action)
}

export default rootReducer