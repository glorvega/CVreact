import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import darkmodeReducer from "./redux/darkmode.reducer";
import experienceReducer from "./redux/experience/experience.reducers";

const rootReducer = combineReducers({
  darkModeObject: darkmodeReducer,
  experience: experienceReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;