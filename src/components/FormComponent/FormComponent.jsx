import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch } from 'react-redux';

const FormComponent = () => {
  const dispatch = useDispatch();

  const onHandleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.prodName.value;
    const price = e.currentTarget.elements.prodPrice.value;
    const discount = e.currentTarget.elements.prodDiscount.value;
    const formData = { name, price: Number.parseFloat(price), discount };

    const newProduct = {
      ...formData,
      id: nanoid(),
    };

    const addProductAction = {
      type: 'products/addProducts',
      payload: newProduct,
    };

    dispatch(addProductAction);
  };

  return (
    <div>
      <form className="prod-form" onSubmit={onHandleSubmit}>
        <label className="lable-form" htmlFor="">
          Name:
          <input type="text" name="prodName" />
        </label>

        <label className="lable-form" htmlFor="">
          Price:
          <input type="text" name="prodPrice" />
        </label>

        <label className="lable-form" htmlFor="">
          Discount:
          <input type="text" name="prodDiscount" />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FormComponent;
