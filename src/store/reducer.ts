import { Actions, createSlice } from "@reduxjs/toolkit";

interface initialState {
  token: string | null;
  user: any;
  authType: string | null;
}

export const initialStoreState: initialState = {
  token: null,
  user: null,
  authType: null,
};

// interface actions{
//     addToken:string,
// }

// export const actions:actions = {
//     addToken : "[store] token"
// }

// export const rootReducer = (state:initialState,action: keyof actions)=>{
//     switch(action){
//         case actions.addToken:{
//             console.log('here');
//             break;
//         }

//     }
// }

type action = {
  readonly payload: any;
  type: any;
};

export const rootReducer = createSlice({
  initialState: initialStoreState,
  name: "root",
  reducers: {
    addToken(state: initialState, action: action) {
      return {
        ...state,
        token: action.payload,
      };
    },
    addAuthType(state: initialState, action: action) {
      return {
        ...state,
        authType: action.payload,
      };
    },
    addUser(state:initialState,action:action){
      return {
        ...state,
        user:action.payload
      }
    }
  },
});

export const actions = rootReducer.actions;
