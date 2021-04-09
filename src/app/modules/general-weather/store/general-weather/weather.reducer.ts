import { currentCondition } from '@modules/staticInformation/currentConditions';
import { weatherActionsType } from './weather.actions';
import { ICondition } from 'src/app/modules/interfaces/interfaces';
import { state } from '@angular/animations';

export const WEATHER_REDUCER_NODE = 'weather';

export interface IweatherState  {
    date: string;
    list: any;
    keys: string[];
    loading: boolean;
    error: string;
    generalLocations:any
}

const intialStateCurrentConditions: IweatherState = {
    date: new Date().toString(),
    list: {},
    keys: ['323903', '324505', '325343'],
    loading: false,
    error: '',
    generalLocations: {
        323903: {
            Type: "City",
            LocalizedName: "Kharkiv",
            Country: "Ukraine",
            GeoPosition: {
                Longitude: '11111',
                Latitude: '111111'
            }
        },
        324505: {
            Type: "City",
            LocalizedName: "Kharkiv",
            Country: "Ukraine",
            GeoPosition: {
                Longitude: '11111',
                Latitude: '111111'
            }
        },
        325343: {
            Type: "City",
            LocalizedName: "Kharkiv",
            Country: "Ukraine",
            GeoPosition: {
                Longitude: '11111',
                Latitude: '111111'
            }
        }
    }
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
            return {
                ...state,
                list: {
                    ...state.list,
                    [action.payload.key]: editeCondition(action.payload.response)
                }
            }
            break;

        case weatherActionsType.apiError:
        // console.log('Reducer', state, action)
        return state
        break;
        case weatherActionsType.loaddedSuccessLocation:
        // console.log('Reducer', weatherActionsType.loaddedSuccessLocation , state, action)
        return {
            ... state,
            generalLocations: {
                ... state.generalLocations,
                [action.payload.Key]: editeLocation(action.payload)
            }
        }
        break;
        default:
            return state
    }
}

// function initeGeneralLocation(value) {
//     return {

//     }
// }

function editeLocation(value) {
    return {
        Type: value.Type,
        LocalizedName: value.LocalizedName,
        Country: value.Country.LocalizedName,
        GeoPosition: {
            Longitude: value.GeoPosition.Longitude,
            Latitude: value.GeoPosition.Latitude
        }
    }
}

function editeCondition(value) {
    return {
        WeatherIcon: value.WeatherIcon,
        WeatherText: value.WeatherText,
        Temperature: {
            Metric: {
                Value: value.Temperature.Metric.Value
            }
        },
        Wind: {
            Speed: {
                Metric: {
                    Value: value.Wind.Speed.Metric.Value
                }
            }
        },
        LocalObservationDateTime: value.LocalObservationDateTime
    }
}