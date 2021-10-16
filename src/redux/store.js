import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { 
    persistStore, 
    persistReducer, 
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER 
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'
import { combineReducer } from "./redusers";

const middleware = [...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
    }), 
    logger,
];

const persistConfig = {
    key: 'items',
    storage,
    blacklist: ['filter'],
};

const store = configureStore({
    reducer: {
        contacts: persistReducer(persistConfig, combineReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };