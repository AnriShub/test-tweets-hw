import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cardsSlice from './cardsSlice'
import filterSlice from './filterSlice'
import { setupListeners } from '@reduxjs/toolkit/query';
import { pageReducer } from 'redux/pageSlice'
import { cardsApi } from 'redux/cardsApi'

const rootPersistConfig = {
    key: 'root',
    storage,
};

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    cardsApi.middleware,
];

const rootReducer = combineReducers({
    cards: cardsSlice,
    filters: filterSlice,
});

export const store = configureStore({
    reducer: {
        root: persistReducer(rootPersistConfig, rootReducer),
        pages: pageReducer,
        [cardsApi.reducerPath]: cardsApi.reducer,
    },
    middleware,
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);