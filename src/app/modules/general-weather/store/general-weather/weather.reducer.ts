import { currentCondition, conditions } from '@modules/staticInformation/currentConditions';
import { WeatherActions, weatherActionsType } from './weather.actions';
export const WEATHER_REDUCER_NODE = 'weather';

export interface IweatherState  {
    date: string;
    list: any[];
}

const intialStateCurrentConditions = {
    date: new Date().toString(),
    list: currentCondition
}



export const weatherReducer = (state:IweatherState  = intialStateCurrentConditions, action: WeatherActions) => {
    switch (action.type) {
        case weatherActionsType.add:
            return {
                ... state,
                list:[
                    ... state.list,
                    conditions[state.list.length]
                ]
            }
        default:
            return state
    }
}