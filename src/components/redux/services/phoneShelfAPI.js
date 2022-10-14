import axios from 'axios';
import { fetchingError, fetchingInProgress, fetchingSuccess,isLoadingDisanable } from '../Slice';

axios.defaults.baseURL = 'https://6346937b745bd0dbd380eb71.mockapi.io';
export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('/contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error));
  }
};

export const addContacts = async (data, dispatch) => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.post('/contacts', data);
    dispatch(fetchContacts());
    // console.log('response', response.data.id);

    return response.data.id;
    // dispatch(fetchingSuccess(response.data));
  } catch (error) {
    // dispatch(fetchingError(error));
  }
};
export const _removeContact = async (id, dispatch) => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.delete(`/contacts/${id}`);
    dispatch(isLoadingDisanable());

    //   dispatch(fetchingSuccess(response.data));
  } catch (error) {
    // dispatch(fetchingError(error));
  }
};
