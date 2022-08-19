import { createContext } from "react";

const initialState={
    page: 1,
    characters: [],
    characterSelected: {}
};

export const RickContext=createContext(null);

export const DispatchContext=createContext(null);

export const LoadingContext=createContext(null);

export const GlobalContext=createContext(null);

// export {RickContext};