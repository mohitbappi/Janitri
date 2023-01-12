import AsyncStorage from '@react-native-async-storage/async-storage';
import { AnyAction, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { babyKicksReducer } from './baby-kicks-reducer';
import { logoutReducer } from './logout-reducer';

const combinedReducer = combineReducers({
  babyKicksReducer,
  logoutReducer
});

const rootReducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'logout/clearReducer') {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['babyKicksReducer'],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof combinedReducer>
