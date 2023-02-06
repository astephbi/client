import axios from 'axios';
import { setProducts, setLoading, setError } from '../slices/product';

export const getProducts = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const { data } = await axios.get('/api/products');
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : 'An unexpected error has occured'
      )
    );
  }
};
