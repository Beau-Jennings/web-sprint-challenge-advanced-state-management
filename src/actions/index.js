import axios from 'axios';

export const SMURF_IS_FETCHING = "SMURF_IS_FETCHING";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_FAIL = "SMURF_FETCH_FAIL";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const ERROR_MESSAGE = "ERROR_MESSAGE";

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type:SMURF_IS_FETCHING });

        axios.get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({type:SMURF_FETCH_SUCCESS, payload: res.data.smurfs});
        })
        .catch(err => {
            dispatch({type: SMURF_FETCH_FAIL, payload: err.Response.error})
        });
    };
};

export const smurfIsFetching = () => {
    return ({
        type: SMURF_IS_FETCHING
    });
}

export const smurfFetchSuccess = (smurf) => {
    return ({
        type: SMURF_FETCH_SUCCESS, 
        payload: smurf
    });
}

export const smurfFetchFail = (error) => {
    return ({
        type: SMURF_FETCH_FAIL, 
        payload: error
    });
}

export const addNewSmurf = (index) => {
    return ({
        type: ADD_NEW_SMURF,
        payload: index
    });
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.