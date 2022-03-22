import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import useCombineReducers from "./reducers";

const useStore = () => {
    const initialState = {};
    let middleware = [];
    const rootReducers = useCombineReducers();
    const persistConfig = {
        //Root?
        key: "root",
        storage: storage,
        blacklist: ["ageGate","home"],
    };
    const persistReduce = persistReducer(persistConfig, rootReducers)
    if(process.env.NODE_ENV === "development") {
        const reduxInmmutableStateInvariant = require("redux-immutable-state-invariant").default()
        middleware = [...middleware, reduxInmmutableStateInvariant, thunk]
    } else {
        middleware = [...middleware, thunk]
    }

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    let store = createStore(
        persistReduce,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    )
    let persistor = persistStore(store)
    return {
        store,
        persistor
    }
}

export default useStore;