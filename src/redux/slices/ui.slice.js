import {createSlice} from '@reduxjs/toolkit'

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        theme: localStorage.getItem('theme') || 'light',
        selectedCategory: 'All'
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme == 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', state.theme)
        },
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    }
})

export const {toggleTheme, selectCategory: selectCategoryAction} = uiSlice.actions
