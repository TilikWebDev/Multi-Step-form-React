const SET_SEND_DATA = 'SET_SEND_DATA';

let initialState = {
    send_data: {

    }
};

export const setSendData = (new_data) => {
    return (dispatch) => {
        dispatch({
            type: SET_SEND_DATA,
            new_data
        })
    }
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEND_DATA:
            return {
                ...state,
                send_data: {
                    ...action.new_data
                }
            }

        default: 
            return state;
    }
}

export default loginReducer;