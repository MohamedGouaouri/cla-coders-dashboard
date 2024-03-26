import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from '../api/auth.api'
import { challengesApi } from '../api/challenges.api'
import { workspaceSlice } from './slices/workspace.slice'
import { uiSlice } from './slices/ui.slice'
import { authSlice } from './slices/auth.slice'
import { gradingApi } from '../api/grading.api'

export const store = configureStore({
  reducer: {
    'workspace': workspaceSlice.reducer,
    'ui': uiSlice.reducer,
    'auth': authSlice.reducer,
    // Add the generated reducer as a specific top-level slice
    [authApi.reducerPath]: authApi.reducer,
    [challengesApi.reducerPath]: challengesApi.reducer,
    [gradingApi.reducerPath]: gradingApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(challengesApi.middleware)
      .concat(gradingApi.middleware)
      ,
    
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)