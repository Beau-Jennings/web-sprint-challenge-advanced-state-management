import { SMURF_IS_FETCHING, SMURF_FETCH_SUCCESS, SMURF_FETCH_FAIL, ADD_NEW_SMURF, ERROR_MESSAGE} from "../actions/index";
export const initialState = {
    smurfs: [],
    appIsLoading: false,
    error: ""
}

const reducer = (state, action) => {
    console.log(initialState);
    switch(action.type) {
        case(SMURF_IS_FETCHING):
        return({
            ...state,
            smurfs: state.smurfs,
            appIsLoading: true
        });

        case(SMURF_FETCH_SUCCESS):
        return ({
            ...state,
            smurfs: state.smurfs,
            appIsLoading: false
        });

        case(SMURF_FETCH_FAIL):
        return({
            appIsLoading: false,
        });

        case(ADD_NEW_SMURF):
        return({
            ...state,
            smurfs: ({
                id: Date.now(),
                name: "",
                position: "",
                nickname: "",
                description: ""
            })
        });

        case(ERROR_MESSAGE):
        return({
        appIsLoading: false,
        error: "Gargamel was unable to catch any Smurfs today"
        });

        default:
            return state;
    };
};

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.