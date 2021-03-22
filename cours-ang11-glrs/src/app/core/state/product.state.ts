export enum DataStateEnum{
    LOADED,
    LOADING,
    ERROR
}

export interface  AppDataState<T>{
    dataState:DataStateEnum,
    data?:T,
    errorMessage?:string
}