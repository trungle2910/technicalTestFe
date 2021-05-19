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
const deleteLead = (leadId) => async (dispatch) => {
  try {
    dispatch({ type: types.DELETE_LEAD_REQUEST, payload: null });
    const res = await api.delete(`/leads/${leadId}`);
    dispatch(getAllLeads());
    dispatch({ type: types.DELETE_LEAD_SUCCESS, payload: res });
    toast.success(res.data.message);
  } catch (error) {
    dispatch({
      type: types.DELETE_LEAD_FAILURE,
      payload: error.message,
    });
  }
};
const updateMark =
  ({ communication }, id) =>
  async (dispatch) => {
    try {
      dispatch({ type: types.UPDATE_MARK_REQUEST, payload: null });
      const res = await api.put(`/mark_lead/${id}`, communication);
      dispatch(getAllLeads());
      dispatch({ type: types.UPDATE_MARK_SUCCESS, payload: res });
      toast.success(res.data.message);
    } catch (error) {
      dispatch({
        type: types.UPDATE_MARK_FAILURE,
        payload: error.message,
      });
    }
  };

export const leadsActions = { getAllLeads, addLead, deleteLead, updateMark };
