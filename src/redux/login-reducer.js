const LOGIN_NEXT_STEP = 'LOGIN_NEXT_STEP';
const CHANGE_DATA = 'CHANGE_DATA';

let initialState = {
    steps: [
        {
            name: 'contact',
            active: true,
            initialValues: ['email', 'phone', 'password']
        },

        {
            name: 'address',
            active: false,
            initialValues: ['country', 'address', 'city']
        },

        {
            name: 'category',
            active: false,
            initialValues: ['category1', 'category2', 'category3']
        },

        {
            name: 'success',
            active: false
        }
    ],

    data: {

    }
};

export const nextStep = (key) => {
    return {
        type: LOGIN_NEXT_STEP,
        key
    }
}

export const changeData = (data) => {
    return {
        type: CHANGE_DATA,
        data
    }
}

export const gotoStep = (data_to_save, key) => {
    return (dispatch) => {
        dispatch(nextStep(key));
        dispatch(changeData(data_to_save));
    }
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_DATA: 
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.data
                }
            }

        case LOGIN_NEXT_STEP:
            return {
                ...state,
                steps: state.steps.map((s, index) => {
                    return {
                        ...s,
                        active: index === action.key
                    }
                })
            }

        default: 
            return state;
    }
}

export default loginReducer;