import React, { useState } from 'react';

 function Product({ id, price, title, imageUrl, onPlus}) {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        onPlus({ id, price, title, imageUrl})
        setIsAdded(!isAdded);
    }
  return (
    <li key={id} >
      <img width={30} src={imageUrl} />
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
      <img
        className="add-pizza"
        onClick={onClickPlus}
        width={15}
        src={isAdded ? '/img/minus.svg' : '/img/plus.svg'}
       alt='Add'
      />
    </li>
  );
}

export default Product;
