import axios from "axios";
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
  } from "./advertsSlice";

axios.defaults.baseURL = "https://6509a698f6553137159bcedd.mockapi.io";

const fetchAdverts = () => async dispatch => {
    try {
        // Індикатор завантаження
        dispatch(fetchingInProgress());
        // HTTP-запит
        const response = await axios.get("/tasks");
        // Обробка даних
        dispatch(fetchingSuccess(response.data));
      } catch (e) {
        // Обробка помилки
        dispatch(fetchingError(e.message));
      }
  };