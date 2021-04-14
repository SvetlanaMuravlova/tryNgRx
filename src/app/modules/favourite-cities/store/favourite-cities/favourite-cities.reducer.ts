import { currentCondition } from '@modules/staticInformation/currentConditions';
import { weatherActionsType } from '@fav-cities/favourite-cities.actions';
import { ICondition } from '@interfaces/interfaces';
import { state } from '@angular/animations';
import { addKey } from '@fav-cities/favourite-cities.actions'
// import { on } '@ngrx/effects';
export const FAV_CITIES_REDUCER_NODE = 'favCities';

export interface IFavCitiesState  {
    date: string;
    list: any;
    keys: string[];
    loading: boolean;
    error: string;
    favLocations:any
}

const intialStateCurrentConditions: IFavCitiesState = {
    date: new Date().toString(),
    list: {},
    keys: ['323903', '324505', '325343'],
    loading: false,
    error: '',
    favLocations: {
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

export const favCitiesrReducer = (state: IFavCitiesState  = intialStateCurrentConditions, action) => {
    switch (action.type) {
        case weatherActionsType.add:
            return {
                ... state,
                keys: action.keys
            }
            break;
        default:
            return state
    }
}

