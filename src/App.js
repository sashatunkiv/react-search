import React, { useEffect, useState } from 'react';
import './index.scss';
import 'macro-css';
import Sort from './components/Sort';
import Cart from './pages/Cart';
import MyLoader from './components/Skeleton';
import Product from './components/product';
import AppContext from './components/context';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [sortOder, setSortOrder] = useState('asc');
  const [success, setSuccess] = useState(true);
  // const [invites, setInvites] = useState([]);

  useEffect(() => {
    fetch(`https://656f20526529ec1c623764d5.mockapi.io/items`)
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((err) => {
        console.warn(err);
        alert('Виникла проблема при завантажуванні даних');
      })
      .finally(() => setIsLoading(false));
  }, []);

  const SortProducts = (order) => {
    const SortedProducts = [...items].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setItems(SortedProducts);
  };

  const handleChange = (e) => {
    e.preventDefault();

    setValue('');
  };

  const deleteCartItems = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // const onClickInvite = (id) => {
  //   if (invites.includes(id)) {
  //     setInvites((prev) => prev.filter((_id) => _id !== id));
  //   } else {
  //     setInvites((prev) => [...prev, id]);
  //   }
  // };

  const onClickSendInvites = () => {
    setSuccess(!success);
  };

  // Функція для додавання товару в корзину
  const addToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  return (
    <AppContext.Provider value={{ cartItems, deleteCartItems }}>
      <div className="App">
        {success ? (
          <>
            <div className="cart-info">
              <div>{cartItems.length}</div>
              <img
                onClick={onClickSendInvites}
                width={20}
                className="cart-img"
                src="./img/shopping-cart.png"
                alt='Shopping-cart'
              />
            </div>
            <Sort SortProducts={SortProducts} />
            <div onSubmit={handleChange} className="users">
              <input
                type="text"
                placeholder="Знайти піцу"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              {/* <nav className="category">
                <img width={26} src="/img/pizza.png" />
                <img width={26} src="/img/sushi.png" />
              </nav> */}
              <ul>
                {isLoading ? (
                  <div>
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                    <MyLoader />
                  </div>
                ) : (
                  <>
                    {items
                      .filter((item) => {
                        return item.title.toLowerCase().includes(value.toLowerCase());
                      })
                      .map((item) => (
                        <Product
                          key={item.id}
                          id={item.id}
                          price={item.price}
                          title={item.title}
                          imageUrl={item.imageUrl}
                          onPlus={(obj) => addToCart(obj)}
                        />
                      ))}
                  </>
                )}
              </ul>
              <button>Додати піцу</button>
            </div>
          </>
        ) : (
          <>
            <img
              onClick={onClickSendInvites}
              width={20}
              className="cart-img"
              src="/img/cross.png"
            />
            <Cart />
          </>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
