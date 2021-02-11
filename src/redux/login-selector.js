import {createSelector} from 'reselect';

export const getSteps = (state) => {
    return state.login.steps;
}

export const getCurrentStep = createSelector(getSteps, (steps) => {
    let _steps = steps.map((s, index) => {
        return {
            ...s,
            key: index
        }
    })

    return {..._steps.filter(s => s.active)[0]}
});