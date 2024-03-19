import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { codersApi } from '../api/coders.api'
import { workspaceSlice } from './slices/workspace.slice'

export const store = configureStore({
  reducer: {
    'workspace': workspaceSlice.reducer,
    // Add the generated reducer as a specific top-level slice
    [codersApi.reducerPath]: codersApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(codersApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)