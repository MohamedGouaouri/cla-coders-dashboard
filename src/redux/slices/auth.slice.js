import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token'),
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token
            localStorage.setItem('token', state.token)
        },
        logout: (state) => [

        ]
    }
})

export const {login: loginAction, logout: logoutAction} = authSlice.actions
