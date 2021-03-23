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

export enum ProduitActionTypeEnum{
    ALL_PRODUCT,
    SELECTED_PRODUCT,
    PROMO_PRODUCT,
    SEARCH_PRODUCT,
    SELECT_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT
}
export interface ActionEvent{
    type:ProduitActionTypeEnum,
    payload?:any
}