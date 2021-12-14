import { status } from "../helpers/utils";

export interface LoginResponse {
    responseObject: LoginData;
    exception:      null;
    success:        boolean;
    dateTime:       string;
}

export interface LoginData {
    fullName:      string;
    accountNumber: string;
}

export interface PackagesResponse {
    responseObject: Package[];
    exception:      null;
    success:        boolean;
    dateTime:       string;
}

export interface Package {
    description:      string;
    weight:           number;
    priceToPay:       number;
    supplier:         string;
    courier:          string;
    courierTracking:  string;
    internalTracking: string;
    statusHistory:    StatusHistory[];
}

export interface StatusHistory {
    description: status;
    date:        string;
}


export interface StatusesResponse {
    responseObject: Statuses[];
    exception:      null;
    success:        boolean;
    dateTime:       string;
}

export interface Statuses {
    description: status;
    date:        string;
}


export interface PackagesDetailsParams {
    description:      string;
    weight:           number;
    priceToPay:       number;
    supplier:         string;
    courier:          string;
    courierTracking:  string;
    internalTracking: string;
}
