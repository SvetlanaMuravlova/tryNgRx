import { weatherActionsType } from './weather.actions';

export const WEATHER_REDUCER_NODE = 'weather';

export interface IweatherState  {
    date: string;
    keys: string[];
    loading: boolean;
    generalLocations: any;
}

const intialStateCurrentConditions: IweatherState = {
    date: new Date().toString(),
    keys: ['323903', '324505', '325343'],
    loading: false,
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

export const weatherReducer = (incomState: IweatherState  = intialStateCurrentConditions, action) => {
    switch (action.type) {
        case weatherActionsType.add:
          return {
                ... incomState,
                keys: action.keys
            };
          break;
        case weatherActionsType.loaddedSuccessCondition:
            return {
                ...incomState,
              generalLocations: editegeneralLocationConditions(incomState, action)
            };
            break;

        case weatherActionsType.loaddedSuccessLocation:
        return {
            ... incomState,
            generalLocations: editeGeneralLocations(incomState, action)
        }
        break;
        default:
            return incomState;
    }
};

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

function editeGeneralLocations(incomState, action) {
  return {
    ... incomState.generalLocations,
    [action.payload.Key]: editeLocation(action.payload)
  };
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
    };
}

function editegeneralLocationConditions(incomState, action) {
  return {
    ...incomState.generalLocations,
    [action.payload.key]: {
      ...incomState.generalLocations[action.payload.key],
      conditions: editeCondition(action.payload.response)
    }
  };
}
