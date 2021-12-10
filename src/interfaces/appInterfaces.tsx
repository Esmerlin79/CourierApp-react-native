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
