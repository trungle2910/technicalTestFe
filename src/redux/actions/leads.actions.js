import * as types from "../constants/leads.constants";
import api from "../../apiService";
import { toast } from "react-toastify";

const getAllLeads = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_LEADS_REQUEST, payload: null });
    const response = await api.get("/leads");
    dispatch({ type: types.GET_LEADS_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: types.GET_LEADS_FAILURE, payload: error.message });
  }
};

const addLead = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.ADD_LEAD_REQUEST, payload: null });
    const res = await api.post(`/leads`, data);
    dispatch(getAllLeads());
    dispatch({ type: types.ADD_LEAD_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.ADD_LEAD_FAILURE, payload: error.message });
  }
};

export const leadsActions = { getAllLeads, addLead };
