import * as types from "../constants/leads.constants";

const initialState = {
  leads: null,
  loading: false,
  error: null,
};
const leadsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LEADS_REQUEST:
    case types.ADD_LEAD_REQUEST:
    case types.DELETE_LEAD_REQUEST:
    case types.UPDATE_MARK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_LEADS_FAILURE:
    case types.ADD_LEAD_FAILURE:
    case types.DELETE_LEAD_FAILURE:
    case types.UPDATE_MARK_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.ADD_LEAD_SUCCESS:
    case types.DELETE_LEAD_SUCCESS:
    case types.UPDATE_MARK_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.GET_LEADS_SUCCESS:
      return {
        ...state,
        loading: false,
        leads: action.payload,
      };

    default:
      return state;
  }
};

export default leadsReducers;
