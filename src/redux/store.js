import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

// rootReducer
import rootReducer from "./reducer";

const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
});

const middleware = [thunk]


const configureStore = (initialState = {}) => {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );
};

export default configureStore