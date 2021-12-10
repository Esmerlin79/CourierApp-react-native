import React from 'react';
import { createContext, useState } from "react";
import courierApi from '../api/courierApi';
import { LoginData, LoginResponse } from "../interfaces/appInterfaces";

export interface AuthContextProps {
    user: LoginData;
    authenticated: boolean;
    errorMessage: string;
    isLoading: boolean;
    signIn: ( username: string, password: string ) => void;
    addErrorMessage: (message: string) => void;
    resetError: () => void;
}

const initialState = {
     user: {
        fullName: '',
        accountNumber: ''
     },
     authenticated: false,
     errorMessage: '',
}

export const AuthContext = createContext({} as AuthContextProps);


const AuthProvider = ({ children }: any) => {

    const [state, setstate] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);

    const signIn = async ( username: string, password: string ) => {
        setIsLoading(true);
        const resp = await courierApi.post<LoginResponse>('/membership/login', { username, password });

        if( resp.data.exception ) {
            setIsLoading(false);
            return setstate({...state, errorMessage: resp.data.exception })
        }

        setstate({
            ...state,
            user: resp.data.responseObject,
            authenticated: true,
        })
        setIsLoading(false);
    }
    
    const addErrorMessage = ( message: string ) => {
        setstate({
            ...state,
            errorMessage: message
        })
    }

    const resetError = () => {
        setstate({
            ...state,
            errorMessage: ''
        })
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            isLoading,
            signIn,
            addErrorMessage,
            resetError
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;