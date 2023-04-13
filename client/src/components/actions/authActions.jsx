import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:1337/auth/local", {
      identifier: email,
      password: password,
    });
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: err.response.data.message[0].messages[0].message,
    });
  }
};

export const register = (username, email, password) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:1337/auth/local/register", {
      username: username,
      email: email,
      password: password,
    });
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "REGISTER_FAIL",
      payload: err.response.data.message[0].messages[0].message,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
};
