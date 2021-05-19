import { combineReducers } from "redux";

import leadsReducers from "./leads.reducers";
import routeReducers from "./route.reducers";

const rootReducer = combineReducers({
  leads: leadsReducers,
  route: routeReducers,
});

export default rootReducer;
