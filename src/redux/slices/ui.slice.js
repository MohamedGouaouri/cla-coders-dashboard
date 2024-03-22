import {createSlice} from '@reduxjs/toolkit'

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        theme: localStorage.getItem('theme') || 'light'
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme == 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', state.theme)
        }
    }
})

export const {toggleTheme} = uiSlice.actions
