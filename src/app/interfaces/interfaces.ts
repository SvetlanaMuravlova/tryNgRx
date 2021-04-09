export interface apiError {
    headers: {
        normalizedNames:any;
        lazyUpdate:any;
        headers: any;
    };
    status: number;
    statusText: string;
    url: string;
    ok: boolean;
    name: string;
    message: string;
}

export interface ICondition {
    WeatherText: string;
    ApparentTemperature: {
        Metric: IMetric;
    };
    Ceiling: {
        Metric: IMetric;
    };
    CloudCover: number;
    LocalObservationDateTime: string;
    RealFeelTemperature: {
        Metric: IMetric;
    }
    Temperature: {
        Metric: IMetric;
    }
    TemperatureSummary: {
        Past24HourRange: {
            Maximum: {
                Metric: IMetric;
            };
            Minimum: {
                Metric: IMetric;
            };
        }
    };
    Visibility: {
        Metric: IMetric;
    };
    WeatherIcon: number;

}

interface IMetric {
    Value: number;
    Unit: string;
}

export interface IAutoCompleteItem {
    AdministrativeArea: ILocalizedName;
    Country: ILocalizedName;
    Key: string;
    Rank: string;
    LocalizedName: string;
    Type: string;
    Version: string;
}

interface ILocalizedName {
    ID: string;
    LocalizedName: string;
}