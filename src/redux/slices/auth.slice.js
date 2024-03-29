import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: sessionStorage.getItem('token'),
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token
            sessionStorage.setItem('token', state.token)
        },
        logout: (state) => {
            state.token = null
            sessionStorage.removeItem('token')
        }
    }
})

export const {login: loginAction, logout: logoutAction} = authSlice.actions
