import {createSlice} from '@reduxjs/toolkit'

export const workspaceSlice = createSlice({
    name: 'workspace',
    initialState: {
        fontSize: 16,
        language: 'js',
    },
    reducers: {
        changeFontSize: (state, action) => {
            state.fontSize = action.payload && action.payload.fontSize ? action.payload.fontSize : 16
        },
        changeLanguage: (state, action) => {
            state.language = action.payload && action.payload.language && ['py', 'js'].includes(action.payload.language) ? action.payload.language : 'js'
        }
    }
})

export const {changeFontSize, changeLanguage} = workspaceSlice.actions
