import API from "../utils/API";

export const checkIfClientHasToken = () => {
  let clientLog = localStorage.getItem("mealoo");
  return {
    type: "CLIENT_LOG_DATA",
    payload: clientLog ? JSON.parse(clientLog) : null,
  };
};
export const checkIsCurrentLandingPage = (status) => {
  return {
    type: "TOGGLE_IS_CURRENT_LANDING_PAGE",
    payload: status,
  };
};

export const selectMeal = (mealName) => async (dispatch) => {
  await API.get(`meals/${mealName}`)
    .then((res) => {
      dispatch({
        type: "SELECT_MEAL",
        payload: { mealName: mealName, mealData: res.data },
      });
    })
    .catch((e) => console.log(e));
};

export const clearMealSelection = () => {
  return { type: "CLEAR_MEAL_SELECTION" };
};

export const toggleMealFetch = (status) => {
  return {
    type: status === true ? `TOGGLE_MEAL_FETCH_ON` : `TOGGLE_MEAL_FETCH_OFF`,
  };
};

export const clientLogIn = (usernameData, passwordData) => async (dispatch) => {
  await API.post("home/sign-in/", {
    username: usernameData,
    password: passwordData,
  })
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: "CLIENT_LOG_IN", payload: response.data });
        localStorage.setItem(
          "mealoo",
          JSON.stringify({ username: usernameData, password: passwordData })
        );
      } else {
        dispatch({ type: "CLIENT_LOG_IN", payload: null });
      }
    })
    .catch((e) => console.log(e));
};

export const clientLogOut = () => {
  return { type: "CLIENT_LOG_OUT" };
};

export const fetchSuggestedMealSet = () => {
  return { type: "FETCH_SET" };
};
