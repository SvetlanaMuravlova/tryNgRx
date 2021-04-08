import { currentCondition, conditions } from '@modules/staticInformation/currentConditions';
import { weatherActionsType } from './weather.actions';

export const WEATHER_REDUCER_NODE = 'weather';

export interface IweatherState  {
    date: string;
    list: any[];
    keys: string[];
    loading: boolean;
    error: string;
}

const intialStateCurrentConditions: IweatherState = {
    date: new Date().toString(),
    list: currentCondition,
    keys: ['323903', '324505', '325343'],
    loading: false,
    error: ''
}

export const weatherReducer = (state:IweatherState  = intialStateCurrentConditions, action) => {
    switch (action.type) {
        case weatherActionsType.add:
            return {
                ... state,
                keys: action.keys
            }
            break;
        case weatherActionsType.loaddedSuccessCondition:
            console.log('Reducer', state, action)
            return state
            break;

        case weatherActionsType.apiError:
        console.log('Reducer', state, action)
        return state
        break;
        default:
            return state
    }
}