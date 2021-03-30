import { currentCondition, conditions } from '@modules/staticInformation/currentConditions';
import { WeatherActions, weatherActionsType } from './weather.actions';
export const WEATHER_REDUCER_NODE = 'weather';

interface intialState  {
    date: string;
    list: any[];
}

const intialStateCurrentConditions = {
    date: new Date().toString(),
    list: currentCondition
}



export const weatherReducer = (state:intialState  = intialStateCurrentConditions, action: WeatherActions) => {
    switch (action.type) {
        case weatherActionsType.add:
            return state.list.push(conditions[state.list.length])
        default:
            return state
    }
}