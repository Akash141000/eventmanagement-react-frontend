import { configureStore} from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { rootReducer } from "./reducer"



export const store =  configureStore({
    reducer: rootReducer.reducer,
})

export type IInitialStoreState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<IInitialStoreState> =
  useSelector;
export const useAppDispatch = () => useDispatch<IAppDispatch>();

// persistStore(Store)
// persistReducer(rootReducer)

