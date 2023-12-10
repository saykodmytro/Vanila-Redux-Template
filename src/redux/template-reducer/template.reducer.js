import { products } from 'tempData/tempData';

// Записуамо в початковий стан дані із локал стореджу або null
const initialState = {
  products: JSON.parse(localStorage.getItem('products')) ?? products,
};

// Функція Редюсера приймає два параметри (state, action) і обовязково має повертати стан , змінений або ні. Кожемо що наш стан за замовчуванню = початковому стану.

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'products/addProducts': {
      return {
        // додавання нового продукту відбувається таким чином
        // ...state - розпилюється весь стан
        // products: - вибирається поле яке потрібно змінити
        // [...state.products, action.payload] - розпилюється в ньому всі обєкти і додається новий обєкт
        ...state,
        products: [...state.products, action.payload],
      };
    }
    case 'products/deleteProducts': {
      return {
        // віднімання продукту відбувається таким чином
        // ...state - розпилюється весь стан
        // products: - вибирається поле яке потрібно змінити
        // state.products.filter - фільтруємо за умовою
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};
