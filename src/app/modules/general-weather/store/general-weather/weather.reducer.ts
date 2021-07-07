import { weatherActionsType } from './weather.actions';
import {
  editegeneralLocationConditions,
  editeGeneralLocations,
  deleteKey,
  deleteLocation
} from '../helpers/store-helpers';
export const WEATHER_REDUCER_NODE = 'weather';

export interface IweatherState  {
    date: string;
    keys: string[];
    loading: boolean;
    generalLocations?: any;
}

const intialStateCurrentConditions: IweatherState = {
    date: new Date().toString(),
    keys: ['323903', '324505', '325343'],
    loading: false
};

export const weatherReducer = (incomState: IweatherState  = intialStateCurrentConditions, action) => {
    switch (action.type) {
        case weatherActionsType.updateKeys:
          return {
                ... incomState,
                keys: action.keys
            };
        case weatherActionsType.loaddedSuccessCondition:
            return {
                ...incomState,
              generalLocations: editegeneralLocationConditions(incomState, action)
            };

        case weatherActionsType.loaddedSuccessLocation:
            return {
                ... incomState,
                generalLocations: editeGeneralLocations(incomState, action)
            };

        case weatherActionsType.loading:
            return {
                ... incomState,
                loading: action.value
            };

        case weatherActionsType.deleteLocation:
            return {
                ... incomState,
                keys: deleteKey(action.key, incomState.keys),
                generalLocations: deleteLocation(action.key, incomState.generalLocations)
            };
        default:
            return incomState;
    }
};


