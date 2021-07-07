import { forecastActionsType } from '@modules/forecasts/store/forecasts/forecast.actions';

export const FORECAST_REDUCER_NODE = 'forecast';

export type IForecastState = {
  keys: string[];
  position: {
    [key: string]: {
      lat: string;
      lon: string;
    }
  } ;
  period: string;
};

const intialStateForecast = {
  keys: ['323903', '324505', '325343'],
  position: {
    323903: {
      lat: '46.485',
      lon: '30.743',
    },
    324505: {
      lat: '46.485',
      lon: '30.743',
    },
    325343: {
      lat: '46.485',
      lon: '30.743',
    }
  },
  period: '16'
};


export const forecastReducer = (incomState: IForecastState = intialStateForecast, action) => {
  switch (action.type) {
    case forecastActionsType.updateKeys:
    return {
      ... incomState,
      keys: action.keys
    };
    default:
      return incomState;
  }
};
