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

export function editeGeneralLocations(incomState, action) {
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

export function editegeneralLocationConditions(incomState, action) {
  return {
    ...incomState.generalLocations,
    [action.payload.key]: {
      ...incomState.generalLocations[action.payload.key],
      conditions: editeCondition(action.payload.response)
    }
  };
}

export function deleteKey(key: string, keys: string[]): string[] {
  if (!checkMinimalLength(keys)) {
    return keys;
  }

  const keysCopy = keys.filter(itemKey => itemKey !== key);
  return keysCopy;
}

export function deleteLocation(key: string, generalLocations) {
  if (!checkMinimalLength(Object.keys(generalLocations))) {
    return generalLocations;
  }

  const generalLocationCopy = Object.assign({}, generalLocations);
  delete generalLocationCopy[key];
  return generalLocationCopy;
}

function checkMinimalLength(values: string[]): boolean {
  return values.length > 3;
}
