import { combineReducers, createStore } from 'redux';
import { productsReducer } from './template-reducer/template.reducer';

// rootReducer буде викликати combineReducers з Redux і сюди ми будемо передавати обєкт редюсерів. Дальше його передаємо в сховище.

const rootReducer = combineReducers({
  productsData: productsReducer,
});

// store - саме сховище, в нього передається корневий редюсер (rootReducer)

export const store = createStore(rootReducer);
