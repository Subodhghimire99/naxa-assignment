import axios from "axios";
import USER from "../constants";

const apiUrl = "https://admin.naxa.com.np/api/services";

export const requestUsers = (data) => async (dispatch) => {
  dispatch({
    type: USER.LOAD,
  });
  try {
    const json = await axios.get(apiUrl);
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: json.data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: [],
      isError: true,
    });
  }
};
