import axios from "axios";
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
  } from "./advertsSlice";

axios.defaults.baseURL = "https://6509a698f6553137159bcedd.mockapi.io";

export const fetchAdverts = (page) => async dispatch => {
    try {
        dispatch(fetchingInProgress());
        const response = await axios.get(`/advert?page=${page}&limit=8`);
        dispatch(fetchingSuccess(response.data));
      } catch (e) {
        dispatch(fetchingError(e.message));
      }
  };