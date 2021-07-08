import { weatherActionsType } from './weather.actions';

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
}

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

function editeLocation(value) {
    return {
        Type: value.Type,
        LocalizedName: value.LocalizedName,
        Country: value.Country.LocalizedName,
        GeoPosition: {
            Longitude: value.GeoPosition.Longitude,
            Latitude: value.GeoPosition.Latitude
        }
    };
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

function deleteKey(key: string, keys: string[]): string[] {
    if (!checkMinimalLength(keys)) {
        return keys;
    }

    let keysCopy = keys.filter(itemKey => itemKey !== key); 
    return keysCopy;
}

function deleteLocation(key: string, generalLocations) {
    if (!checkMinimalLength(Object.keys(generalLocations))) {
        return generalLocations;
    }

    const generalLocationCopy = Object.assign({}, generalLocations);
    delete generalLocationCopy[key];
    return generalLocationCopy;
}

function checkMinimalLength(values: string[]): boolean {
    return values.length > 3
}
